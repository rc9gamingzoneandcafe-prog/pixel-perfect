import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { site, whatsappLink, telLink } from "@/data/site";

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
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:py-20">
        <div className="lg:col-span-2">
          <Logo tone="dark" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-muted">
            RC 9 is a premium RC racing venue and cafe. High-performance cars, purpose-built
            tracks and real competition — for racers of every level.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.social.instagram}
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-ink-border text-ink-foreground transition-colors hover:border-primary hover:bg-primary"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={site.social.facebook}
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-ink-border text-ink-foreground transition-colors hover:border-primary hover:bg-primary"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href={site.social.youtube}
              aria-label="YouTube"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-ink-border text-ink-foreground transition-colors hover:border-primary hover:bg-primary"
            >
              <Youtube className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm tracking-[0.2em] text-ink-foreground">Explore</h3>
          <ul className="mt-5 space-y-2.5">
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
          <ul className="mt-5 space-y-3 text-sm text-ink-muted">
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

      <div className="border-t border-ink-border">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-ink-muted sm:px-6">
          © 2026 RC 9. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
