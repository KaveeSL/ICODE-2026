import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const base =
  "inline-flex items-center justify-center rounded-full font-semibold tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-uom-gold disabled:opacity-60 disabled:cursor-not-allowed";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default:
    "bg-uom-maroon text-white hover:bg-uom-gold hover:text-neutral-900 transition-colors",
  outline:
    "border border-uom-maroon/40 text-uom-maroon bg-white hover:bg-uom-gold hover:border-uom-gold hover:text-neutral-900 transition-colors",
  ghost:
    "text-uom-maroon hover:bg-uom-gold/20 hover:text-uom-maroon transition-colors"
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-sm md:text-base"
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

