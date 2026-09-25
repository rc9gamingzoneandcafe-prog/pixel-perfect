import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Plan } from "@/data/site";
import { cn } from "@/lib/utils";

export function PricingCard({ plan }: { plan: Plan }) {
  return (
    <article
      className={cn(
        "relative flex flex-col rounded-sm border p-7 transition-all duration-300 hover:-translate-y-1",
        plan.popular
          ? "border-transparent surface-ink shadow-lift"
          : "border-border bg-card shadow-card hover:shadow-lift",
      )}
    >
      {plan.popular ? (
        <span className="absolute -top-3 left-7 rounded-sm bg-accent px-3 py-1 font-display text-xs font-bold uppercase tracking-[0.18em] text-accent-foreground">
          Most Popular
        </span>
      ) : null}

      <h3
        className={cn(
          "text-2xl leading-none",
          plan.popular ? "text-ink-foreground" : "text-card-foreground",
        )}
      >
        {plan.name}
      </h3>
      <p
        className={cn(
          "mt-2 font-display text-sm font-semibold uppercase tracking-[0.2em]",
          plan.popular ? "text-ink-muted" : "text-muted-foreground",
        )}
      >
        {plan.duration}
      </p>
      <p
        className={cn(
          "mt-6 font-display text-5xl font-bold leading-none",
          plan.popular ? "text-ink-foreground" : "text-foreground",
        )}
      >
        {plan.price}
      </p>

      <ul className="mt-7 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li
            key={f}
            className={cn(
              "flex items-start gap-2.5 text-sm",
              plan.popular ? "text-ink-muted" : "text-muted-foreground",
            )}
          >
            <Check className="mt-0.5 size-4 shrink-0 text-primary" />
            {f}
          </li>
        ))}
      </ul>

      <Button
        asChild
        variant={plan.popular ? "race" : "outlineInk"}
        size="race"
        className="mt-8 w-full"
      >
        <Link to="/book" search={{ plan: plan.name.toLowerCase() }}>
          {plan.cta} <ArrowRight className="arrow" />
        </Link>
      </Button>
    </article>
  );
}
