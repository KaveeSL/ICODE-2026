import * as React from "react";

export const Card = ({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`glass-panel rounded-3xl p-6 md:p-8 ${className}`}
    {...props}
  />
);

export const CardHeader = ({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`mb-4 flex flex-col gap-2 ${className}`} {...props} />
);

export const CardTitle = ({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3
    className={`text-lg md:text-xl font-semibold tracking-tight ${className}`}
    {...props}
  />
);

export const CardDescription = ({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={`text-sm text-neutral-600 ${className}`} {...props} />
);

export const CardContent = ({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`text-sm md:text-base ${className}`} {...props} />
);

