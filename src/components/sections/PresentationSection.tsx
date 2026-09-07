import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useAnimations';

const features = [
  '18 trous championship',
  'Entretien quotidien du parcours',
  'Practice & putting green',
  'Vestiaires premium',
  'Club house & restaurant',
  'Professionnels certifiés',
];

export default function PresentationSection() {
  useScrollReveal();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="presentation" className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image — asymmetric layout */}
          <div className="reveal-left relative">
            <div className="relative aspect-[4/5] md:aspect-[3/4] rounded overflow-hidden shadow-hover">
              <img
                src="https://miaoda-conversation-file.s3cdn.medo.dev/user-e97dto394z5s/app-e9as9j53ojk1/20260907/image_1788811181617.png"
                alt="Fairway avec bunkers — Royal Green Golf Park"
                className="w-full h-full object-cover"
              />
              {/* Gold accent overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-primary text-primary-foreground p-6 rounded shadow-hover">
              <p className="text-3xl font-bold text-accent" style={{ fontFamily: "'Playfair Display', serif" }}>37</p>
              <p className="text-xs text-white/60 tracking-wider uppercase mt-1">années<br />d'excellence</p>
            </div>
          </div>

          {/* Text */}
          <div className="reveal-right md:pl-4">
            <span className="section-label block mb-4">Le Parcours</span>
            <span className="gold-divider mb-6 block" />
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Un parcours pensé
              <br />
              <em className="font-normal text-primary/70">pour l'excellence</em>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
              Royal Green Golf Park incarne l'art du golf dans son expression la plus pure.
              Niché au cœur d'un écrin de verdure, notre complexe offre à chaque joueur
              une expérience à la hauteur des plus grands clubs internationaux.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {features.map((feat) => (
                <li key={feat} className="flex items-center gap-2.5 text-sm text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>

            <button
              onClick={() => scrollTo('#parcours')}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-semibold tracking-wide rounded transition-all duration-300 hover:bg-primary/90 hover:gap-3 hover:-translate-y-0.5 shadow-card hover:shadow-hover"
            >
              Explorer le parcours
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
