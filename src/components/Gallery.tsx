import { useState } from "react";
import { galleryImages, galleryCategories } from "../data/gallery";
import RevealSection from "./RevealSection";
import SectionHeading from "./SectionHeading";
import Lightbox from "./Lightbox";
import type { GalleryImage } from "../types";

const spanClasses: Record<GalleryImage["size"], string> = {
  lg: "sm:col-span-2 sm:row-span-2",
  wide: "sm:col-span-2 sm:row-span-1",
  tall: "sm:col-span-1 sm:row-span-2",
  md: "sm:col-span-1 sm:row-span-1",
  sm: "sm:col-span-1 sm:row-span-1",
};

export default function Gallery() {
  const [category, setCategory] = useState<(typeof galleryCategories)[number]>("Tout");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    category === "Tout"
      ? galleryImages
      : galleryImages.filter((img) => img.category === category);

  return (
    <section id="galerie" className="bg-pine-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <RevealSection>
          <SectionHeading
            light
            title="La galerie Royal Green"
            subtitle="Un aperçu du domaine, du parcours à la table, en passant par nos événements."
          />
        </RevealSection>

        <RevealSection delay={100} className="mt-10 flex flex-wrap gap-2.5">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={category === cat}
              onClick={() => {
                setCategory(cat);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                category === cat
                  ? "bg-gold-500 text-pine-950"
                  : "bg-sand-50/5 text-sand-200 hover:bg-sand-50/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </RevealSection>

        <RevealSection delay={180} className="mt-10 grid grid-cols-2 gap-3 sm:auto-rows-[180px] sm:grid-cols-4 sm:gap-4">
          {filtered.map((image, i) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className={`group relative overflow-hidden bg-pine-900 ${spanClasses[image.size]}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-pine-950/0 transition-colors duration-300 group-hover:bg-pine-950/20" />
              <span className="absolute bottom-2 left-2 bg-pine-950/70 px-2 py-1 text-[0.7rem] font-medium text-sand-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {image.category}
              </span>
            </button>
          ))}
        </RevealSection>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}
