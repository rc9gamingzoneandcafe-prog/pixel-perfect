import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/rc/PageShell";
import { FaqAccordion } from "@/components/rc/FaqAccordion";
import { FinalCta } from "@/components/rc/FinalCta";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | RC 9" },
      { name: "description", content: "Answers about RC 9 sessions, ages, bookings, groups, parking and what to bring." },
      { property: "og:title", content: "FAQ | RC 9" },
      { property: "og:description", content: "Answers about RC 9 sessions, ages, bookings, groups, parking and what to bring." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHeader eyebrow="FAQ" title="Questions, answered" subtitle="Everything you need to know before you hit the track." />
      <Section><div className="max-w-3xl"><FaqAccordion /></div></Section>
      <FinalCta />
    </>
  );
}
