import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useAnimations';

const experiences = [
  {
    id: 'golf',
    title: 'Golf',
    description: 'Un parcours conçu pour offrir un défi aux joueurs expérimentés comme aux débutants.',
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&q=80',
    alt: 'Golfeur professionnel au départ',
  },
  {
    id: 'practice',
    title: 'Practice',
    description: 'Perfectionnez votre swing dans un espace dédié à l\'entraînement avec nos professionnels.',
    image: 'https://images.unsplash.com/photo-1600877396423-6e0017c51b1b?w=800&q=80',
    alt: 'Zone de practice et putting green',
  },
  {
    id: 'clubhouse',
    title: 'Club House',
    description: 'Un espace chaleureux pour se retrouver après une partie, avec bar et salon privé.',
    image: 'https://images.unsplash.com/photo-1596416552169-6e8571db7fd3?w=800&q=80',
    alt: 'Intérieur luxueux du club house',
  },
  {
    id: 'restaurant',
    title: 'Restaurant',
    description: 'Une cuisine raffinée dans un cadre exceptionnel avec vue panoramique sur le parcours.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    alt: 'Restaurant gastronomique avec vue sur le green',
  },
];

export default function ExperienceSection() {
  useScrollReveal();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="experience" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-label block mb-4">L'Expérience</span>
          <span className="gold-divider mx-auto mb-6 block" />
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Bien plus qu'un parcours
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className={`experience-card relative rounded-xl overflow-hidden aspect-[4/3] shadow-card group reveal ${
                i === 0 ? 'reveal-delay-1' : i === 1 ? 'reveal-delay-2' : i === 2 ? 'reveal-delay-3' : 'reveal-delay-4'
              }`}
            >
              <img
                src={exp.image}
                alt={exp.alt}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <h3
                  className="text-xl md:text-2xl font-semibold text-white mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {exp.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed max-w-sm">{exp.description}</p>
                <div className="flex items-center gap-2 mt-4 text-accent text-xs font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  En savoir plus
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
