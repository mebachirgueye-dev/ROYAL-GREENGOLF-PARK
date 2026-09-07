# Document de Spécifications

## 1. Présentation de l'application

**Nom** : Royal Green Golf Park

**Description** : Site vitrine premium et immersif pour un complexe de golf haut de gamme. L'objectif est de présenter Royal Green Golf Park comme une destination d'exception où les visiteurs peuvent découvrir le parcours, réserver une partie, explorer le restaurant, organiser des événements et consulter la galerie. Le site repose sur des données statiques/mockées, sans backend réel.

**Identité visuelle** : Palette vert forêt profond, vert naturel, beige/sable, blanc cassé, doré discret, noir profond. Design élégant, minimaliste, luxueux, moderne. Typographie élégante pour les titres, lisible pour le contenu.

---

## 2. Utilisateurs et contexte d'usage

**Utilisateurs cibles** : Golfeurs passionnés, particuliers souhaitant découvrir le golf, entreprises cherchant un lieu pour événements, clients restaurant.

**Scénarios principaux** :
- Un visiteur découvre le complexe et réserve une partie
- Un professionnel consulte l'offre événements et soumet une demande
- Un curieux explore la galerie et les témoignages

---

## 3. Structure des pages et fonctionnalités

### 3.1 Arborescence

```
Site Royal Green Golf Park
├── Navigation (header fixe)
├── Section Hero
├── Section Présentation du golf
├── Section Le Parcours
├── Section Expérience
├── Section Offre Découverte
├── Section Restaurant
├── Section Événements
├── Section Galerie
├── Section Témoignages
├── Section Réservation
├── Section Localisation
└── Footer
```

### 3.2 Navigation (Header)

- Header transparent sur la section Hero, puis fond blanc/vert foncé au scroll
- Liens de navigation : Accueil, Le parcours, Expérience, Restaurant, Événements, Galerie, Contact
- Bouton à droite : « Réserver maintenant » (ancre vers la section Réservation)
- Sur mobile : menu hamburger avec animation d'ouverture/fermeture fluide
- Transition animée lors du changement d'état au scroll

### 3.3 Section Hero

- Image plein écran : Image1 (vue aérienne parcours) — https://miaoda-conversation-file.s3cdn.medo.dev/user-e97dto394z5s/app-e9as9j53ojk1/20260907/image_1788811104570.png
- Overlay sombre subtil sur l'image
- Titre principal (H1) : « ROYAL GREEN GOLF PARK — Là où le golf rencontre l'exception. »
- Sous-titre : « Découvrez un parcours d'exception, un cadre naturel unique et une expérience pensée pour les passionnés de golf. »
- Deux boutons : « Réserver une partie » (ancre Réservation) et « Découvrir le parcours » (ancre Parcours)
- Indicateur bas de page : « 18 trous • Practice • Club House • Restaurant »
- Animation légère au scroll (parallax ou fade)

### 3.4 Section Présentation du golf

- Mise en page éditoriale asymétrique : image à gauche, texte à droite (style magazine)
- Image : Image3 (fairway avec bunkers) — https://miaoda-conversation-file.s3cdn.medo.dev/user-e97dto394z5s/app-e9as9j53ojk1/20260907/image_1788811181617.png
- Titre (H2) : « Un parcours pensé pour l'excellence »
- Contenu : présentation des 18 trous, entretien quotidien du parcours, practice, putting green, vestiaires, club house
- Bouton : « Explorer le parcours »
- Apparition progressive au scroll

### 3.5 Section Le Parcours

- Titre (H2) : « Le Parcours »
- Statistiques clés avec compteurs animés : 18 trous, Par 72, 6 500 mètres, Practice, Putting green
- Image principale : Image2 (carte/plan du parcours) — https://miaoda-conversation-file.s3cdn.medo.dev/user-e97dto394z5s/app-e9as9j53ojk1/20260907/image_1788811132189.png
- Points interactifs sur la carte : cliquer sur un trou affiche une fiche (numéro, Par, distance, difficulté, description) — données mockées pour les 18 trous
- Données mockées exemple : Trou 1 — Par 4, 380 m, Difficulté : Modérée, « Un départ ouvert idéal pour lancer la partie. »

### 3.6 Section Expérience — « Bien plus qu'un parcours »

