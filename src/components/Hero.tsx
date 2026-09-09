import { ChevronDown } from "lucide-react";
import Button from "./Button";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-pine-950"
    >
      <img
        src="/images/hero-fairway.jpg"
        alt="Fairway verdoyant bordé d'arbres, baigné de lumière dorée en fin de journée"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Subtle dark overlay for text legibility, per brief */}
      <div className="absolute inset-0 bg-gradient-to-t from-pine-950 via-pine-950/55 to-pine-950/25" />
      <div className="absolute inset-0 bg-pine-950/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-40 sm:pb-20 lg:px-10 lg:pb-24">
        <p
          className="animate-fade-rise text-sm font-medium uppercase tracking-[0.25em] text-gold-400 opacity-0"
          style={{ animationDelay: "100ms" }}
        >
          Golf Park &amp; Country Club
        </p>

        <h1
          className="mt-5 max-w-3xl animate-fade-rise font-display text-5xl font-medium leading-[1.05] text-sand-50 opacity-0 sm:text-6xl md:text-7xl"
          style={{ animationDelay: "220ms" }}
        >
          Royal Green Golf Park
        </h1>

        <p
          className="mt-5 animate-fade-rise font-display text-xl italic text-sand-100 opacity-0 sm:text-2xl"
          style={{ animationDelay: "340ms" }}
        >
          Là où le golf rencontre l&rsquo;exception.
        </p>

        <p
          className="mt-6 max-w-xl animate-fade-rise text-base leading-relaxed text-sand-200/90 opacity-0 sm:text-lg"
          style={{ animationDelay: "460ms" }}
        >
          Découvrez un parcours d&rsquo;exception, un cadre naturel unique et
          une expérience pensée pour les passionnés de golf.
        </p>

        <div
          className="mt-10 flex animate-fade-rise flex-col gap-4 opacity-0 sm:flex-row"
          style={{ animationDelay: "580ms" }}
        >
          <Button href="#reservation" variant="primary">
            Réserver une partie
          </Button>
          <Button href="#parcours" variant="outline">
            Découvrir le parcours
          </Button>
        </div>

        <div
          className="mt-14 flex animate-fade-rise flex-wrap items-center gap-x-3 gap-y-2 border-t border-sand-50/20 pt-6 text-sm text-sand-200/80 opacity-0"
          style={{ animationDelay: "700ms" }}
        >
          <span>18 trous</span>
          <span className="text-gold-400">•</span>
          <span>Practice</span>
          <span className="text-gold-400">•</span>
          <span>Club House</span>
          <span className="text-gold-400">•</span>
          <span>Restaurant</span>
        </div>
      </div>

      <a
        href="#presentation"
        aria-label="Défiler vers le contenu"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 animate-scroll-hint text-sand-50/70 sm:block"
      >
        <ChevronDown size={28} strokeWidth={1.5} />
      </a>
    </section>
  );
}
