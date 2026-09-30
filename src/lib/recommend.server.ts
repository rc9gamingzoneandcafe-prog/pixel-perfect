import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { experiences } from "@/data/site";

const GATEWAY = "https://ai.gateway.lovable.dev/v1";
const MODEL = "openai/gpt-6-astra";
const RUN_ID_HEADER = "X-Lovable-AIG-Run-ID";

function runIdFetch() {
  let runId: string | undefined;
  return async (input: RequestInfo | URL, init?: RequestInit) => {
    const headers = new Headers(init?.headers);
    if (runId && !headers.has(RUN_ID_HEADER)) headers.set(RUN_ID_HEADER, runId);
    const res = await fetch(input, { ...init, headers });
    runId ??= res.headers.get(RUN_ID_HEADER)?.trim() || undefined;
    return res;
  };
}

export type Recommendation = { slug: string; name: string; reason: string };

export class RecommendError extends Error {
  constructor(message: string, public status: number) {
    super(message);
  }
}

export async function recommendExperience(interests: string): Promise<Recommendation> {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) throw new RecommendError("The recommender isn't set up yet.", 500);

  const provider = createOpenAI({
    baseURL: GATEWAY,
    apiKey,
    headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
    fetch: runIdFetch(),
  });

  const catalogue = experiences
    .map((e) => `- slug: ${e.slug} | name: ${e.name} | ${e.short}`)
    .join("\n");

  const result = streamText({
    model: provider.responses(MODEL),
    system:
      "You are the friendly track host at RC 9, an RC racing venue in Hyderabad. " +
      "Pick exactly ONE experience from the list that best fits the visitor. " +
      'Reply ONLY with JSON: {"slug": "<slug from list>", "reason": "<2 short, upbeat sentences addressed to the visitor>"}.\n\n' +
      `Experiences:\n${catalogue}`,
    prompt: interests,
    providerOptions: {
      openai: {
        forceReasoning: true,
        reasoningEffort: "low",
        reasoningSummary: "auto",
        store: false,
        include: ["reasoning.encrypted_content"],
      },
    },
  });

  let text: string;
  try {
    text = await result.text;
  } catch (err: unknown) {
    const status = (err as { statusCode?: number })?.statusCode ?? 500;
    if (status === 402) throw new RecommendError("Recommendations are paused right now. Please try again later.", 402);
    if (status === 429) throw new RecommendError("Lots of racers asking at once. Please try again in a minute.", 429);
    throw new RecommendError("We couldn't get a recommendation right now. Please try again.", status);
  }

  const match = text.match(/\{[\s\S]*\}/);
  let parsed: { slug?: string; reason?: string } = {};
  try {
    parsed = match ? JSON.parse(match[0]) : {};
  } catch {
    /* fall through */
  }
  const exp = experiences.find((e) => e.slug === parsed.slug);
  if (!exp || !parsed.reason) throw new RecommendError("We couldn't get a recommendation right now. Please try again.", 500);
  return { slug: exp.slug, name: exp.name, reason: parsed.reason };
}
