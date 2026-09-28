import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/rc/PageShell";
import { PricingCard } from "@/components/rc/PricingCard";
import { FaqAccordion } from "@/components/rc/FaqAccordion";
import { FinalCta } from "@/components/rc/FinalCta";
import { plans, experiences } from "@/data/site";
import { PriceList } from "@/components/rc/PriceList";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing & Sessions | RC 9" },
      { name: "description", content: "RC racing sessions from 15 to 90 minutes. Compare Starter, Racer, Pro and Group plans at RC 9." },
      { property: "og:title", content: "Pricing & Sessions | RC 9" },
      { property: "og:description", content: "RC racing sessions from 15 to 90 minutes. Compare Starter, Racer, Pro and Group plans at RC 9." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <PageHeader eyebrow="Pricing" title="Sessions & pricing" subtitle="Car, controller, briefing and marshal support included in every session." />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{plans.map((p) => <PricingCard key={p.name} plan={p} />)}</div>
        <p className="mt-8 text-sm text-muted-foreground">Prices per racer unless stated. Group pricing covers the full slot.</p>
      </Section>
      <Section tone="muted">
        <h2 className="text-4xl text-foreground">Experience prices</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {experiences.map((e) => (
            <div key={e.slug} className="rounded-sm border border-border bg-background p-6">
              <div className="h-1 w-10 racing-stripe" />
              <h3 className="mt-4 text-2xl text-foreground">{e.name}</h3>
              <PriceList exp={e} className="mt-4" />
            </div>
          ))}
        </div>
      </Section>
      <Section><h2 className="text-4xl text-foreground">Common questions</h2><div className="mt-8 max-w-3xl"><FaqAccordion limit={5} /></div></Section>
      <FinalCta />
    </>
  );
}
