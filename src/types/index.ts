export interface Hole {
  number: number;
  par: 3 | 4 | 5;
  distance: number; // meters
  difficulty: "Douce" | "Modérée" | "Exigeante";
  description: string;
  /** Position of the marker over the course map, in percent (top/left). */
  position: { top: number; left: number };
}

export type GalleryCategory =
  | "Parcours"
  | "Golf"
  | "Club House"
  | "Restaurant"
  | "Événements";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  /** Controls the asymmetric grid span. */
  size: "sm" | "md" | "lg" | "wide" | "tall";
}

export interface Testimonial {
  id: string;
  firstName: string;
  profession: string;
  rating: number;
  comment: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  targetId: string;
}

export interface BookingFormState {
  date: string;
  time: string;
  players: string;
  type: string;
  name: string;
  email: string;
  phone: string;
}
