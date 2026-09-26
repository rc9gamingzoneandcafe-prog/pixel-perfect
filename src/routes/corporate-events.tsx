import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/rc/PageShell";
import { FinalCta } from "@/components/rc/FinalCta";
import { Button } from "@/components/ui/button";
import { corporate } from "@/data/gallery";
import { whatsappLink } from "@/data/site";
const points = ["Private venue or track slots","Tournament brackets & live timing","Team scoring & trophies","Cafe catering","Weekday and weekend availability"];

export const Route = createFileRoute("/corporate-events")({
  head: () => ({
    meta: [
      { title: "Corporate Events | RC 9" },
      { name: "description", content: "Team building that everyone joins. RC racing tournaments and private corporate sessions at RC 9." },
      { property: "og:title", content: "Corporate Events | RC 9" },
      { property: "og:description", content: "Team building that everyone joins. RC racing tournaments and private corporate sessions at RC 9." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CorporateEventsPage,
});

function CorporateEventsPage() {
  return (
    <>
      <PageHeader eyebrow="Corporate Events" title="Team building at full throttle" subtitle="Tournaments, team races and private sessions — nobody sits this one out.">
        <Button asChild variant="race" size="race"><Link to="/book">Enquire & Book</Link></Button>
        <Button asChild variant="outlineLight" size="race"><a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp Us</a></Button>
      </PageHeader>
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img src={corporate} alt="Corporate Events at RC 9" loading="lazy" className="aspect-[4/3] w-full rounded-sm object-cover" />
          <div>
            <h2 className="text-4xl text-foreground">What's included</h2>
            <ul className="mt-6 space-y-3">{points.map((p) => <li key={p} className="flex gap-3 text-lg text-foreground"><span className="text-primary">▸</span>{p}</li>)}</ul>
            <p className="mt-6 text-muted-foreground">Packages from ₹XXX. Contact us for a quote tailored to your group.</p>
          </div>
        </div>
      </Section>
      <FinalCta />
    </>
  );
}
