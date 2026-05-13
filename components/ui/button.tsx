"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium tracking-tight transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-forest text-cream hover:bg-forest-deep shadow-soft hover:shadow-glow",
        clay: "bg-clay text-cream hover:bg-clay-dark shadow-soft hover:shadow-glow",
        ghost: "bg-transparent text-ink hover:bg-ink/5",
        outline:
          "border border-ink/15 bg-transparent text-ink hover:bg-ink/5",
        white:
          "bg-white text-ink hover:bg-cream shadow-soft",
      },
      size: {
        default: "h-12 px-6 text-sm rounded-full",
        lg: "h-14 px-8 text-base rounded-full",
        sm: "h-10 px-5 text-sm rounded-full",
        icon: "h-11 w-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
