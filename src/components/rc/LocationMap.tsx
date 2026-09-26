import { site } from "@/data/site";
import { MapPin, ArrowRight } from "lucide-react";

const browserKey = import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY"] as
  | string
  | undefined;

/** Compact premium location card: live Google Maps embed pinned to the RC 9 venue. */
export function LocationMap() {
  const q = `${site.mapCoords.lat},${site.mapCoords.lng}`;
  const embedUrl = browserKey
    ? `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(
        browserKey,
      )}&q=${encodeURIComponent(q)}&zoom=16`
    : `https://maps.google.com/maps?q=${encodeURIComponent(q)}&z=16&output=embed`;

  return (
    <div className="overflow-hidden rounded-2xl border border-ink-border bg-ink/40 shadow-lg shadow-black/40">
      <iframe
        title="RC 9 location on Google Maps"
        src={embedUrl}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="h-52 w-full border-0"
      />
      <div className="flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="inline-flex min-w-0 items-center gap-2 text-xs text-ink-muted">
          <MapPin className="size-3.5 shrink-0 text-primary" />
          <span className="truncate">
            {site.address.line1}, {site.address.city}
          </span>
        </p>
        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-sm bg-primary px-3.5 py-1.5 text-[11px] font-display font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Get Directions
          <ArrowRight className="size-3.5" />
        </a>
      </div>
    </div>
  );
}
