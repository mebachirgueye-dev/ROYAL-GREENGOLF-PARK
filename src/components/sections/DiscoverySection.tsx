import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useAnimations';

const includes = [
  { label: 'Initiation au golf', desc: '2h avec un professionnel certifié' },
  { label: 'Matériel inclus', desc: 'Clubs, balles et accessoires fournis' },
  { label: 'Accompagnement', desc: 'Coaching personnalisé sur le parcours' },
  { label: 'Accès au practice', desc: 'Séance illimitée après l\'initiation' },
];

export default function DiscoverySection() {
  useScrollReveal();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative py-24 md:py-36 overflow-hidden"
      style={{
        backgroundImage: `url(https://miaoda-conversation-file.s3cdn.medo.dev/user-e97dto394z5s/app-e9as9j53ojk1/20260907/image_1788811193760.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 60%',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-primary/85" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left */}
          <div className="reveal-left">
            <span className="section-label text-accent block mb-4">Découverte</span>
            <span className="gold-divider mb-6 block" />
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-snug mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Votre première
              <br />
              <em className="font-normal text-accent">expérience golf</em>
            </h2>
            <p className="text-white/60 leading-relaxed mb-8 text-base">
              Découvrez le golf accompagné par nos professionnels et profitez d'une
              expérience complète conçue pour les nouveaux joueurs et les curieux.
            </p>
            <button
              onClick={() => scrollTo('#reservation')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold text-sm tracking-wider rounded transition-all duration-300 hover:bg-accent/90 hover:gap-3 hover:-translate-y-0.5 shadow-lg shadow-accent/30"
            >
              Réserver mon initiation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right — checklist */}
          <div className="reveal-right">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <h3
                className="text-lg font-semibold text-white mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Tout est inclus
              </h3>
              <ul className="space-y-5">
                {includes.map((item) => (
                  <li key={item.label} className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-medium text-sm">{item.label}</p>
                      <p className="text-white/50 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
