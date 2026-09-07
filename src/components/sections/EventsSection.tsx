import { ArrowRight, Users, Trophy, Handshake, Heart, PartyPopper } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useAnimations';

const eventTypes = [
  { icon: Trophy, label: 'Tournois' },
  { icon: Heart, label: 'Mariages' },
  { icon: Handshake, label: 'Séminaires' },
  { icon: Users, label: 'Team Building' },
  { icon: PartyPopper, label: 'Réceptions' },
];

export default function EventsSection() {
  useScrollReveal();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="evenements" className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Content */}
          <div className="reveal-left">
            <span className="section-label block mb-4">Événements</span>
            <span className="gold-divider mb-6 block" />
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-snug mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Un cadre exceptionnel
              <br />
              <em className="font-normal text-primary/70">pour vos événements</em>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Royal Green Golf Park met à disposition son cadre d'exception pour tous vos
              événements professionnels et personnels. De la petite réception intime au
              grand tournoi officiel, notre équipe dédiée orchestre chaque détail avec
              le même niveau d'exigence.
            </p>

            {/* Event types */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {eventTypes.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 p-3 border border-border rounded bg-muted/50 hover:border-primary/40 hover:bg-muted transition-all duration-200"
                >
                  <Icon className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-sm font-medium text-foreground/80">{label}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollTo('#reservation')}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-semibold tracking-wide rounded transition-all duration-300 hover:bg-primary/90 hover:gap-3 hover:-translate-y-0.5 shadow-card hover:shadow-hover"
            >
              Organiser un événement
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Image with floating card */}
          <div className="reveal-right relative">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-hover">
              <img
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=900&q=85"
                alt="Événement de golf — Royal Green Golf Park"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Floating capacity card */}
            <div className="absolute bottom-8 -left-4 md:-left-8 bg-white border border-border rounded-xl p-5 shadow-hover min-w-[160px]">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-accent" />
                <span className="text-xs text-muted-foreground font-medium">Capacité max.</span>
              </div>
              <p
                className="text-3xl font-bold text-primary"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                150
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">invités</p>
            </div>

            {/* Second floating card */}
            <div className="absolute top-8 -right-4 md:-right-6 bg-primary text-primary-foreground rounded-xl p-4 shadow-hover text-center">
              <p className="text-2xl font-bold text-accent" style={{ fontFamily: "'Playfair Display', serif" }}>5★</p>
              <p className="text-[10px] tracking-wider uppercase text-white/60 mt-1">Service<br />Premium</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
