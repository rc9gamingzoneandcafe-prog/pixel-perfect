import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { PageHeader, Section } from "@/components/rc/PageShell";
import { BookingFlow } from "@/components/rc/BookingFlow";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Your Race | RC 9" },
      { name: "description", content: "Book an RC racing session at RC 9 in a few quick steps — choose your track, session, date and time." },
      { property: "og:title", content: "Book Your Race | RC 9" },
      { property: "og:description", content: "Book an RC racing session at RC 9 in a few quick steps — choose your track, session, date and time." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  validateSearch: z.object({ plan: z.string().optional(), experience: z.string().optional() }),
  component: BookPage,
});

function BookPage() {
  const { plan, experience } = Route.useSearch();
  return (
    <>
      <PageHeader eyebrow="Booking" title="Book your race" subtitle="Pick your track, session and slot. We'll confirm on WhatsApp." />
      <Section><BookingFlow initialPlan={plan} initialExperience={experience} /></Section>
    </>
  );
}
