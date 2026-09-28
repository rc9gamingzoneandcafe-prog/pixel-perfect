import { PRICE_TBA, type Experience } from "@/data/site";
import { cn } from "@/lib/utils";

/** Compact per-experience price list, read from the central content file. */
export function PriceList({ exp, className }: { exp: Experience; className?: string }) {
  if (exp.prices.length === 0) {
    return (
      <p className={cn("font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground", className)}>
        Pricing: {PRICE_TBA}
      </p>
    );
  }
  return (
    <div className={cn("space-y-3", className)}>
      {exp.prices.map((tier) => (
        <div key={tier.duration}>
          <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-primary">
            {tier.duration}
          </p>
          <ul className="mt-1 space-y-0.5">
            {tier.options.map((o) => (
              <li
                key={o.label}
                className="flex justify-between gap-3 font-display text-sm uppercase tracking-wide"
              >
                <span className="text-muted-foreground">{o.label}</span>
                <span className="font-bold text-foreground">{o.price}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
