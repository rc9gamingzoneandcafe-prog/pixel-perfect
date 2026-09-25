import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <Link
      to="/"
      aria-label="RC 9 — home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-sm racing-stripe shadow-card">
        <span className="font-display text-lg font-bold leading-none text-primary-foreground">9</span>
      </span>
      <span
        className={cn(
          "font-display text-2xl font-bold leading-none tracking-[0.08em]",
          tone === "dark" ? "text-ink-foreground" : "text-foreground",
        )}
      >
        RC<span className="text-primary"> 9</span>
      </span>
    </Link>
  );
}
