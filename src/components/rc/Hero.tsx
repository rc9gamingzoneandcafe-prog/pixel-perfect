import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-drift.jpg";

export function Hero() {
  return (
    <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-ink">
      <img
        src={heroImg}
        alt="An RC race car drifting through a floodlit corner at RC 9"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full animate-[hero-zoom_18s_ease-out_forwards] object-cover"
      />
      <div className="absolute inset-0 hero-scrim" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6 sm:pb-32">
        <span className="inline-flex animate-in fade-in slide-in-from-bottom-3 items-center gap-2 rounded-sm border border-ink-border bg-ink/40 px-3 py-1.5 font-display text-xs font-bold uppercase tracking-[0.28em] text-ink-foreground backdrop-blur duration-700">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" /> RC Racing · Cafe · Events
        </span>

        <h1 className="mt-6 max-w-4xl animate-in fade-in slide-in-from-bottom-4 text-balance-tight text-6xl leading-[0.88] text-ink-foreground duration-700 sm:text-8xl lg:text-[7rem]">
          Race. Control.{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Conquer.
          </span>
        </h1>

        <p className="mt-6 max-w-xl animate-in fade-in slide-in-from-bottom-4 text-lg leading-relaxed text-ink-foreground/85 delay-150 duration-700">
          High-performance RC cars. Purpose-built tracks. Real competition. Experience RC racing
          like never before.
        </p>

        <div className="mt-9 flex animate-in fade-in slide-in-from-bottom-4 flex-col gap-3 delay-300 duration-700 sm:flex-row">
          <Button asChild variant="race" size="raceLg">
            <Link to="/book">
              Book Your Race <ArrowRight className="arrow" />
            </Link>
          </Button>
          <Button asChild variant="outlineLight" size="raceLg">
            <Link to="/experiences">Explore Experiences</Link>
          </Button>
        </div>
      </div>

      <div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-ink-foreground/70 sm:flex"
        aria-hidden="true"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="size-4 animate-bounce" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 racing-stripe" aria-hidden="true" />
    </section>
  );
}