- Titre (H2) : « Bien plus qu'un parcours »
- 4 cartes avec image, titre, description et animation au survol (zoom subtil) :
  - Golf : « Un parcours conçu pour offrir un défi aux joueurs expérimentés comme aux débutants. »
  - Practice : « Perfectionnez votre swing dans un espace dédié à l'entraînement. »
  - Club House : « Un espace chaleureux pour se retrouver après une partie. »
  - Restaurant : « Une cuisine raffinée dans un cadre exceptionnel. »
- Images : utiliser des images mockées cohérentes avec l'identité golf de luxe (URLs Unsplash ou placeholders haute qualité)

### 3.7 Section Offre Découverte

- Titre (H2) : « Votre première expérience golf »
- Présentation des éléments inclus : Initiation, Matériel inclus, Accompagnement professionnel, Accès au practice
- Bouton : « Réserver mon initiation » (ancre vers la section Réservation)

### 3.8 Section Restaurant

- Grande image d'ambiance restaurant élégant donnant sur le parcours (image mockée)
- Titre (H2) : « Une table avec vue sur le green »
- Contenu : cuisine raffinée, produits frais, déjeuner, dîner, terrasse, vue panoramique
- Deux boutons : « Découvrir le restaurant » et « Voir le menu » (actions simulées, affichage d'un menu mocké ou scroll vers section)

### 3.9 Section Événements

- Image : Image4 (parcours au coucher de soleil) — https://miaoda-conversation-file.s3cdn.medo.dev/user-e97dto394z5s/app-e9as9j53ojk1/20260907/image_1788811193760.png
- Titre (H2) : « Un cadre exceptionnel pour vos événements »
- Types d'événements présentés : Tournois, Mariages, Séminaires, Team building, Réceptions privées
- Carte flottante sur l'image : « Jusqu'à 150 invités »
- Bouton : « Organiser un événement » (ancre vers la section Réservation ou formulaire de contact)

### 3.10 Section Galerie

- Titre (H2) : « Galerie »
- Filtres par catégorie : Parcours, Golf, Club House, Restaurant, Événements
- Grille asymétrique de photos (données mockées, images cohérentes avec l'identité visuelle)
- Lightbox élégante au clic sur une photo : affichage plein écran, navigation précédent/suivant

### 3.11 Section Témoignages

- Titre (H2) : « Ils ont vécu l'expérience Royal Green »
- 3 témoignages mockés : prénom, profession, note (étoiles), commentaire
  - Exemple : « Sophie M., Directrice commerciale, 5/5 — Une expérience inoubliable, le cadre est absolument magnifique. »
- Carousel animé avec navigation automatique et manuelle

### 3.12 Section Réservation

- Titre (H2) : « Réservez votre prochaine partie »
- Formulaire avec les champs : Date, Heure, Nombre de joueurs, Type de réservation (liste : Partie de golf, Initiation, Événement, Restaurant), Nom, Email, Téléphone
- Bouton de soumission : « Vérifier les disponibilités »
- Comportement : soumission simulée côté client, affichage d'un message de confirmation (ex. : « Votre demande a bien été prise en compte. Nous vous contacterons sous 24h. »)
- Aucun envoi réel de données

### 3.13 Section Localisation

- Titre (H2) : « Nous trouver »
- Informations affichées :
  - Adresse (donnée mockée)
  - Téléphone (donnée mockée)
  - Email (donnée mockée)
  - Horaires d'ouverture (données mockées)
- Mention : « À 20 minutes du centre-ville »
- Carte stylisée simulant Google Maps (composant visuel statique ou iframe mocké)

### 3.14 Footer

- Logo texte : « ROYAL GREEN »
- Navigation complète (liens vers toutes les sections)
- Informations de contact (adresse, téléphone, email)
- Icônes réseaux sociaux : Instagram, Facebook, YouTube (liens mockés)
- Phrase signature : « The game. The nature. The experience. »

---

## 4. Règles métier et logique

### 4.1 Navigation et scroll
- Tous les boutons d'appel à l'action (CTA) ancrent vers la section correspondante via scroll fluide
- Le header change d'apparence (transparent → fond coloré) dès que l'utilisateur quitte la section Hero

### 4.2 Parcours interactif
- Les 18 points interactifs sur la carte sont des données mockées statiques
- Un seul trou peut être sélectionné à la fois ; la fiche s'affiche en superposition ou dans un panneau latéral

### 4.3 Galerie
- Le filtre de catégorie met à jour l'affichage de la grille sans rechargement de page
- La lightbox bloque le scroll de la page en arrière-plan lors de son ouverture

### 4.4 Formulaire de réservation
- Validation côté client : tous les champs sont obligatoires
- Format email vérifié, format téléphone vérifié
- La date ne peut pas être antérieure à la date du jour (7 septembre 2026)
- Après soumission valide, le formulaire est remplacé par le message de confirmation

### 4.5 Curseur personnalisé
- Curseur custom actif sur desktop
- Changement d'aspect visuel sur les éléments cliquables (liens, boutons, points interactifs)
- Désactivé sur mobile/tactile

### 4.6 Animations
- Apparition progressive des sections au scroll (fade-in / slide-up)
- Parallax léger sur les grandes images de fond
- Zoom subtil au survol des cartes Expérience et photos de galerie
- Compteurs animés (chiffres qui s'incrémentent) dans la section Parcours, déclenchés à l'entrée dans le viewport
- Carousel témoignages : défilement automatique toutes les 5 secondes, navigation manuelle possible
- Transitions fluides entre états (menu mobile, header, lightbox)

---

## 5. Cas limites et gestion des erreurs

| Situation | Comportement attendu |
|---|---|
| Formulaire soumis avec champs manquants | Mise en évidence des champs invalides, message d'erreur inline |
| Date de réservation dans le passé | Champ date bloqué, message d'erreur |
| Format email invalide | Message d'erreur inline sur le champ email |
| Image non chargée (URL inaccessible) | Affichage d'un placeholder de couleur cohérente avec la palette |
| Lightbox ouverte : touche Échap | Fermeture de la lightbox |
| Menu mobile ouvert : clic sur un lien | Fermeture du menu et scroll vers la section |

---

## 6. SEO

- Balise `<title>` : « Royal Green Golf Park — Parcours de golf d'exception »
- Meta description : « Découvrez Royal Green Golf Park, un complexe de golf premium avec 18 trous, restaurant gastronomique, club house et espaces événementiels. Réservez votre partie dès maintenant. »
- Structure sémantique : balises H1 (Hero), H2 (titres de section), H3 (sous-titres de cartes)
- Attributs `alt` descriptifs sur toutes les images
- Structure HTML sémantique : `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`

---

## 7. Responsive

- Approche mobile-first
- Adaptation sur smartphone, tablette, ordinateur, grands écrans
- Menu hamburger sur mobile
- Grille galerie adaptée (1 colonne mobile, 2 tablette, 3+ desktop)
- Cartes Expérience empilées sur mobile
- Mise en page éditoriale asymétrique (image + texte) passe en colonne unique sur mobile

---

## 8. Critères de recette

1. Ouvrir le site : la section Hero s'affiche en plein écran avec Image1, le titre et les deux boutons CTA
2. Faire défiler la page : le header change d'apparence (transparent vers fond coloré)
3. Cliquer sur « Découvrir le parcours » : scroll fluide vers la section Parcours, Image2 visible avec les statistiques animées
4. Cliquer sur un point interactif de la carte : la fiche du trou s'affiche (numéro, Par, distance, difficulté, description)
5. Naviguer vers la section Galerie, sélectionner un filtre de catégorie : la grille se met à jour
6. Cliquer sur une photo de la galerie : la lightbox s'ouvre, navigation précédent/suivant fonctionnelle, fermeture par clic ou touche Échap
7. Accéder à la section Réservation, remplir le formulaire avec des données valides, cliquer sur « Vérifier les disponibilités » : message de confirmation affiché
8. Tenter de soumettre le formulaire avec un champ vide : message d'erreur inline affiché, soumission bloquée
9. Sur mobile : ouvrir le menu hamburger, cliquer sur un lien de navigation, vérifier le scroll vers la section et la fermeture du menu

---

## 9. Fonctionnalités hors périmètre (non implémentées)

- Backend réel et base de données
- Système de paiement en ligne
- Espace membre / authentification
- Gestion de disponibilités en temps réel
- Envoi réel d'emails de confirmation
- Système de blog ou actualités
- Multilingue
- Intégration réelle Google Maps
- Intégration réelle des réseaux sociaux (flux live)
