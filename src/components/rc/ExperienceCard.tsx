import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Experience } from "@/data/site";

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
          className="h-full w-full object-cover race-pan"
        />
        <span aria-hidden className="absolute inset-0 race-streaks" />
        <span className="absolute left-0 top-0 h-1 w-0 racing-stripe transition-all duration-500 group-hover:w-full" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl leading-none text-card-foreground">{exp.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{exp.short}</p>
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
