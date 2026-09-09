import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../data/testimonials";
import RevealSection from "./RevealSection";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const go = (dir: 1 | -1) => {
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-sand-50 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <RevealSection>
          <SectionHeading
            align="center"
            title="Ils ont vécu l'expérience Royal Green"
          />
        </RevealSection>

        <RevealSection delay={120} className="relative mt-14">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-smooth"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.id} className="w-full flex-shrink-0 px-2 text-center">
                  <div className="flex justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < t.rating ? "fill-gold-500 text-gold-500" : "text-sand-300"}
                      />
                    ))}
                  </div>
                  <p className="mx-auto mt-6 max-w-xl font-display text-xl italic leading-relaxed text-pine-900 sm:text-2xl">
                    &laquo;&nbsp;{t.comment}&nbsp;&raquo;
                  </p>
                  <p className="mt-6 text-sm font-medium text-pine-950">
                    {t.firstName}
                    <span className="font-normal text-pine-700/70"> &mdash; {t.profession}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Témoignage précédent"
              className="p-2 text-pine-700 transition-colors hover:text-gold-600"
            >
              <ChevronLeft size={22} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Voir le témoignage de ${t.firstName}`}
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-gold-500" : "bg-pine-800/20"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Témoignage suivant"
              className="p-2 text-pine-700 transition-colors hover:text-gold-600"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
