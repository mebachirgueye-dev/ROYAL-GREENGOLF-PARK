import type { ExperienceItem } from "../types";

export const experiences: ExperienceItem[] = [
  {
    id: "golf",
    title: "Golf",
    description:
      "Un parcours conçu pour offrir un défi aux joueurs expérimentés comme aux débutants.",
    image: "/images/hero-fairway.jpg",
    targetId: "parcours",
  },
  {
    id: "practice",
    title: "Practice",
    description:
      "Perfectionnez votre swing dans un espace dédié à l'entraînement.",
    image: "/images/course-aerial.jpg",
    targetId: "parcours",
  },
  {
    id: "club-house",
    title: "Club House",
    description:
      "Un espace chaleureux pour se retrouver après une partie.",
    image: "/images/clubhouse-lake.jpg",
    targetId: "restaurant",
  },
  {
    id: "restaurant",
    title: "Restaurant",
    description: "Une cuisine raffinée dans un cadre exceptionnel.",
    image: "/images/bunker-sunset.jpg",
    targetId: "restaurant",
  },
];
