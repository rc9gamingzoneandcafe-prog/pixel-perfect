import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/rc/PageShell";
import { FinalCta } from "@/components/rc/FinalCta";
import { Button } from "@/components/ui/button";
import { birthday } from "@/data/gallery";
import { whatsappLink } from "@/data/site";
const points = ["Private track time for the group","Kid-friendly marshals & briefing","Podium ceremony for the winner","Party seating in the cafe","Food & drinks packages"];

export const Route = createFileRoute("/birthday-parties")({
  head: () => ({
    meta: [
      { title: "Birthday Parties | RC 9" },
      { name: "description", content: "Turn birthdays into race days. RC racing birthday packages with party area, cafe food and group races at RC 9." },
      { property: "og:title", content: "Birthday Parties | RC 9" },
      { property: "og:description", content: "Turn birthdays into race days. RC racing birthday packages with party area, cafe food and group races at RC 9." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BirthdayPartiesPage,
});

function BirthdayPartiesPage() {
  return (
    <>
      <PageHeader eyebrow="Birthday Parties" title="Turn birthdays into race days" subtitle="Group races, a podium moment and cafe treats — we handle the fun, you enjoy it.">
        <Button asChild variant="race" size="race"><Link to="/book">Enquire & Book</Link></Button>
        <Button asChild variant="outlineLight" size="race"><a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp Us</a></Button>
      </PageHeader>
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img src={birthday} alt="Birthday Parties at RC 9" loading="lazy" className="aspect-[4/3] w-full rounded-sm object-cover" />
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
