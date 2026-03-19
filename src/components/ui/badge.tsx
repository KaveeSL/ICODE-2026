import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "solid" | "outline" | "soft";
}

const variants: Record<NonNullable<BadgeProps["variant"]>, string> = {
  solid:
    "bg-uom-maroon text-white border border-uom-maroon shadow-sm shadow-uom-maroon/20",
  outline: "border border-uom-maroon text-uom-maroon bg-white/80",
  soft:
    "bg-uom-goldSoft text-uom-maroon border border-uom-gold/40 shadow-sm shadow-uom-gold/40"
};

export const Badge = ({
  className = "",
  variant = "soft",
  ...props
}: BadgeProps) => (
  <span
    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] ${variants[variant]} ${className}`}
    {...props}
  />
);

