export interface GolfHole {
  id: number;
  number: number;
  par: number;
  distance: number; // meters
  difficulty: 'Easy' | 'Moderate' | 'Difficult' | 'Expert';
  description: string;
  // relative position on the course map image (percentage)
  x: number;
  y: number;
}

export interface ExperienceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'Parcours' | 'Golf' | 'Club House' | 'Restaurant' | 'Événements';
  width?: 'normal' | 'wide' | 'tall';
}

export interface Testimonial {
  id: string;
  name: string;
  profession: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface ReservationForm {
  date: string;
  time: string;
  players: string;
  type: string;
  name: string;
  email: string;
  phone: string;
}

export type GalleryCategory = 'Tous' | 'Parcours' | 'Golf' | 'Club House' | 'Restaurant' | 'Événements';
