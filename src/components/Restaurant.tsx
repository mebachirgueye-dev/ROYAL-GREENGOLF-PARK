import RevealSection from "./RevealSection";
import Button from "./Button";

const highlights = [
  "Cuisine raffinée signée par notre chef",
  "Produits frais et locavores, au fil des saisons",
  "Service au déjeuner comme au dîner",
  "Grande terrasse ouverte sur le parcours",
  "Vue panoramique sur le green et le plan d'eau",
];

export default function Restaurant() {
  return (
    <section id="restaurant" className="bg-sand-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          <RevealSection className="flex flex-col justify-center lg:col-span-5">
            <span className="h-px w-12 bg-gold-500" />
            <h2 className="mt-6 max-w-md font-display text-3xl font-medium leading-[1.15] text-pine-950 sm:text-4xl">
              Une table avec vue sur le green
            </h2>
            <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-pine-800/85">
              Après une partie ou simplement pour un déjeuner d&rsquo;affaires,
              notre restaurant offre un cadre rare pour prendre le temps.
            </p>

            <ul className="mt-8 flex flex-col gap-3.5">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.95rem] text-pine-900/90">
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gold-500" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="#contact" variant="primary">
                Découvrir le restaurant
              </Button>
              <Button href="#contact" variant="secondary">
                Voir le menu
              </Button>
            </div>
          </RevealSection>

          <RevealSection delay={120} className="relative lg:col-span-7 lg:pt-16">
            <img
              src="/images/clubhouse-lake.jpg"
              alt="Restaurant du club house avec terrasse donnant sur le plan d'eau et le parcours"
              className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]"
            />
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
