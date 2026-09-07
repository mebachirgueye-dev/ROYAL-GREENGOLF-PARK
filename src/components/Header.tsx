import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useHeaderScroll } from '@/hooks/useAnimations';

const navLinks = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Le parcours', href: '#parcours' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Restaurant', href: '#restaurant' },
  { label: 'Événements', href: '#evenements' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Contact', href: '#reservation' },
];

export default function Header() {
  const scrolled = useHeaderScroll(80);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close on resize
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo('#hero')}
            className="flex flex-col leading-none group"
          >
            <span
              className={`font-['Playfair_Display'] text-lg md:text-xl font-700 tracking-[0.15em] transition-colors duration-300 ${
                scrolled ? 'text-primary' : 'text-white'
              }`}
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              ROYAL GREEN
            </span>
            <span
              className={`text-[9px] tracking-[0.3em] uppercase font-medium transition-colors duration-300 ${
                scrolled ? 'text-gold' : 'text-white/70'
              }`}
            >
              GOLF PARK
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`text-[13px] font-medium tracking-wide transition-all duration-200 hover:opacity-100 relative group ${
                  scrolled ? 'text-foreground/70 hover:text-primary' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo('#reservation')}
              className={`hidden md:flex items-center gap-1.5 px-5 py-2.5 text-[13px] font-semibold tracking-wide rounded transition-all duration-300 ${
                scrolled
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                  : 'bg-white/10 border border-white/40 text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              Réserver maintenant
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded transition-colors ${
                scrolled ? 'text-foreground' : 'text-white'
              }`}
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />
        {/* Panel */}
        <nav
          className={`absolute top-0 right-0 bottom-0 w-72 bg-primary flex flex-col pt-20 pb-8 px-8 transition-transform duration-400 ease-out ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="mb-8">
            <span
              className="text-white/30 text-[10px] tracking-[0.25em] uppercase font-medium"
            >
              Navigation
            </span>
          </div>
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-left py-3 border-b border-white/10 text-white/80 hover:text-white text-base font-medium tracking-wide transition-all duration-200 hover:pl-2"
              style={{ transitionDelay: mobileOpen ? `${i * 50}ms` : '0ms' }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#reservation')}
            className="mt-8 w-full py-3.5 bg-accent text-white font-semibold text-sm tracking-wider rounded transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
          >
            Réserver maintenant
            <ChevronRight className="w-4 h-4" />
          </button>
        </nav>
      </div>
    </>
  );
}
