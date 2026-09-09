import type { ReactNode } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Wraps content so it fades and rises into view the first time it enters the viewport. */
export default function RevealSection({
  children,
  className = "",
  delay = 0,
}: Props) {
  const ref = useScrollReveal<HTMLDivElement>();
  const style = delay ? { animationDelay: `${delay}ms` } : undefined;

  return (
    <div ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </div>
  );
}
