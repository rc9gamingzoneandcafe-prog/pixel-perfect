import { Star } from "lucide-react";
import { testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
      {testimonials.map((t) => (
        <figure
          key={t.name}
          className="w-[82vw] shrink-0 snap-start rounded-sm border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:w-auto"
        >
          <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={
                  i < t.rating ? "size-4 fill-accent text-accent" : "size-4 text-border"
                }
              />
            ))}
          </div>
          <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
            “{t.text}”
          </blockquote>
          <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary font-display text-sm font-bold text-foreground">
              {t.name.charAt(0)}
            </span>
            <span className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
              {t.name}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
