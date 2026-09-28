import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, CalendarDays, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { experiences, plans } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Front-end booking flow with mock availability.
 * `submitBooking` is the single integration point: replace its body with a
 * real API / payment call later — nothing else needs to change.
 */
export type BookingDraft = {
  experience: string;
  plan: string;
  date: string;
  time: string;
  players: number;
  name: string;
  email: string;
  phone: string;
  notes: string;
};

async function submitBooking(draft: BookingDraft) {
  // TODO: connect to a booking backend / payment gateway.
  console.info("Booking request", draft);
  return { ok: true as const, reference: `RC9-${Date.now().toString().slice(-6)}` };
}

const TIMES = ["11:00", "12:30", "14:00", "15:30", "17:00", "18:30", "20:00", "21:15"];

const stepLabels = ["Experience", "Date", "Time", "Players", "Details", "Confirm"];

function nextDays(count: number) {
  const out: { iso: string; day: string; date: string; month: string }[] = [];
  const base = new Date();
  for (let i = 0; i < count; i++) {
    const d = new Date(base.getTime() + i * 86400000);
    out.push({
      iso: d.toISOString().slice(0, 10),
      day: d.toLocaleDateString("en-GB", { weekday: "short" }),
      date: String(d.getDate()),
      month: d.toLocaleDateString("en-GB", { month: "short" }),
    });
  }
  return out;
}

