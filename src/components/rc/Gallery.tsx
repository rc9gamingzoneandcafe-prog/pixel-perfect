import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/data/gallery";
import { cn } from "@/lib/utils";

export function Gallery({ limit }: { limit?: number }) {
  const images = limit ? galleryImages.slice(0, limit) : galleryImages;
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => ((i ?? 0) + 1) % images.length);
      if (e.key === "ArrowLeft") setActive((i) => ((i ?? 0) - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, images.length]);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {images.map((img, i) => (
          <button
            key={img.alt}
            type="button"
            onClick={() => setActive(i)}
            className="group relative block w-full overflow-hidden rounded-sm border border-border shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className={cn(
                "w-full object-cover transition-transform duration-700 group-hover:scale-105",
                img.tall ? "aspect-4/5" : "aspect-3/2",
              )}
            />
            <span className="absolute inset-x-0 bottom-0 h-1 racing-stripe opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        ))}
      </div>

      {active !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close gallery"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-sm border border-ink-border text-ink-foreground hover:bg-ink-foreground/10"
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => ((i ?? 0) - 1 + images.length) % images.length);
            }}
            className="absolute left-3 inline-flex h-11 w-11 items-center justify-center rounded-sm border border-ink-border text-ink-foreground hover:bg-ink-foreground/10"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => ((i ?? 0) + 1) % images.length);
            }}
            className="absolute right-3 inline-flex h-11 w-11 items-center justify-center rounded-sm border border-ink-border text-ink-foreground hover:bg-ink-foreground/10"
          >
            <ChevronRight className="size-5" />
          </button>
          <img
            src={images[active].src}
            alt={images[active].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-sm object-contain shadow-lift"
          />
        </div>
      ) : null}
    </>
  );
}
