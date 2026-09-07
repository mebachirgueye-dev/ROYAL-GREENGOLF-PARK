import type { GolfHole, GalleryImage, Testimonial } from '@/types';

export const golfHoles: GolfHole[] = [
  { id: 1, number: 1, par: 4, distance: 382, difficulty: 'Moderate', description: 'Un départ ouvert idéal. Le fairway large invite à un drive ambitieux vers le green surélevé.', x: 62, y: 72 },
  { id: 2, number: 2, par: 3, distance: 178, difficulty: 'Easy', description: 'Court par 3 avec green protégé par deux bunkers en avant. La précision prime sur la distance.', x: 72, y: 60 },
  { id: 3, number: 3, par: 5, distance: 520, difficulty: 'Difficult', description: 'Long par 5 en dogleg gauche. Les grands frappeurs peuvent viser le green en deux coups.', x: 79, y: 48 },
  { id: 4, number: 4, par: 4, distance: 365, difficulty: 'Moderate', description: 'Trou signature du parcours. Le green en péninsule offre une vue imprenable sur l\'étang.', x: 73, y: 38 },
  { id: 5, number: 5, par: 4, distance: 398, difficulty: 'Difficult', description: 'Dogleg droit avec arbres centenaires. La seconde balle doit éviter le bunker profond à gauche.', x: 63, y: 32 },
  { id: 6, number: 6, par: 3, distance: 195, difficulty: 'Expert', description: 'Par 3 emblématique en descente. Le vent dominant rend la lecture difficile pour tous les niveaux.', x: 54, y: 25 },
  { id: 7, number: 7, par: 5, distance: 545, difficulty: 'Moderate', description: 'Le plus long trou du parcours. Trois zones de rough stratégiques jalonnent ce par 5 majestueux.', x: 45, y: 22 },
  { id: 8, number: 8, par: 4, distance: 410, difficulty: 'Difficult', description: 'Fairway en montée avec green élevé. L\'approche finale nécessite un club de plus que prévu.', x: 37, y: 30 },
  { id: 9, number: 9, par: 4, distance: 355, difficulty: 'Moderate', description: 'Trou de clôture de l\'aller avec vue sur le club house. Un birdie ici booste le moral pour le retour.', x: 30, y: 40 },
  { id: 10, number: 10, par: 4, distance: 370, difficulty: 'Easy', description: 'Départ du retour en descente douce. Excellent trou pour regagner confiance après la pause déjeuner.', x: 25, y: 52 },
  { id: 11, number: 11, par: 3, distance: 162, difficulty: 'Easy', description: 'Short game décisif. Le green légèrement en pente derrière demande une approche lobée et précise.', x: 28, y: 62 },
  { id: 12, number: 12, par: 5, distance: 498, difficulty: 'Moderate', description: 'Par 5 jouable en deux pour les longue-frappeurs. Le ruisseau en travers à 50 m du green divise les stratégies.', x: 20, y: 70 },
  { id: 13, number: 13, par: 4, distance: 388, difficulty: 'Difficult', description: 'Dogleg gauche caché par une rangée de chênes. La coupe parfaite raccourcit considérablement l\'approche.', x: 28, y: 78 },
  { id: 14, number: 14, par: 4, distance: 415, difficulty: 'Expert', description: 'Le trou le plus technique. Étroit, avec hors-limites à droite et rough profond à gauche sur tout le fairway.', x: 38, y: 82 },
  { id: 15, number: 15, par: 3, distance: 205, difficulty: 'Difficult', description: 'Par 3 épique au-dessus d\'un vallon naturel. La vue est à couper le souffle — tout comme l\'approche.', x: 48, y: 86 },
  { id: 16, number: 16, par: 5, distance: 512, difficulty: 'Moderate', description: 'Trou panoramique avec vue sur la forêt environnante. Idéal pour les eagles des joueurs bien positionnés.', x: 57, y: 82 },
  { id: 17, number: 17, par: 4, distance: 395, difficulty: 'Difficult', description: 'Avant-dernier trou, souvent décisif. Le green surélevé teste la gestion du stress sous pression.', x: 65, y: 76 },
  { id: 18, number: 18, par: 4, distance: 378, difficulty: 'Moderate', description: 'Grand finale face au club house. Deux bunkers gardent l\'entrée du green. L\'assistance vous regarde.', x: 60, y: 65 },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: 'https://miaoda-conversation-file.s3cdn.medo.dev/user-e97dto394z5s/app-e9as9j53ojk1/20260907/image_1788811104570.png',
    alt: 'Vue aérienne du parcours Royal Green Golf Park',
    category: 'Parcours',
    width: 'wide',
  },
  {
    id: 'g2',
    src: 'https://miaoda-conversation-file.s3cdn.medo.dev/user-e97dto394z5s/app-e9as9j53ojk1/20260907/image_1788811181617.png',
    alt: 'Fairway avec bunkers au coucher de soleil',
    category: 'Golf',
    width: 'wide',
  },
  {
    id: 'g3',
    src: 'https://miaoda-conversation-file.s3cdn.medo.dev/user-e97dto394z5s/app-e9as9j53ojk1/20260907/image_1788811193760.png',
    alt: 'Parcours Royal Green au coucher de soleil avec drapeau',
    category: 'Parcours',
    width: 'normal',
  },
  {
    id: 'g4',
    src: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&q=80',
    alt: 'Golfeur professionnel au départ',
    category: 'Golf',
    width: 'normal',
  },
  {
    id: 'g5',
    src: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80',
    alt: 'Parcours de golf vue fairway green',
    category: 'Parcours',
    width: 'normal',
  },
  {
    id: 'g6',
    src: 'https://images.unsplash.com/photo-1596416552169-6e8571db7fd3?w=800&q=80',
    alt: 'Club house luxueux intérieur',
    category: 'Club House',
    width: 'wide',
  },
  {
    id: 'g7',
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    alt: 'Restaurant gastronomique vue sur le green',
    category: 'Restaurant',
    width: 'normal',
  },
  {
    id: 'g8',
    src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80',
    alt: 'Événement de golf tournoi',
    category: 'Événements',
    width: 'wide',
  },
  {
    id: 'g9',
    src: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80',
    alt: 'Salle de réception élégante pour événements',
    category: 'Événements',
    width: 'normal',
  },
  {
    id: 'g10',
    src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80',
    alt: 'Table dressée restaurant vue golf',
    category: 'Restaurant',
    width: 'normal',
  },
  {
    id: 'g11',
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    alt: 'Terrasse club house avec vue panoramique',
    category: 'Club House',
    width: 'normal',
  },
  {
    id: 'g12',
    src: 'https://images.unsplash.com/photo-1600877396423-6e0017c51b1b?w=800&q=80',
    alt: 'Putting green practice matinal',
    category: 'Golf',
    width: 'normal',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sophie M.',
    profession: 'Directrice commerciale',
    rating: 5,
    comment: 'Une expérience absolument inoubliable. Le parcours est d\'une beauté rare et le service dépasse toutes les attentes. J\'y reviendrai sans hésiter.',
    avatar: 'SM',
  },
  {
    id: 't2',
    name: 'Laurent D.',
    profession: 'Chef d\'entreprise',
    rating: 5,
    comment: 'Nous avons organisé notre séminaire annuel à Royal Green et tout était parfait. Le cadre, l\'accueil, la cuisine — un niveau d\'excellence que l\'on retrouve rarement.',
    avatar: 'LD',
  },
  {
    id: 't3',
    name: 'Claire & Thomas B.',
    profession: 'Mariés en 2025',
    rating: 5,
    comment: 'Notre mariage sur ce parcours restera le plus beau jour de notre vie. L\'équipe a tout orchestré avec une élégance et une attention au détail remarquables.',
    avatar: 'CB',
  },
];

export const courseStats = [
  { label: 'Trous', value: 18, suffix: '' },
  { label: 'Par total', value: 72, suffix: '' },
  { label: 'Longueur', value: 6500, suffix: 'm' },
  { label: 'Hectares', value: 65, suffix: '' },
];

export const reservationTypes = [
  'Partie de golf',
  'Initiation golf',
  'Séance de practice',
  'Restaurant',
  'Événement privé',
  'Séminaire / Team building',
  'Tournoi',
];
