import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { getRecommendation } from "@/lib/recommend.functions";

type Result = { slug: string; name: string; reason: string };

export function RaceMatch() {
  const ask = useServerFn(getRecommendation);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (text.trim().length < 3 || loading) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const r = await ask({ data: { interests: text } });
      if (r.ok) setResult({ slug: r.slug, name: r.name, reason: r.reason });
      else setError(r.error);
    } catch {
      setError("We couldn't get a recommendation right now. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl rounded-sm border border-border bg-background p-6 shadow-card sm:p-8">
      <div className="h-1 w-10 racing-stripe" />
      <h3 className="mt-4 flex items-center gap-2 text-2xl text-foreground">
        <Sparkles className="size-5 text-primary" /> Find your race
      </h3>
      <p className="mt-2 text-muted-foreground">
        Tell us what you enjoy — speed, tricks, obstacles, who you're coming with — and our AI-powered track host will pick your perfect experience.
      </p>
      <form onSubmit={submit} className="mt-5 space-y-3">
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={600}
          rows={3}
          placeholder="e.g. My 10-year-old loves building things and climbing over rocks…"
          aria-label="Describe your racing interests"
        />
        <Button type="submit" variant="race" disabled={loading || text.trim().length < 3}>
          {loading ? <><Loader2 className="size-4 animate-spin" /> Finding your match…</> : <>Recommend my experience</>}
        </Button>
      </form>
      {error && <p className="mt-4 text-sm text-destructive" role="alert">{error}</p>}
      {result && (
        <div className="mt-6 animate-fade-in border-l-2 border-primary pl-5" aria-live="polite">
          <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Your match</div>
          <div className="mt-1 font-display text-3xl font-bold uppercase text-primary">{result.name}</div>
          <p className="mt-2 text-foreground">{result.reason}</p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link to="/book" search={{ experience: result.slug } as never} className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.14em] text-primary hover:text-racing-deep">
              Book it <ArrowRight className="size-4" />
            </Link>
            <Link to="/experiences" hash={result.slug} className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground">
              Learn more
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
