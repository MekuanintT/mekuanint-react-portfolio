import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative mx-[10px] inline-flex items-center justify-center overflow-hidden rounded-full px-[34px] py-[12px] text-[14px] font-normal shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-colors duration-300 cursor-pointer",
  {
    variants: {
      variant: {
        solid: "bg-gold border border-gold text-white",
        light: "bg-white text-gold",
        outline: "bg-transparent border border-[#eee] text-white",
      },
    },
    defaultVariants: {
      variant: "solid",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <button className={cn(buttonVariants({ variant }), className)} ref={ref} {...props}>
        <span
          className={cn(
            "absolute inset-0 left-0 h-full w-0 opacity-40 transition-[width] duration-300 group-hover:w-full",
            variant === "solid" || variant === "outline" ? "bg-gold" : "bg-white"
          )}
        />
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
          {children}
        </span>
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
