import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const getRecommendation = createServerFn({ method: "POST" })
  .inputValidator((data) => z.object({ interests: z.string().trim().min(3).max(600) }).parse(data))
  .handler(async ({ data }) => {
    const { recommendExperience, RecommendError } = await import("./recommend.server");
    try {
      return { ok: true as const, ...(await recommendExperience(data.interests)) };
    } catch (err) {
      const message = err instanceof RecommendError ? err.message : "We couldn't get a recommendation right now.";
      return { ok: false as const, error: message };
    }
  });
