import { ArrowRight, UtensilsCrossed } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useAnimations';

const menu = [
  { category: 'Entrées', items: ['Foie gras maison, brioche grillée', 'Tartare de saumon fumé aux agrumes', 'Soupe de saison du moment'] },
  { category: 'Plats', items: ['Filet de bœuf, sauce au poivre vert', 'Lieu jaune, beurre blanc aux herbes', 'Risotto aux champignons sauvages'] },
  { category: 'Desserts', items: ['Tarte Tatin, glace caramel beurre salé', 'Fondant au chocolat noir 75%', 'Assiette de fromages affinés'] },
];

export default function RestaurantSection() {
  useScrollReveal();

  return (
    <section id="restaurant" className="py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="reveal-left relative order-2 md:order-1">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-hover">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=85"
                alt="Restaurant gastronomique avec vue sur le parcours de golf"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Badge */}
            <div className="absolute top-6 -right-4 md:-right-6 bg-accent text-white p-5 rounded shadow-lg text-center">
              <UtensilsCrossed className="w-5 h-5 mx-auto mb-1.5" />
              <p className="text-xs font-semibold tracking-wider uppercase">Cuisine<br />Raffinée</p>
            </div>
          </div>

          {/* Content */}
          <div className="reveal-right order-1 md:order-2">
            <span className="section-label block mb-4">Restaurant</span>
            <span className="gold-divider mb-6 block" />
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-snug mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Une table avec vue
              <br />
              <em className="font-normal text-primary/70">sur le green</em>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Prolongez votre expérience autour d'une cuisine raffinée. Notre chef sélectionne
              chaque jour les meilleurs produits de saison pour composer une carte alliant
              élégance et authenticité. Déjeuner, dîner, ou simple pause en terrasse —
              la vue panoramique sur le parcours en fait un moment unique.
            </p>

            {/* Menu preview */}
            <div className="bg-white border border-border rounded-lg p-6 mb-8 shadow-card">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
                Carte du jour
              </h3>
              <div className="space-y-4">
                {menu.map((section) => (
                  <div key={section.category}>
                    <h4 className="text-xs font-semibold text-accent tracking-wider uppercase mb-1.5">
                      {section.category}
                    </h4>
                    <ul className="space-y-1">
                      {section.items.map((item) => (
                        <li key={item} className="text-sm text-foreground/70 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-accent/40 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold tracking-wide rounded transition-all duration-300 hover:bg-primary/90 hover:-translate-y-0.5 shadow-card">
                Découvrir le restaurant
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary text-sm font-semibold tracking-wide rounded transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5">
                Voir le menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
