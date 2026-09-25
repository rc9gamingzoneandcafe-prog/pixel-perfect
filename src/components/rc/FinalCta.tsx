import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/data/site";

export function FinalCta({
  title = "Ready To Race?",
  subtitle = "Your next race is waiting.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden ink-gradient py-24 sm:py-32">
      <div className="absolute inset-0 grid-lines" aria-hidden="true" />
      <div
        className="absolute -left-24 top-1/2 h-[140%] w-[60%] -translate-y-1/2 -skew-x-12 opacity-20 racing-stripe blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-balance-tight text-5xl leading-[0.9] text-ink-foreground sm:text-7xl">
          {title}
        </h2>
        <p className="mt-5 font-display text-xl uppercase tracking-[0.18em] text-ink-muted">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild variant="race" size="raceLg">
            <Link to="/book">
              Book Your Race <ArrowRight className="arrow" />
            </Link>
          </Button>
          <Button asChild variant="outlineLight" size="raceLg">
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              <MessageCircle /> WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 racing-stripe" aria-hidden="true" />
    </section>
  );
}
