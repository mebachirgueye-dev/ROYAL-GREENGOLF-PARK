# Royal Green Golf Park

Site vitrine premium pour un complexe de golf, construit avec React,
TypeScript, Tailwind CSS et Lucide Icons. Toutes les données (trous du
parcours, galerie, témoignages, formulaire de réservation) sont statiques
et mockées : il n'y a pas de backend.

## Démarrage

Prérequis : [Node.js](https://nodejs.org) 18 ou supérieur.

```bash
npm install
npm run dev
```

Le site est alors disponible sur `http://localhost:5173`.

Autres commandes :

```bash
npm run build     # build de production dans dist/
npm run preview   # prévisualise le build de production
```

## Structure du projet

```
src/
  components/     Un composant par section (Hero, CourseMap, Gallery, ...)
                  + composants réutilisables (Button, SectionHeading, RevealSection, Lightbox)
  data/           Données mockées : trous, galerie, témoignages, expériences
  hooks/          useScrollReveal (animations au scroll), useCountUp (compteurs animés)
  types/          Types TypeScript partagés
  App.tsx         Assemble toutes les sections dans l'ordre
public/images/    Photos fournies (parcours, fairway, club house, bunker, carte du parcours)
```

## Personnalisation rapide

- **Couleurs & typographies** : `tailwind.config.js` (palette `pine` / `sand` /
  `gold` / `moss`, polices `Fraunces` et `Manrope`).
- **Contenu des 18 trous** et positions des marqueurs sur la carte :
  `src/data/holes.ts`. Chaque trou a une position `{ top, left }` en
  pourcentage — à ajuster si vous remplacez l'illustration de la carte.
- **Galerie / catégories** : `src/data/gallery.ts`.
- **Témoignages** : `src/data/testimonials.ts`.
- **Coordonnées, horaires, réseaux sociaux** : `src/components/Location.tsx`
  et `src/components/Footer.tsx`.
- **Formulaire de réservation** (`src/components/Booking.tsx`) simule
  actuellement la vérification de disponibilité côté client (aucun envoi
  réel). Branchez `handleSubmit` sur votre API ou service de réservation
  quand celui-ci sera disponible.

## Images

Le projet réutilise les 5 photos fournies (vue aérienne, fairway, club
house/lac, bunker au coucher du soleil, illustration du parcours) réparties
sur plusieurs sections. Pour un site en production, il est recommandé de
les remplacer par une photothèque plus large et en plus haute définition
(hero plein écran, practice, intérieur du restaurant, événements réels...).

## SEO

Le titre de page, la meta description et les balises Open Graph sont
définis dans `index.html`. Pensez à mettre à jour `og:image` avec une URL
absolue une fois le site déployé sur son domaine final.
