import type { GalleryImage } from "../types";

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "/images/course-aerial.jpg", alt: "Vue aérienne du parcours de golf entouré d'arbres", category: "Parcours", size: "lg" },
  { id: "g2", src: "/images/hero-fairway.jpg", alt: "Fairway bordé d'arbres en fin de journée", category: "Golf", size: "tall" },
  { id: "g3", src: "/images/bunker-sunset.jpg", alt: "Bunkers de sable au coucher du soleil", category: "Parcours", size: "wide" },
  { id: "g4", src: "/images/clubhouse-lake.jpg", alt: "Club house surplombant le plan d'eau", category: "Club House", size: "md" },
  { id: "g5", src: "/images/clubhouse-lake.jpg", alt: "Terrasse du restaurant au bord de l'eau", category: "Restaurant", size: "md" },
  { id: "g6", src: "/images/hero-fairway.jpg", alt: "Green et drapeau jaune en lumière du soir", category: "Golf", size: "sm" },
  { id: "g7", src: "/images/bunker-sunset.jpg", alt: "Réception en plein air près des bunkers", category: "Événements", size: "sm" },
  { id: "g8", src: "/images/course-aerial.jpg", alt: "Golfeurs sur le green vu du ciel", category: "Golf", size: "wide" },
  { id: "g9", src: "/images/clubhouse-lake.jpg", alt: "Fontaine et golfeurs près du club house", category: "Événements", size: "md" },
];

export const galleryCategories: Array<GalleryImage["category"] | "Tout"> = [
  "Tout",
  "Parcours",
  "Golf",
  "Club House",
  "Restaurant",
  "Événements",
];
