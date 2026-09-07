import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[hsl(155,35%,10%)] text-white/70">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <h3
                className="text-2xl font-bold text-white tracking-[0.15em] mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                ROYAL GREEN
              </h3>
              <p className="text-[10px] tracking-[0.3em] uppercase text-accent">GOLF PARK</p>
            </div>
            <p className="text-sm leading-relaxed text-white/50 mb-6">
              Une expérience de golf d'exception dans un cadre naturel unique.
            </p>
            <p
              className="text-sm italic text-white/40"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              "The game. The nature. The experience."
            </p>
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 border border-white/20 rounded flex items-center justify-center text-white/50 hover:text-white hover:border-white/60 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 border border-white/20 rounded flex items-center justify-center text-white/50 hover:text-white hover:border-white/60 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 border border-white/20 rounded flex items-center justify-center text-white/50 hover:text-white hover:border-white/60 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Le Parcours', href: '#parcours' },
                { label: 'Expérience', href: '#experience' },
                { label: 'Restaurant', href: '#restaurant' },
                { label: 'Événements', href: '#evenements' },
                { label: 'Galerie', href: '#galerie' },
                { label: 'Réservation', href: '#reservation' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6">
              Horaires
            </h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li className="flex justify-between gap-4">
                <span>Lun — Ven</span>
                <span className="text-white/70">07h00 – 20h00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Samedi</span>
                <span className="text-white/70">06h30 – 21h00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Dimanche</span>
                <span className="text-white/70">07h00 – 19h00</span>
              </li>
              <li className="pt-3 text-xs text-white/30">
                Restaurant ouvert midi & soir
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Route du Green, 75016 Paris<br />— 20 min du centre-ville</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <a href="tel:+33123456789" className="hover:text-white transition-colors">
                  +33 (0)1 23 45 67 89
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <a href="mailto:contact@royalgreen.fr" className="hover:text-white transition-colors">
                  contact@royalgreen.fr
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <span>© 2026 Royal Green Golf Park. Tous droits réservés.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white/60 transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
