import { useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (overlayRef.current) {
        const y = window.scrollY;
        overlayRef.current.style.transform = `translateY(${y * 0.4}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background image with parallax */}
      <div
        ref={overlayRef}
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: `url(https://miaoda-conversation-file.s3cdn.medo.dev/user-e97dto394z5s/app-e9as9j53ojk1/20260907/image_1788811104570.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          willChange: 'transform',
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {/* Label */}
        <div className="mb-6 animate-fade-in">
          <span className="section-label text-white/60">Est. 1987 • Parcours d'exception</span>
        </div>

        {/* Title */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-wide mb-6 animate-fade-in"
          style={{ fontFamily: "'Playfair Display', serif", animationDelay: '0.1s' }}
        >
          ROYAL GREEN
          <br />
          <span className="text-accent italic font-normal">GOLF PARK</span>
        </h1>

        {/* Tagline */}
        <p
          className="text-lg md:text-2xl text-white/80 font-light italic mb-4 animate-fade-in"
          style={{ fontFamily: "'Playfair Display', serif", animationDelay: '0.2s' }}
        >
          Là où le golf rencontre l'exception.
        </p>

        {/* Description */}
        <p
          className="max-w-xl text-white/60 text-sm md:text-base leading-relaxed mb-10 animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          Découvrez un parcours d'exception, un cadre naturel unique et une expérience
          pensée pour les passionnés de golf.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <button
            onClick={() => scrollTo('#reservation')}
            className="px-8 py-4 bg-accent text-white font-semibold text-sm tracking-wider rounded transition-all duration-300 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            Réserver une partie
          </button>
          <button
            onClick={() => scrollTo('#parcours')}
            className="px-8 py-4 bg-white/10 border border-white/40 text-white font-semibold text-sm tracking-wider rounded backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
          >
            Découvrir le parcours
          </button>
        </div>

        {/* Pills */}
        <div
          className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-6 text-white/50 text-xs tracking-widest uppercase animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          {['18 trous', 'Practice', 'Club House', 'Restaurant'].map((item, i) => (
            <span key={item} className="flex items-center gap-2">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-accent/60" />}
              {item}
            </span>
          ))}
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollTo('#presentation')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors animate-fade-in"
          style={{ animationDelay: '0.8s' }}
          aria-label="Défiler vers le bas"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Découvrir</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
