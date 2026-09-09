import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "../types";

interface Props {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, index, onClose, onNavigate }: Props) {
  const image = images[index];

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [index, images.length, onClose, onNavigate]);

  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-pine-950/95 px-4 py-8 animate-fade-in"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fermer la galerie"
        className="absolute right-5 top-5 p-2 text-sand-50/80 transition-colors hover:text-gold-400"
      >
        <X size={28} />
      </button>

      <button
        type="button"
        onClick={() => onNavigate((index - 1 + images.length) % images.length)}
        aria-label="Image précédente"
        className="absolute left-2 top-1/2 -translate-y-1/2 p-3 text-sand-50/80 transition-colors hover:text-gold-400 sm:left-6"
      >
        <ChevronLeft size={32} />
      </button>

      <figure className="flex max-h-full max-w-4xl flex-col items-center">
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[75vh] w-auto max-w-full object-contain"
        />
        <figcaption className="mt-4 text-center text-sm text-sand-200/80">
          {image.alt}
          <span className="mx-2 text-gold-400">&middot;</span>
          {image.category}
          <span className="mx-2 text-sand-50/40">
            ({index + 1}/{images.length})
          </span>
        </figcaption>
      </figure>

      <button
        type="button"
        onClick={() => onNavigate((index + 1) % images.length)}
        aria-label="Image suivante"
        className="absolute right-2 top-1/2 -translate-y-1/2 p-3 text-sand-50/80 transition-colors hover:text-gold-400 sm:right-6"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
}
