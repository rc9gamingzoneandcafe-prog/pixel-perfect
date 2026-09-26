import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/rc/PageShell";
import { Button } from "@/components/ui/button";
import { site, whatsappLink, telLink } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location | RC 9" },
      { name: "description", content: "Find RC 9 — address, opening hours, phone, WhatsApp and directions." },
      { property: "og:title", content: "Contact & Location | RC 9" },
      { property: "og:description", content: "Find RC 9 — address, opening hours, phone, WhatsApp and directions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Find the track" subtitle="Call, message or just drop by." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <h2 className="text-3xl text-foreground">Get in touch</h2>
            <p className="mt-4 text-muted-foreground"><a className="hover:text-primary" href={telLink}>{site.phone}</a><br /><a className="hover:text-primary" href={`mailto:${site.email}`}>{site.email}</a></p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="race" size="raceSm"><a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp</a></Button>
              <Button asChild variant="outlineInk" size="raceSm"><a href={telLink}>Call</a></Button>
            </div>
          </div>
          <div>
            <h2 className="text-3xl text-foreground">Visit</h2>
            <address className="mt-4 not-italic text-muted-foreground">{site.address.line1}<br />{site.address.line2}<br />{site.address.city} {site.address.postcode}</address>
            <p className="mt-3 text-sm text-muted-foreground">{site.parking}</p>
            <Button asChild variant="outlineInk" size="raceSm" className="mt-6"><a href={site.mapsUrl} target="_blank" rel="noreferrer">Get Directions</a></Button>
          </div>
          <div>
            <h2 className="text-3xl text-foreground">Hours</h2>
            <dl className="mt-4 space-y-2">{site.hours.map((h) => <div key={h.days} className="flex justify-between gap-4 border-b border-border pb-2"><dt className="text-muted-foreground">{h.days}</dt><dd className="font-display text-foreground">{h.time}</dd></div>)}</dl>
          </div>
        </div>
      </Section>
    </>
  );
}
