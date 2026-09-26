import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/rc/PageShell";
import { FinalCta } from "@/components/rc/FinalCta";
import { venue, cafe } from "@/data/gallery";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About RC 9 | RC Racing Venue & Cafe" },
      { name: "description", content: "RC 9 is a premium RC racing venue and cafe built by racers, for everyone who loves speed." },
      { property: "og:title", content: "About RC 9 | RC Racing Venue & Cafe" },
      { property: "og:description", content: "RC 9 is a premium RC racing venue and cafe built by racers, for everyone who loves speed." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="Built by racers" subtitle="RC 9 brings real motorsport energy to radio-controlled racing." />
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img src={venue} alt="RC 9 main track" loading="lazy" className="aspect-video w-full rounded-sm object-cover" />
          <div className="space-y-4 text-lg text-muted-foreground">
            <h2 className="text-4xl text-foreground">Our story</h2>
            <p>We started RC 9 because RC racing deserved better than a car park and a toy shop. So we built proper tracks, sourced high-performance cars and trained a team to get anyone racing in minutes.</p>
            <p>Whether it's your first lap or your hundredth, the goal is the same: speed, control and a result you want to beat next time.</p>
          </div>
        </div>
      </Section>
      <Section tone="muted">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-lg text-muted-foreground lg:order-1">
            <h2 className="text-4xl text-foreground">The cafe</h2>
            <p>Between heats, refuel in the RC 9 cafe with a view of the track — ideal for parents, spectators and post-race debriefs.</p>
          </div>
          <img src={cafe} alt="RC 9 cafe" loading="lazy" className="aspect-video w-full rounded-sm object-cover" />
        </div>
      </Section>
      <FinalCta />
    </>
  );
}
