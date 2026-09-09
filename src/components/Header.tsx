import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Le parcours", href: "#parcours" },
  { label: "Expérience", href: "#experience" },
  { label: "Restaurant", href: "#restaurant" },
  { label: "Événements", href: "#evenements" },
  { label: "Galerie", href: "#galerie" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const shellClass = scrolled || menuOpen
    ? "bg-sand-50/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(15,33,25,0.08)]"
    : "bg-transparent";

  const linkColor = scrolled || menuOpen ? "text-pine-900" : "text-sand-50";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-smooth ${shellClass}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a
          href="#accueil"
          className={`font-display text-xl tracking-wide ${linkColor}`}
        >
          Royal Green
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 hover:text-gold-500 ${linkColor}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#reservation"
            className="inline-flex items-center border border-current px-6 py-2.5 text-sm font-medium tracking-wide transition-colors duration-300 hover:bg-gold-500 hover:border-gold-500 hover:text-pine-950"
            style={{ color: scrolled || menuOpen ? "#0f2119" : "#f8f5ee" }}
          >
            Réserver maintenant
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className={`-mr-2 p-2 lg:hidden ${linkColor}`}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`grid overflow-hidden bg-sand-50 transition-[grid-template-rows] duration-500 ease-smooth lg:hidden ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col gap-1 px-6 pb-8 pt-2">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
                className={`border-b border-sand-200 py-4 text-lg font-display text-pine-900 transition-all duration-300 ${
                  menuOpen ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservation"
              onClick={() => setMenuOpen(false)}
              className="mt-6 inline-flex items-center justify-center bg-pine-800 px-6 py-3.5 text-sm font-medium text-sand-50"
            >
              Réserver maintenant
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
