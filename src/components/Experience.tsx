import { ArrowUpRight } from "lucide-react";
import { experiences } from "../data/experiences";
import RevealSection from "./RevealSection";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="bg-sand-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <RevealSection>
          <SectionHeading
            title="Bien plus qu'un parcours"
            subtitle="Quatre univers, une même exigence de qualité."
          />
        </RevealSection>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden bg-pine-800/10 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((item, i) => (
            <RevealSection key={item.id} delay={i * 100} className="group relative">
              <a href={`#${item.targetId}`} className="block h-full">
                <div className="relative aspect-[3/4] overflow-hidden bg-pine-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover opacity-80 transition-transform duration-700 ease-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pine-950 via-pine-950/40 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-2xl text-sand-50">
                        {item.title}
                      </h3>
                      <ArrowUpRight
                        size={20}
                        className="text-gold-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-sand-200/85">
                      {item.description}
                    </p>
                  </div>
                </div>
              </a>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
