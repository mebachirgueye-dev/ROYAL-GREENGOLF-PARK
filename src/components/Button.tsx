import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[0.95rem] font-medium tracking-wide transition-all duration-300 ease-smooth focus-visible:outline-offset-4 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-pine-800 text-sand-50 hover:bg-pine-700 active:bg-pine-900",
  secondary:
    "bg-sand-50 text-pine-900 hover:bg-sand-100 border border-sand-300",
  outline:
    "border border-sand-50/70 text-sand-50 hover:bg-sand-50/10 backdrop-blur-[2px]",
  ghost: "text-pine-800 hover:text-gold-600 px-2 py-1",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  href,
  onClick,
  ...rest
}: Props) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button {...rest} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
