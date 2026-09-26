import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/rc/PageShell";
import { Gallery } from "@/components/rc/Gallery";
import { FinalCta } from "@/components/rc/FinalCta";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | RC 9" },
      { name: "description", content: "Photos from RC 9 — tracks, cars, races, birthdays and corporate events." },
      { property: "og:title", content: "Gallery | RC 9" },
      { property: "og:description", content: "Photos from RC 9 — tracks, cars, races, birthdays and corporate events." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHeader eyebrow="Gallery" title="Inside RC 9" subtitle="Tracks, cars, podiums and the people who race them." />
      <Section><Gallery /></Section>
      <FinalCta />
    </>
  );
}
