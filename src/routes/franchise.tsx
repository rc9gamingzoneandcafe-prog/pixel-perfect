import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader, Section } from "@/components/rc/PageShell";
import { Button } from "@/components/ui/button";
import { site, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/franchise")({
  head: () => ({
    meta: [
      { title: "Franchise | Start Your Own RC 9" },
      { name: "description", content: "Interested in opening your own RC 9 racing venue and cafe? Enquire about RC 9 franchising." },
      { property: "og:title", content: "Franchise | Start Your Own RC 9" },
      { property: "og:description", content: "Interested in opening your own RC 9 racing venue and cafe? Enquire about RC 9 franchising." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FranchisePage,
});

function FranchisePage() {
  const msg = encodeURIComponent("Hi RC 9, I'd like to enquire about franchising.");
  return (
    <>
      <PageHeader
        eyebrow="Franchise"
        title="Start your own RC 9"
        subtitle="Interested in bringing the RC 9 racing experience to your city? Get in touch and our team will share the details."
      >
        <Button asChild variant="race" size="raceLg">
          <a href={`${whatsappLink}?text=${msg}`} target="_blank" rel="noopener noreferrer">
            Enquire About Franchising <ArrowRight className="arrow" />
          </a>
        </Button>
      </PageHeader>
      <Section>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Prefer email? Write to{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-primary hover:underline">
            {site.email}
          </a>{" "}
          with "Franchise" in the subject line.
        </p>
      </Section>
    </>
  );
}
