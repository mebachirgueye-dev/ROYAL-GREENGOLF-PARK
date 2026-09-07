import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '@/data/mockData';
import { useScrollReveal } from '@/hooks/useAnimations';
import type { GalleryCategory } from '@/types';

const categories: GalleryCategory[] = ['Tous', 'Parcours', 'Golf', 'Club House', 'Restaurant', 'Événements'];

export default function GallerySection() {
  useScrollReveal();
  const [active, setActive] = useState<GalleryCategory>('Tous');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === 'Tous' ? galleryImages : galleryImages.filter((img) => img.category === active);

  const openLightbox = (idx: number) => {
    setLightbox(idx);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = '';
  }, []);

  const prev = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + filtered.length) % filtered.length);
  }, [lightbox, filtered.length]);

  const next = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % filtered.length);
  }, [lightbox, filtered.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [closeLightbox, prev, next]);

  return (
    <section id="galerie" className="py-20 md:py-32 bg-muted/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="section-label block mb-4">Galerie</span>
          <span className="gold-divider mx-auto mb-6 block" />
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Découvrez Royal Green
          </h2>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded border transition-all duration-200 ${
                active === cat
                  ? 'bg-primary border-primary text-primary-foreground'
                  : 'bg-white border-border text-foreground/60 hover:border-primary/40 hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetric grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4 reveal">
          {filtered.map((img, idx) => (
            <button
              key={img.id}
              onClick={() => openLightbox(idx)}
              className={`gallery-item block w-full rounded overflow-hidden mb-4 ${
                img.width === 'wide' ? 'break-inside-avoid' : 'break-inside-avoid'
              }`}
              aria-label={`Voir : ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover"
                style={{
                  aspectRatio: img.width === 'tall' ? '3/4' : img.width === 'wide' ? '16/9' : '4/3',
                }}
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            Aucune photo dans cette catégorie.
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center lightbox-overlay bg-black/90"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Photo précédente"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Image */}
          <div className="max-w-4xl w-full px-16 md:px-20" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="w-full max-h-[80vh] object-contain rounded"
            />
            <p className="text-white/60 text-center text-sm mt-4">{filtered[lightbox].alt}</p>
            <p className="text-white/30 text-center text-xs mt-1">
              {lightbox + 1} / {filtered.length}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Photo suivante"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </section>
  );
}
