import { Link } from "@tanstack/react-router";
import { Instagram, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { LocationMap } from "./LocationMap";
import { site, whatsappLink, telLink, designer } from "@/data/site";

const pages = [
  { to: "/", label: "Home" },
  { to: "/experiences", label: "Experiences" },
  { to: "/pricing", label: "Pricing" },
  { to: "/birthday-parties", label: "Birthdays" },
  { to: "/corporate-events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="surface-ink">
      <div className="h-0.5 w-full racing-stripe" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-8 pt-10 sm:px-6 lg:grid-cols-4 lg:pt-12">
        <div className="lg:col-span-2">
          <Logo tone="dark" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
            RC 9 is a premium RC racing venue and cafe. High-performance cars, purpose-built
            tracks and real competition — for racers of every level.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href={site.social.instagram}
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-ink-border text-ink-foreground transition-colors hover:border-primary hover:bg-primary"
            >
              <Instagram className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm tracking-[0.2em] text-ink-foreground">Explore</h3>
          <ul className="mt-4 space-y-2">
            {pages.map((p) => (
              <li key={p.to}>
                <Link
                  to={p.to}
                  className="text-sm text-ink-muted transition-colors hover:text-ink-foreground"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm tracking-[0.2em] text-ink-foreground">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-muted">
            <li>
              <a href={telLink} className="inline-flex items-center gap-2 hover:text-ink-foreground">
                <Phone className="size-4 text-primary" /> {site.phone}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-ink-foreground"
              >
                <MessageCircle className="size-4 text-primary" /> WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 hover:text-ink-foreground"
              >
                <Mail className="size-4 text-primary" /> {site.email}
              </a>
            </li>
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>
                {site.address.line1}, {site.address.line2}, {site.address.city}{" "}
                {site.address.postcode}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:flex lg:justify-end lg:pb-8">
        <div className="w-full max-w-[400px]">
          <h3 className="text-sm tracking-[0.2em] text-ink-foreground">Find Us</h3>
          <div className="mt-3">
            <LocationMap />
          </div>
        </div>
      </div>

      <div className="border-t border-ink-border">
        <div className="mx-auto grid max-w-7xl gap-2 px-4 py-4 text-xs text-ink-muted sm:grid-cols-3 sm:items-center sm:px-6">
          <span>© 2026 RC 9. All rights reserved.</span>
          <span className="text-center">
            Designed by{" "}
            <a
              href={designer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-foreground/80 underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              {designer.name}
            </a>
          </span>
          <span className="hidden sm:block" aria-hidden="true" />
        </div>
      </div>
    </footer>
  );
}
