import { Check } from "lucide-react";
import RevealSection from "./RevealSection";
import Button from "./Button";

const included = [
  "Initiation encadrée par un professionnel diplômé",
  "Matériel de golf fourni pour la séance",
  "Accompagnement personnalisé selon votre niveau",
  "Accès libre au practice après la séance",
];

export default function DiscoveryOffer() {
  return (
    <section className="relative overflow-hidden bg-pine-950 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:items-center lg:gap-10 lg:px-10">
        <RevealSection className="lg:col-span-6 lg:order-2">
          <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/11]">
            <img
              src="/images/bunker-sunset.jpg"
              alt="Bunkers de sable illuminés par la lumière dorée du soleil couchant"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-sand-50/10" />
          </div>
        </RevealSection>

        <RevealSection delay={120} className="lg:col-span-6 lg:order-1">
          <span className="h-px w-12 bg-gold-500" />
          <h2 className="mt-6 max-w-md font-display text-3xl font-medium leading-[1.15] text-sand-50 sm:text-4xl">
            Votre première expérience golf
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-sand-200/85">
            Découvrez le golf accompagné par nos professionnels et profitez
            d&rsquo;une expérience complète, pensée pour mettre les débutants
            en confiance dès le premier swing.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sand-100">
                <Check size={18} className="mt-0.5 flex-shrink-0 text-gold-400" />
                <span className="text-[0.95rem] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button href="#reservation" variant="primary" className="!bg-gold-500 !text-pine-950 hover:!bg-gold-400">
              Réserver mon initiation
            </Button>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
