interface Props {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
  light = false,
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = light ? "text-sand-50" : "text-pine-950";
  const subtitleColor = light ? "text-sand-200" : "text-pine-700/80";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      <h2
        className={`font-display font-medium text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.1] text-balance ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
