import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/rc/Hero";
import { SectionHeading } from "@/components/rc/SectionHeading";
import { Section } from "@/components/rc/PageShell";
import { ExperienceCard } from "@/components/rc/ExperienceCard";
import { PricingCard } from "@/components/rc/PricingCard";
import { Leaderboard } from "@/components/rc/Leaderboard";
import { Testimonials } from "@/components/rc/Testimonials";
import { FaqAccordion } from "@/components/rc/FaqAccordion";
import { Gallery } from "@/components/rc/Gallery";
import { FinalCta } from "@/components/rc/FinalCta";
import { AnimatedCounter } from "@/components/rc/AnimatedCounter";
import { Reveal } from "@/components/rc/Reveal";
import { experiences, plans, stats, benefits, steps, occasions } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RC 9 | Premium RC Racing Experience" },
      { name: "description", content: "Race high-performance RC cars on purpose-built tracks. Book racing sessions, birthdays and corporate events at RC 9." },
      { property: "og:title", content: "RC 9 | Premium RC Racing Experience" },
      { property: "og:description", content: "Race high-performance RC cars on purpose-built tracks. Book racing sessions, birthdays and corporate events at RC 9." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <>
      <Hero />
      <section className="surface-ink border-t border-ink-border">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-12 sm:px-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-5xl font-bold text-ink-foreground"><AnimatedCounter value={s.value} suffix={s.suffix} /></div>
              <div className="mt-1 text-sm uppercase tracking-wider text-ink-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
      <Section>
        <SectionHeading eyebrow="Track Experiences" title="Four ways to race" subtitle="From flat-out pace to technical rock crawling." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((e) => <ExperienceCard key={e.slug} exp={e} />)}
        </div>
      </Section>
      <Section tone="muted">
        <SectionHeading eyebrow="Why RC 9" title="Built for real racing" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 60} className="rounded-sm border border-border bg-background p-6">
              <div className="h-1 w-10 racing-stripe" />
              <h3 className="mt-4 text-2xl text-foreground">{b.title}</h3>
              <p className="mt-2 text-muted-foreground">{b.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section tone="ink">
        <SectionHeading tone="dark" eyebrow="How it works" title="From briefing to chequered flag" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.no} className="border-l-2 border-primary pl-5">
              <div className="font-display text-5xl font-bold text-primary">{s.no}</div>
              <h3 className="mt-2 text-xl text-ink-foreground">{s.title}</h3>
              <p className="mt-1 text-ink-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <SectionHeading eyebrow="Sessions" title="Pick your time on track" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((p) => <PricingCard key={p.name} plan={p} />)}
        </div>
      </Section>
      <Section tone="muted">
        <SectionHeading eyebrow="Perfect for" title="Every crew, every occasion" />
        <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {occasions.map((o) => (
            <Link key={o.title} to={o.to} className="group rounded-sm border border-border bg-background p-6 transition-colors hover:border-primary">
              <h3 className="text-2xl text-foreground group-hover:text-primary">{o.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{o.text}</p>
            </Link>
          ))}
        </div>
      </Section>
      <Section tone="ink"><Leaderboard /></Section>
      <Section><SectionHeading eyebrow="Gallery" title="Inside RC 9" /><div className="mt-12"><Gallery limit={6} /></div></Section>
      <Section tone="muted"><Testimonials /></Section>
      <Section><SectionHeading eyebrow="FAQ" title="Before you race" /><div className="mt-10 max-w-3xl"><FaqAccordion limit={6} /></div></Section>
      <FinalCta />
    </>
  );
}
