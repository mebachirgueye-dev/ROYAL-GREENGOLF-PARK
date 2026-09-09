import { Instagram, Facebook, Youtube } from "lucide-react";

const navLinks = [
  { label: "Le parcours", href: "#parcours" },
  { label: "Expérience", href: "#experience" },
  { label: "Restaurant", href: "#restaurant" },
  { label: "Événements", href: "#evenements" },
  { label: "Galerie", href: "#galerie" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
];

export default function Footer() {
  return (
    <footer className="bg-pine-950 pt-20 text-sand-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 border-b border-sand-50/10 pb-14 sm:grid-cols-3">
          <div>
            <a href="#accueil" className="font-display text-2xl text-sand-50">
              Royal Green
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand-200/70">
              Un golf park d&rsquo;exception, où le jeu, la nature et
              l&rsquo;art de recevoir se rencontrent.
            </p>
            <div className="mt-6 flex gap-4">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center border border-sand-50/20 text-sand-200 transition-colors duration-300 hover:border-gold-500 hover:text-gold-400"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-sand-50">Navigation</p>
            <ul className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-sand-200/75 transition-colors duration-300 hover:text-gold-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-sand-50">Informations</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-sand-200/75">
              <li>+33 1 39 00 00 00</li>
              <li>contact@royalgreengolfpark.fr</li>
              <li>Route du Domaine Vert, 78 000 Versailles</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-sand-200/50">
            &copy; {new Date().getFullYear()} Royal Green Golf Park. Tous droits réservés.
          </p>
          <p className="font-display text-sm italic text-sand-200/70">
            &laquo;&nbsp;The game. The nature. The experience.&nbsp;&raquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
