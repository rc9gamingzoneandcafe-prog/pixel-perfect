import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import type { Experience } from "@/data/site";
import { PriceList } from "./PriceList";

export function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-sm border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={exp.image}
          alt={`${exp.name} RC racing at RC 9`}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-0 top-0 h-1 w-0 racing-stripe transition-all duration-500 group-hover:w-full" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl leading-none text-card-foreground">{exp.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{exp.short}</p>
        <PriceList exp={exp} className="mt-4 flex-1" />
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-sm">
          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
            <Clock className="size-4 text-primary" /> {exp.duration}
          </span>
          <span className="font-display text-lg font-bold text-foreground">
            {exp.prices.length ? `from ${exp.from}` : exp.from}
          </span>
        </div>
        <Link
          to="/experiences"
          hash={exp.slug}
          className="mt-5 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.14em] text-primary transition-colors hover:text-racing-deep"
        >
          Explore <ArrowRight className="arrow size-4" />
        </Link>
      </div>
    </article>
  );
}
