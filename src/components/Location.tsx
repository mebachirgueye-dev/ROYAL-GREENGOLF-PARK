import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import RevealSection from "./RevealSection";
import SectionHeading from "./SectionHeading";

const info = [
  { icon: MapPin, label: "Adresse", value: "Route du Domaine Vert, 78 000 Versailles" },
  { icon: Phone, label: "Téléphone", value: "+33 1 39 00 00 00" },
  { icon: Mail, label: "Email", value: "contact@royalgreengolfpark.fr" },
  { icon: Clock, label: "Horaires", value: "Ouvert tous les jours, 7h30 – 20h00" },
];

export default function Location() {
  return (
    <section id="contact" className="bg-sand-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <RevealSection>
          <SectionHeading
            title="Nous trouver"
            subtitle="À seulement 20 minutes du centre-ville, au cœur d'un écrin de verdure."
          />
        </RevealSection>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <RevealSection delay={100} className="lg:col-span-5">
            <dl className="flex flex-col divide-y divide-pine-800/10 border-y border-pine-800/10">
              {info.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 py-5">
                  <Icon size={19} className="mt-0.5 flex-shrink-0 text-gold-600" />
                  <div>
                    <dt className="text-sm text-pine-700/70">{label}</dt>
                    <dd className="mt-0.5 text-[0.95rem] font-medium text-pine-950">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-6 inline-flex items-center gap-2 bg-pine-950 px-5 py-3 text-sm font-medium text-sand-50">
              <Navigation size={16} className="text-gold-400" />
              À 20 minutes du centre-ville
            </div>
          </RevealSection>

          {/* Stylized map — an illustrative placeholder rather than a live map embed */}
          <RevealSection delay={180} className="lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-pine-800/10 bg-sand-200 sm:aspect-[16/10]">
              <div
                className="absolute inset-0 opacity-70"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, rgba(15,33,25,0.08) 0, rgba(15,33,25,0.08) 1px, transparent 1px, transparent 64px), repeating-linear-gradient(90deg, rgba(15,33,25,0.08) 0, rgba(15,33,25,0.08) 1px, transparent 1px, transparent 64px)",
                }}
              />
              <div className="absolute inset-x-0 top-1/3 h-3 -rotate-3 bg-sand-50" />
              <div className="absolute inset-y-0 left-1/2 w-3 rotate-6 bg-sand-50" />
              <div className="absolute left-[38%] top-[28%] h-24 w-32 -rotate-6 bg-moss-400/30" />
              <div className="absolute bottom-[15%] right-[20%] h-16 w-16 rounded-full bg-pine-600/20" />

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
                <div className="flex flex-col items-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500 shadow-[0_10px_25px_-5px_rgba(169,130,46,0.6)]">
                    <MapPin size={22} className="text-pine-950" fill="currentColor" />
                  </div>
                  <div className="mt-1 bg-pine-950 px-3 py-1 text-xs font-medium text-sand-50">
                    Royal Green Golf Park
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
