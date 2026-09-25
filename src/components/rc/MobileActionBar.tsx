import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/data/site";

export function MobileActionBar() {
  return (
    <>
      {/* Floating WhatsApp — all breakpoints */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with RC 9 on WhatsApp"
        className="fixed bottom-24 right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink text-ink-foreground shadow-lift transition-transform hover:-translate-y-0.5 hover:bg-racing-deep sm:bottom-6"
      >
        <MessageCircle className="size-5" />
      </a>

      {/* Sticky mobile booking bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-xl sm:hidden">
        <Button asChild variant="race" size="race" className="w-full">
          <Link to="/book">
            Book Now <ArrowRight className="arrow" />
          </Link>
        </Button>
      </div>
    </>
  );
}
