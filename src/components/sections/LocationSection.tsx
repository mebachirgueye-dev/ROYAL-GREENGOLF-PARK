import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useAnimations';

const hours = [
  { day: 'Lundi — Vendredi', time: '07h00 – 20h00' },
  { day: 'Samedi', time: '06h30 – 21h00' },
  { day: 'Dimanche', time: '07h00 – 19h00' },
];

const contactInfo = [
  {
    icon: MapPin,
    label: 'Adresse',
    value: 'Route du Green, 75016 Paris',
    sub: 'À 20 minutes du centre-ville',
    href: undefined,
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+33 (0)1 23 45 67 89',
    sub: 'Du lundi au dimanche',
    href: 'tel:+33123456789',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@royalgreen.fr',
    sub: 'Réponse sous 24h',
    href: 'mailto:contact@royalgreen.fr',
  },
];

export default function LocationSection() {
  useScrollReveal();

  return (
    <section id="contact" className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-label block mb-4">Localisation</span>
          <span className="gold-divider mx-auto mb-6 block" />
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nous trouver
          </h2>
          <p className="text-muted-foreground mt-4 text-sm">
            À 20 minutes du centre-ville, dans un écrin de verdure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Map */}
          <div className="reveal-left">
            <div className="relative aspect-video md:aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-card bg-muted">
              {/* Stylized map simulation */}
              <div
                className="w-full h-full"
                style={{
                  background: 'linear-gradient(135deg, hsl(155 30% 88%) 0%, hsl(100 20% 82%) 50%, hsl(40 25% 85%) 100%)',
                }}
              >
                {/* Roads */}
                <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 400 300">
                  <line x1="0" y1="150" x2="400" y2="150" stroke="white" strokeWidth="8" />
                  <line x1="200" y1="0" x2="200" y2="300" stroke="white" strokeWidth="6" />
                  <line x1="50" y1="0" x2="350" y2="300" stroke="white" strokeWidth="4" />
                  <line x1="0" y1="80" x2="400" y2="220" stroke="white" strokeWidth="3" />
                  <rect x="100" y="60" width="80" height="50" fill="hsl(155 30% 75%)" rx="4" />
                  <rect x="220" y="70" width="60" height="40" fill="hsl(155 30% 75%)" rx="4" />
                  <rect x="60" y="160" width="90" height="60" fill="hsl(155 30% 75%)" rx="4" />
                  <rect x="250" y="170" width="70" height="45" fill="hsl(155 30% 75%)" rx="4" />
                </svg>

                {/* Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-10">
                  <div className="flex flex-col items-center">
                    <div className="bg-primary text-primary-foreground px-3 py-1.5 rounded-lg text-xs font-semibold shadow-lg whitespace-nowrap mb-1">
                      🏌️ Royal Green Golf Park
                    </div>
                    <div className="w-3 h-3 bg-primary rounded-full shadow-md" />
                    <div className="w-px h-4 bg-primary" />
                  </div>
                </div>

                {/* Distance badge */}
                <div className="absolute top-4 left-4 bg-white/90 border border-border rounded px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm">
                  📍 20 min du centre
                </div>
              </div>
            </div>

            {/* Google Maps link */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs text-primary font-medium hover:text-accent transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" />
              Ouvrir dans Google Maps
            </a>
          </div>

          {/* Contact info + hours */}
          <div className="reveal-right space-y-8">
            {/* Contact info */}
            <div className="space-y-5">
              {contactInfo.map(({ icon: Icon, label, value, sub, href }) => (
                <div key={label} className="flex gap-4 p-4 bg-muted/50 border border-border rounded-lg hover:border-primary/30 transition-colors">
                  <div className="w-9 h-9 bg-primary/10 rounded flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold tracking-wider uppercase text-muted-foreground mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a href={href} className="text-sm font-medium text-foreground hover:text-primary transition-colors block truncate">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{value}</p>
                    )}
                    {sub && <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Hours */}
            <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-semibold tracking-wider uppercase text-primary">
                  Horaires d'ouverture
                </h3>
              </div>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center gap-4 text-sm">
                    <span className="text-muted-foreground">{h.day}</span>
                    <span className="font-medium text-foreground shrink-0">{h.time}</span>
                  </div>
                ))}
                <div className="pt-3 border-t border-border text-xs text-muted-foreground">
                  Restaurant ouvert le midi et le soir — réservation conseillée
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
