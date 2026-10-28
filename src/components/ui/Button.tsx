import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-white text-black hover:bg-zinc-200 focus-visible:ring-white/40",
  secondary:
    "border border-white/15 bg-transparent text-white hover:border-white/30 hover:bg-white/[0.04]",
  ghost: "text-zinc-300 hover:text-white hover:bg-white/[0.04]",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-nova-bg disabled:pointer-events-none disabled:opacity-50";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = BaseProps &
  Omit<ComponentProps<"button">, keyof BaseProps> & { href?: undefined };

type ButtonAsLink = BaseProps &
  Omit<ComponentProps<typeof Link>, keyof BaseProps> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  if (props.href !== undefined) {
    const { variant = "primary", size = "md", className, children, href, ...rest } =
      props as ButtonAsLink;
    return (
      <Link
        href={href}
        className={cn(base, variants[variant], sizes[size], className)}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  const { variant = "primary", size = "md", className, children, ...rest } =
    props as ButtonAsButton;
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </button>
  );
}
