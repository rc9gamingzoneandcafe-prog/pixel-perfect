import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/rc9-logo.png.asset.json";

export function Logo({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <Link
      to="/"
      aria-label="RC 9 — home"
      className={cn("inline-flex shrink-0 items-center rounded-sm bg-background p-1", className)}
    >
      <img
        src={logoAsset.url}
        alt="RC 9 Gaming Café"
        width={1254}
        height={500}
        className={cn("block h-auto w-30 sm:w-34", tone === "dark" && "w-44 sm:w-48")}
      />
    </Link>
  );
}