export function BookingFlow({
  initialPlan,
  initialExperience,
}: {
  initialPlan?: string | undefined;
  initialExperience?: string | undefined;
}) {
  const [step, setStep] = useState(0);
  const [reference, setReference] = useState<string | null>(null);
  const [draft, setDraft] = useState<BookingDraft>({
    experience: (experiences.find((e) => e.slug === initialExperience) ?? experiences[0]!).name,
    plan:
      plans.find((p) => p.name.toLowerCase() === (initialPlan ?? "").toLowerCase())?.name ??
      plans[1]!.name,
    date: "",
    time: "",
    players: 2,
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const days = nextDays(10);
  const set = <K extends keyof BookingDraft>(k: K, v: BookingDraft[K]) =>
    setDraft((d) => ({ ...d, [k]: v }));

  const canContinue =
    (step === 0 && !!draft.experience && !!draft.plan) ||
    (step === 1 && !!draft.date) ||
    (step === 2 && !!draft.time) ||
    (step === 3 && draft.players > 0) ||
    (step === 4 && !!draft.name && !!draft.phone) ||
    step === 5;

  const onSubmit = async () => {
    const res = await submitBooking(draft);
    if (res.ok) setReference(res.reference);
  };

  if (reference) {
    return (
      <div className="rounded-sm border border-border bg-card p-8 text-center shadow-card sm:p-12">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-7" />
        </span>
        <h2 className="mt-6 text-3xl text-card-foreground">Request Received</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Reference <span className="font-display font-bold text-foreground">{reference}</span>.
          Our team will confirm your slot on WhatsApp shortly. Payment is taken at the venue until
          online payments go live.
        </p>
        <dl className="mx-auto mt-8 grid max-w-md gap-2 text-left text-sm">
          {[
            ["Experience", draft.experience],
            ["Session", draft.plan],
            ["Date", draft.date],
            ["Time", draft.time],
            ["Racers", String(draft.players)],
            ["Name", draft.name],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between border-b border-border py-2">
              <dt className="text-muted-foreground">{k}</dt>
              <dd className="font-medium text-foreground">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    );
  }

  return (
    <div className="rounded-sm border border-border bg-card shadow-card">
      {/* Progress */}
      <div className="border-b border-border p-5 sm:p-7">
        <div className="flex items-center gap-1.5">
          {stepLabels.map((label, i) => (
            <div key={label} className="flex-1">
              <div
                className={cn(
                  "h-1 rounded-full transition-colors duration-300",
                  i <= step ? "racing-stripe" : "bg-border",
                )}
              />
              <span
                className={cn(
                  "mt-2 hidden text-[0.65rem] font-semibold uppercase tracking-[0.16em] sm:block",
                  i <= step ? "text-primary" : "text-muted-foreground",
                )}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-3 font-display text-sm uppercase tracking-[0.2em] text-muted-foreground sm:hidden">
          Step {step + 1} of 6 — {stepLabels[step]}
        </p>
      </div>

      <div className="p-5 sm:p-7">
        {step === 0 ? (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl text-card-foreground">Choose Experience</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {experiences.map((e) => (
                  <button
                    key={e.slug}
                    type="button"
                    onClick={() => set("experience", e.name)}
                    className={cn(
                      "flex items-center gap-4 rounded-sm border p-3 text-left transition-all",
                      draft.experience === e.name
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50",
                    )}
                  >
                    <img
                      src={e.image}
                      alt=""
                      loading="lazy"
                      className="h-14 w-20 shrink-0 rounded-sm object-cover"
                    />
                    <span>
                      <span className="block font-display text-lg font-semibold uppercase text-foreground">
                        {e.name}
                      </span>
                      <span className="block text-xs text-muted-foreground">
                        {e.prices.length
                          ? e.prices
                              .map((t) => `${t.duration} — ${t.options.map((o) => `${o.label}: ${o.price}`).join(", ")}`)
                              .join(" · ")
                          : `${e.duration} · ${e.from}`}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl text-card-foreground">Choose Session</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-4">
                {plans.map((p) => (
                  <button
                    key={p.name}
                    type="button"
                    onClick={() => set("plan", p.name)}
                    className={cn(
                      "rounded-sm border p-4 text-left transition-all",
                      draft.plan === p.name
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50",
                    )}
                  >
                    <span className="block font-display text-lg font-semibold uppercase text-foreground">
                      {p.name}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      {p.duration} · {p.price}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {step === 1 ? (
          <div>
            <h2 className="flex items-center gap-2 text-2xl text-card-foreground">
              <CalendarDays className="size-5 text-primary" /> Choose Date
            </h2>
            <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-5">
              {days.map((d) => (
                <button
                  key={d.iso}
                  type="button"
                  onClick={() => set("date", d.iso)}
                  className={cn(
                    "rounded-sm border py-4 text-center transition-all hover:-translate-y-0.5",
                    draft.date === d.iso
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border hover:border-primary/50",
                  )}
                >
                  <span className="block text-xs uppercase tracking-widest opacity-80">{d.day}</span>
                  <span className="block font-display text-2xl font-bold leading-tight">
                    {d.date}
                  </span>
                  <span className="block text-xs uppercase opacity-80">{d.month}</span>
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {step === 2 ? (
          <div>
            <h2 className="flex items-center gap-2 text-2xl text-card-foreground">
              <Clock className="size-5 text-primary" /> Choose Time
            </h2>
            <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4">
              {TIMES.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => set("time", t)}
                  className={cn(
                    "rounded-sm border py-3 font-display text-lg font-semibold transition-all hover:-translate-y-0.5",
                    draft.time === t
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border hover:border-primary/50",
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Slots shown are indicative. We confirm exact availability when we contact you.
            </p>
          </div>
        ) : null}

        {step === 3 ? (
          <div>
            <h2 className="flex items-center gap-2 text-2xl text-card-foreground">
              <Users className="size-5 text-primary" /> Number Of Racers
            </h2>
            <div className="mt-6 flex items-center gap-5">
              <Button
                type="button"
                variant="outlineInk"
                size="race"
                onClick={() => set("players", Math.max(1, draft.players - 1))}
                aria-label="Fewer racers"
              >
                −
              </Button>
              <span className="font-display text-5xl font-bold tabular-nums text-foreground">
                {draft.players}
              </span>
              <Button
                type="button"
                variant="outlineInk"
                size="race"
                onClick={() => set("players", Math.min(20, draft.players + 1))}
                aria-label="More racers"
              >
                +
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              More than 8 racers? We'll arrange a private track window for your group.
            </p>
          </div>
        ) : null}

        {step === 4 ? (
          <div>
            <h2 className="text-2xl text-card-foreground">Your Details</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="bk-name">Full name</Label>
                <Input
                  id="bk-name"
                  value={draft.name}
                  onChange={(e) => set("name", e.target.value)}
                  className="mt-2"
                  required
                />
              </div>
              <div>
                <Label htmlFor="bk-phone">Phone / WhatsApp</Label>
                <Input
                  id="bk-phone"
                  type="tel"
                  value={draft.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  className="mt-2"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="bk-email">Email (optional)</Label>
                <Input
                  id="bk-email"
                  type="email"
                  value={draft.email}
                  onChange={(e) => set("email", e.target.value)}
                  className="mt-2"
                />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="bk-notes">Anything we should know?</Label>
                <Textarea
                  id="bk-notes"
                  value={draft.notes}
                  onChange={(e) => set("notes", e.target.value)}
                  className="mt-2"
                  rows={3}
                />
              </div>
            </div>
          </div>
        ) : null}

        {step === 5 ? (
          <div>
            <h2 className="text-2xl text-card-foreground">Confirm Your Race</h2>
            <dl className="mt-5 grid gap-2 text-sm">
              {[
                ["Experience", draft.experience],
                ["Session", draft.plan],
                ["Date", draft.date],
                ["Time", draft.time],
                ["Racers", String(draft.players)],
                ["Name", draft.name],
                ["Phone", draft.phone],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-border py-2.5">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="font-medium text-foreground">{v || "—"}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-xs text-muted-foreground">
              Online payment isn't live yet. Send the request and our team confirms your slot and
              final price on WhatsApp.
            </p>
          </div>
        ) : null}
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-border p-5 sm:p-7">
        <Button
          type="button"
          variant="outlineInk"
          size="race"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
        >
          <ArrowLeft /> Back
        </Button>
        {step < 5 ? (
          <Button
            type="button"
            variant="race"
            size="race"
            disabled={!canContinue}
            onClick={() => setStep((s) => Math.min(5, s + 1))}
          >
            Continue <ArrowRight className="arrow" />
          </Button>
        ) : (
          <Button type="button" variant="flag" size="race" onClick={onSubmit}>
            Send Request <ArrowRight className="arrow" />
          </Button>
        )}
      </div>
    </div>
  );
}
