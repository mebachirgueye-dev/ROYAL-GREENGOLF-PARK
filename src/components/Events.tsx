import { Trophy, Heart, Presentation, Users2, PartyPopper } from "lucide-react";
import RevealSection from "./RevealSection";
import SectionHeading from "./SectionHeading";
import Button from "./Button";

const eventTypes = [
  { icon: Trophy, label: "Tournois" },
  { icon: Heart, label: "Mariages" },
  { icon: Presentation, label: "Séminaires" },
  { icon: Users2, label: "Team building" },
  { icon: PartyPopper, label: "Réceptions privées" },
];

export default function Events() {
  return (
    <section id="evenements" className="bg-sand-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <RevealSection>
          <SectionHeading
            align="center"
            title="Un cadre exceptionnel pour vos événements"
            subtitle="Du tournoi amical à la réception privée, le domaine se prête à chaque occasion."
          />
        </RevealSection>

        <RevealSection delay={100} className="mt-12 flex flex-wrap justify-center gap-3">
          {eventTypes.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 border border-pine-800/15 bg-sand-100 px-5 py-3"
            >
              <Icon size={17} className="text-gold-600" />
              <span className="text-sm font-medium text-pine-900">{label}</span>
            </div>
          ))}
        </RevealSection>

        <RevealSection delay={180} className="relative mt-14">
          <div className="relative aspect-[16/9] overflow-hidden sm:aspect-[21/9]">
            <img
              src="/images/clubhouse-lake.jpg"
              alt="Espace de réception du club house au bord de l'eau, propice aux événements privés"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pine-950/60 via-transparent to-transparent" />
          </div>

          <div className="relative mx-6 -mt-10 max-w-xs border border-gold-500/30 bg-sand-50 px-7 py-6 shadow-[0_25px_60px_-20px_rgba(10,23,18,0.35)] sm:absolute sm:bottom-8 sm:left-8 sm:mx-0 sm:mt-0">
            <p className="font-display text-3xl text-pine-950">150</p>
            <p className="mt-1 text-sm text-pine-700/80">Invités accueillis en simultané</p>
          </div>
        </RevealSection>

        <RevealSection delay={240} className="mt-10 flex justify-center">
          <Button href="#contact" variant="primary">
            Organiser un événement
          </Button>
        </RevealSection>
      </div>
    </section>
  );
}
