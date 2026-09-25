import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform hover:[&_svg.arrow]:translate-x-1 active:translate-y-px",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        /* RC 9 motorsport variants */
        race: "rounded-sm bg-primary font-display text-base font-bold uppercase tracking-wider text-primary-foreground shadow-card hover:-translate-y-0.5 hover:bg-racing-deep hover:shadow-lift",
        flag: "rounded-sm bg-accent font-display text-base font-bold uppercase tracking-wider text-accent-foreground shadow-card hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lift",
        ink: "rounded-sm bg-ink font-display text-base font-bold uppercase tracking-wider text-ink-foreground shadow-card hover:-translate-y-0.5 hover:bg-racing-deep hover:shadow-lift",
        outlineLight:
          "rounded-sm border border-ink-border bg-transparent font-display text-base font-bold uppercase tracking-wider text-ink-foreground hover:-translate-y-0.5 hover:border-ink-foreground/40 hover:bg-ink-foreground/10",
        outlineInk:
          "rounded-sm border border-foreground/20 bg-transparent font-display text-base font-bold uppercase tracking-wider text-foreground hover:-translate-y-0.5 hover:border-primary hover:text-primary",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        race: "h-12 px-7",
        raceSm: "h-10 px-5 text-sm",
        raceLg: "h-14 px-9 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
