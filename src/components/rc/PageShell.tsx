import type { ReactNode } from "react";
import { Eyebrow } from "./SectionHeading";

/** Standard dark page header used by every inner page. */
export function PageHeader({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden ink-gradient pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="absolute inset-0 grid-lines" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {eyebrow ? <Eyebrow tone="dark">{eyebrow}</Eyebrow> : null}
        <h1 className="mt-4 max-w-4xl text-balance-tight text-5xl leading-[0.92] text-ink-foreground sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {subtitle}
          </p>
        ) : null}
        {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
      </div>
      <div className="absolute bottom-0 left-0 h-1 w-1/3 racing-stripe" aria-hidden="true" />
    </section>
  );
}

export function Section({
  children,
  tone = "light",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: "light" | "ink" | "muted";
  className?: string;
  id?: string;
}) {
  const bg =
    tone === "ink" ? "surface-ink" : tone === "muted" ? "bg-secondary" : "bg-background";
  return (
    <section id={id} className={`${bg} py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">{children}</div>
    </section>
  );
}
