import RevealSection from "./RevealSection";
import Button from "./Button";

const features = [
  "18 trous dessinés au cœur d'un domaine boisé",
  "Parcours entretenu quotidiennement par nos équipes",
  "Practice couvert et zone d'entraînement courte distance",
  "Putting green attenant au club house",
  "Vestiaires et espace de rangement du matériel",
  "Club house ouvert toute l'année",
];

export default function CoursePresentation() {
  return (
    <section id="presentation" className="relative overflow-hidden bg-sand-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          {/* Image block — offset to the left and overlapping the row below on large screens, for an asymmetric magazine feel */}
          <RevealSection className="relative lg:col-span-7 lg:pb-20">
            <div className="relative">
              <img
                src="/images/course-aerial.jpg"
                alt="Vue aérienne du parcours de Royal Green Golf Park entouré d'arbres matures"
                className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]"
              />
              <div className="absolute -bottom-8 -right-4 hidden w-56 border border-gold-500/40 bg-sand-50 px-6 py-5 shadow-[0_20px_50px_-20px_rgba(10,23,18,0.35)] sm:-right-8 sm:block">
                <p className="font-display text-3xl text-pine-900">72</p>
                <p className="mt-1 text-sm text-pine-700/80">Par du parcours</p>
              </div>
            </div>
          </RevealSection>

          {/* Text block */}
          <RevealSection
            delay={120}
            className="flex flex-col justify-center lg:col-span-5"
          >
            <span className="h-px w-12 bg-gold-500" />
            <h2 className="mt-6 font-display text-3xl font-medium leading-[1.15] text-pine-950 sm:text-4xl">
              Un parcours pensé pour l&rsquo;excellence
            </h2>
            <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-pine-800/85">
              Chaque détail du domaine a été conçu pour révéler le meilleur du
              jeu, dans un cadre où la nature reprend ses droits entre deux
              coups.
            </p>

            <ul className="mt-8 flex flex-col gap-3.5">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-[0.95rem] text-pine-900/90"
                >
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gold-500" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button href="#parcours" variant="primary">
                Explorer le parcours
              </Button>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
