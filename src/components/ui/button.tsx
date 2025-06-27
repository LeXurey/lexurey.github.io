import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-brand-navy to-brand-teal dark:from-brand-teal dark:to-brand-navy text-white hover:opacity-90 shadow-lg hover:shadow-xl",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-gradient-to-r hover:from-brand-navy/10 hover:to-brand-teal/10 dark:hover:from-brand-teal/10 dark:hover:to-brand-navy/10 hover:border-brand-teal hover:text-brand-teal",
        secondary:
          "bg-gradient-to-r from-brand-teal to-brand-navy dark:from-brand-navy dark:to-brand-teal text-white hover:opacity-90 shadow-lg hover:shadow-xl",
        ghost:
          "hover:bg-gradient-to-r hover:from-brand-navy/10 hover:to-brand-teal/10 dark:hover:from-brand-teal/10 dark:hover:to-brand-navy/10",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
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
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
