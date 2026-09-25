import { leaderboard } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Motorsport-style timing board.
 * Data comes from `leaderboard` in src/data/site.ts — swap that for a live
 * query later without changing this component.
 */
export function Leaderboard() {
  return (
    <div className="overflow-hidden rounded-sm border border-ink-border bg-ink/60">
      <div className="grid grid-cols-[3rem_1fr_auto] gap-4 border-b border-ink-border px-4 py-3 font-display text-xs font-bold uppercase tracking-[0.22em] text-ink-muted sm:px-6">
        <span>Pos</span>
        <span>Racer</span>
        <span>Lap</span>
      </div>
      <ul>
        {leaderboard.map((row) => (
          <li
            key={row.position}
            className="group grid grid-cols-[3rem_1fr_auto] items-center gap-4 border-b border-ink-border/60 px-4 py-4 transition-colors hover:bg-primary/15 sm:px-6"
          >
            <span
              className={cn(
                "inline-flex h-8 w-8 items-center justify-center rounded-sm font-display text-sm font-bold",
                row.position === 1
                  ? "bg-accent text-accent-foreground"
                  : row.position <= 3
                    ? "bg-primary text-primary-foreground"
                    : "bg-ink-foreground/10 text-ink-foreground",
              )}
            >
              {row.position}
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-lg font-semibold uppercase tracking-wide text-ink-foreground">
                {row.racer}
              </span>
              <span className="text-xs uppercase tracking-[0.18em] text-ink-muted">
                {row.track}
              </span>
            </span>
            <span className="font-display text-xl font-bold tabular-nums text-ink-foreground">
              {row.time}
            </span>
          </li>
        ))}
      </ul>
      <div className="px-4 py-5 text-center font-display text-sm font-bold uppercase tracking-[0.24em] text-primary sm:px-6">
        Your name could be here.
      </div>
    </div>
  );
}
