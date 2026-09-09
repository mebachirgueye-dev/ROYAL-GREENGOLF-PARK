import type { Hole } from "../types";

// Mock course data — 18 holes, positioned as illustrative markers over the
// stylised course map. Par totals to 72 (4 par 3, 10 par 4, 4 par 5).
export const holes: Hole[] = [
  { number: 1, par: 4, distance: 372, difficulty: "Modérée", description: "Départ ouvert vers un fairway généreux, légèrement descendant vers un green protégé par deux bunkers.", position: { top: 32, left: 30 } },
  { number: 2, par: 3, distance: 158, difficulty: "Douce", description: "Un par 3 technique au-dessus d'une mare, où la précision prime sur la distance.", position: { top: 46, left: 27 } },
  { number: 3, par: 5, distance: 486, difficulty: "Exigeante", description: "Long par 5 dessiné en léger dogleg, avec un second coup à jouer entre deux rangées de chênes.", position: { top: 58, left: 32 } },
  { number: 4, par: 4, distance: 341, difficulty: "Modérée", description: "Fairway étroit entouré de bosquets, récompensant les golfeurs qui privilégient la trajectoire à la puissance.", position: { top: 68, left: 26 } },
  { number: 5, par: 4, distance: 389, difficulty: "Modérée", description: "Un trou franc où le green surélevé exige une approche précise en fin de parcours.", position: { top: 55, left: 45 } },
  { number: 6, par: 3, distance: 142, difficulty: "Douce", description: "Court par 3 tout en finesse, le green étant entouré de bunkers de sable clair.", position: { top: 22, left: 52 } },
  { number: 7, par: 4, distance: 366, difficulty: "Modérée", description: "Départ surélevé offrant une vue dégagée sur l'ensemble du fairway et le plan d'eau en contrebas.", position: { top: 40, left: 58 } },
  { number: 8, par: 4, distance: 355, difficulty: "Modérée", description: "Un dogleg à droite qui longe la pièce d'eau centrale, idéal pour les joueurs stratèges.", position: { top: 54, left: 62 } },
  { number: 9, par: 5, distance: 502, difficulty: "Exigeante", description: "Le par 5 le plus long du parcours, à jouer en trois coups sûrs jusqu'au retour du club house.", position: { top: 66, left: 55 } },
  { number: 10, par: 4, distance: 348, difficulty: "Modérée", description: "Nouveau départ vers l'arrière du domaine, fairway large propice à un début de deuxième neuf en confiance.", position: { top: 30, left: 68 } },
  { number: 11, par: 3, distance: 167, difficulty: "Douce", description: "Par 3 exposé au vent, le green profond pardonne les approches légèrement courtes.", position: { top: 18, left: 74 } },
  { number: 12, par: 4, distance: 378, difficulty: "Modérée", description: "Fairway vallonné entre deux lisières boisées, avec un green en dévers qu'il faut savoir lire.", position: { top: 34, left: 82 } },
  { number: 13, par: 5, distance: 495, difficulty: "Exigeante", description: "Un par 5 spectaculaire longeant l'étang, tentant pour les joueurs qui visent le green en deux coups.", position: { top: 48, left: 88 } },
  { number: 14, par: 4, distance: 362, difficulty: "Modérée", description: "Trou technique au fairway sinueux, où le placement du drive conditionne toute l'approche.", position: { top: 60, left: 80 } },
  { number: 15, par: 3, distance: 151, difficulty: "Douce", description: "Par 3 panoramique surplombant la vallée, réputé pour sa quiétude en fin de partie.", position: { top: 72, left: 74 } },
  { number: 16, par: 4, distance: 384, difficulty: "Modérée", description: "Un fairway en légère montée qui teste la précision du second coup vers un green étroit.", position: { top: 78, left: 62 } },
  { number: 17, par: 4, distance: 336, difficulty: "Douce", description: "Trou plus court offrant une réelle opportunité de birdie avant le final.", position: { top: 84, left: 50 } },
  { number: 18, par: 5, distance: 512, difficulty: "Exigeante", description: "Le trou de conclusion, long et exigeant, qui ramène les joueurs face au club house sous les regards de la terrasse.", position: { top: 88, left: 34 } },
];

export const courseStats = {
  holes: 18,
  par: 72,
  length: 6500, // meters
  practice: true,
  puttingGreen: true,
};
