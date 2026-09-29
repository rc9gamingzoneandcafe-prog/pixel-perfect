import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/rc/PageShell";
import { FinalCta } from "@/components/rc/FinalCta";
import { Button } from "@/components/ui/button";
import { experiences } from "@/data/site";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Track Experiences | RC 9" },
      { name: "description", content: "RC Construction, RC Crawler, RC High Speed, RC Drift and a Racing Simulator Cockpit at RC 9. Five ways to race." },
      { property: "og:title", content: "Track Experiences | RC 9" },
      { property: "og:description", content: "RC Construction, RC Crawler, RC High Speed, RC Drift and a Racing Simulator Cockpit at RC 9. Five ways to race." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExperiencesPage,
});

function ExperiencesPage() {
  return (
    <>
      <PageHeader eyebrow="Experiences" title="Five experiences. One obsession." subtitle="Every layout is purpose-built for a different style of driving." />
      <Section>
        <div className="space-y-20">
          {experiences.map((e, i) => (
            <article key={e.slug} id={e.slug} className="grid items-center gap-10 lg:grid-cols-2">
              <img src={e.image} alt={`${e.name} at RC 9`} loading="lazy" className={`aspect-[4/3] w-full rounded-sm object-cover ${i % 2 ? "lg:order-2" : ""}`} />
              <div>
                <div className="h-1 w-12 racing-stripe" />
                <h2 className="mt-4 text-5xl text-foreground">{e.name}</h2>
                <p className="mt-4 text-lg text-muted-foreground">{e.description}</p>
                <ul className="mt-6 space-y-2">{e.highlights.map((h) => <li key={h} className="flex gap-2 text-foreground"><span className="text-primary">▸</span>{h}</li>)}</ul>
                <Button asChild variant="race" size="race" className="mt-6"><Link to="/book" search={{ experience: e.slug }}>Book {e.name}</Link></Button>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <FinalCta />
    </>
  );
}
