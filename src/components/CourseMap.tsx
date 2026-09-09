import { useState } from "react";
import { Flag, Ruler, Gauge } from "lucide-react";
import { holes, courseStats } from "../data/holes";
import RevealSection from "./RevealSection";
import SectionHeading from "./SectionHeading";
import { useCountUp } from "../hooks/useCountUp";

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const { ref, value: current } = useCountUp(value);
  return (
    <div ref={ref} className="border-t border-pine-800/15 pt-4">
      <p className="font-display text-3xl text-pine-950 sm:text-4xl">
        {current.toLocaleString("fr-FR")}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-pine-700/75">{label}</p>
    </div>
  );
}

const difficultyStyles: Record<string, string> = {
  Douce: "text-moss-600 bg-moss-400/15",
  Modérée: "text-gold-600 bg-gold-500/15",
  Exigeante: "text-pine-900 bg-pine-900/10",
};

export default function CourseMap() {
  const [selected, setSelected] = useState(holes[0]);

  return (
    <section id="parcours" className="bg-sand-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <RevealSection>
          <SectionHeading
            title="18 trous, un seul mot d'ordre : l'excellence"
            subtitle="Un tracé exigeant mais accessible, pensé pour révéler tous les niveaux de jeu."
          />
        </RevealSection>

        <RevealSection delay={100} className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          <Stat value={courseStats.holes} label="Trous" />
          <Stat value={courseStats.par} label="Par" />
          <Stat value={courseStats.length} suffix=" m" label="Longueur totale" />
          <div className="border-t border-pine-800/15 pt-4">
            <p className="font-display text-3xl text-pine-950 sm:text-4xl">2</p>
            <p className="mt-1 text-sm text-pine-700/75">Practice &amp; putting green</p>
          </div>
        </RevealSection>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Interactive map */}
          <RevealSection delay={150} className="lg:col-span-7">
            <div className="relative border border-pine-800/10 bg-sand-50 p-4 sm:p-8">
              <div className="relative mx-auto aspect-[512/299] w-full max-w-2xl">
                <img
                  src="/images/course-map.png"
                  alt="Illustration stylisée du tracé des 18 trous de Royal Green Golf Park"
                  className="h-full w-full object-contain"
                />
                {holes.map((hole) => {
                  const isActive = selected.number === hole.number;
                  return (
                    <button
                      key={hole.number}
                      type="button"
                      onClick={() => setSelected(hole)}
                      aria-pressed={isActive}
                      aria-label={`Trou ${hole.number}, par ${hole.par}`}
                      style={{ top: `${hole.position.top}%`, left: `${hole.position.left}%` }}
                      className={`absolute flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-xs font-semibold transition-all duration-300 ease-smooth sm:h-8 sm:w-8 ${
                        isActive
                          ? "scale-110 border-gold-500 bg-gold-500 text-pine-950 shadow-[0_4px_14px_-2px_rgba(169,130,46,0.6)]"
                          : "border-pine-800/30 bg-sand-50 text-pine-800 hover:border-gold-500 hover:text-gold-600"
                      }`}
                    >
                      {hole.number}
                    </button>
                  );
                })}
              </div>
              <p className="mt-4 text-center text-xs text-pine-700/60">
                Touchez un numéro pour découvrir le détail de chaque trou.
              </p>
            </div>
          </RevealSection>

          {/* Hole detail panel */}
          <RevealSection delay={220} className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between border border-pine-800/10 bg-pine-950 p-8 text-sand-50 sm:p-10">
              <div>
                <div className="flex items-baseline justify-between">
                  <p className="font-display text-5xl text-sand-50">
                    N&deg;{selected.number}
                  </p>
                  <span
                    className={`px-3 py-1 text-xs font-medium ${difficultyStyles[selected.difficulty]}`}
                  >
                    {selected.difficulty}
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-y border-sand-50/15 py-5">
                  <div className="flex items-center gap-2 text-sand-100">
                    <Flag size={18} className="text-gold-400" />
                    <span className="text-sm">Par {selected.par}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sand-100">
                    <Ruler size={18} className="text-gold-400" />
                    <span className="text-sm">{selected.distance} m</span>
                  </div>
                  <div className="flex items-center gap-2 text-sand-100">
                    <Gauge size={18} className="text-gold-400" />
                    <span className="text-sm">{selected.difficulty}</span>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-sand-200/85">
                  {selected.description}
                </p>
              </div>

              <div className="mt-8 flex gap-2">
                {holes.map((hole) => (
                  <button
                    key={hole.number}
                    type="button"
                    onClick={() => setSelected(hole)}
                    aria-label={`Voir le trou ${hole.number}`}
                    className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                      hole.number === selected.number ? "bg-gold-500" : "bg-sand-50/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
