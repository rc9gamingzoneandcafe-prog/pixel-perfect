import { site } from "@/data/site";
import { MapPin } from "lucide-react";

const browserKey = import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY"] as
  | string
  | undefined;

/** Live Google Maps embed (Maps Embed API) pinned to the RC 9 venue. */
export function LocationMap() {
  const q = `${site.mapCoords.lat},${site.mapCoords.lng}`;
  const embedUrl = browserKey
    ? `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(
        browserKey,
      )}&q=${encodeURIComponent(q)}&zoom=16`
    : `https://maps.google.com/maps?q=${encodeURIComponent(q)}&z=16&output=embed`;

  return (
    <div className="overflow-hidden rounded-xl border border-ink-border bg-ink/40">
      <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="inline-flex items-center gap-2 text-sm text-ink-muted">
          <MapPin className="size-4 shrink-0 text-primary" />
          <span>
            {site.address.line1}, {site.address.line2}, {site.address.city}
          </span>
        </p>
        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-4 py-2 text-xs font-display font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Get Directions
        </a>
      </div>
      <iframe
        title="RC 9 location on Google Maps"
        src={embedUrl}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="h-56 w-full border-0 sm:h-72 lg:h-80"
      />
    </div>
  );
}
