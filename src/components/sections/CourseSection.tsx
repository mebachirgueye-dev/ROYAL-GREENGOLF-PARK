import { useState } from 'react';
import { X } from 'lucide-react';
import { golfHoles, courseStats } from '@/data/mockData';
import { useInView, useCountUp, useScrollReveal } from '@/hooks/useAnimations';
import type { GolfHole } from '@/types';

function StatCounter({ value, label, suffix }: { value: number; label: string; suffix: string }) {
  const { ref, inView } = useInView(0.5);
  const count = useCountUp(value, 2000, inView);
  return (
    <div ref={ref} className="text-center">
      <div className="stat-number">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-xs text-muted-foreground tracking-widest uppercase mt-2 font-medium">{label}</div>
    </div>
  );
}

const difficultyColor: Record<GolfHole['difficulty'], string> = {
  Easy: 'text-green-600 bg-green-50 border-green-200',
  Moderate: 'text-yellow-700 bg-yellow-50 border-yellow-200',
  Difficult: 'text-orange-600 bg-orange-50 border-orange-200',
  Expert: 'text-red-600 bg-red-50 border-red-200',
};

const difficultyLabel: Record<GolfHole['difficulty'], string> = {
  Easy: 'Facile',
  Moderate: 'Modéré',
  Difficult: 'Difficile',
  Expert: 'Expert',
};

export default function CourseSection() {
  useScrollReveal();
  const [selected, setSelected] = useState<GolfHole | null>(null);

  return (
    <section id="parcours" className="py-20 md:py-32 bg-muted/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-label block mb-4">Le Parcours</span>
          <span className="gold-divider mx-auto mb-6 block" />
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            18 trous, un seul défi
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 reveal">
          {courseStats.map((s) => (
            <StatCounter key={s.label} value={s.value} label={s.label} suffix={s.suffix} />
          ))}
        </div>

        {/* Course Map */}
        <div className="reveal relative">
          <div className="relative rounded-xl overflow-hidden shadow-hover bg-primary/5 border border-border">
            {/* Map image */}
            <img
              src="https://miaoda-conversation-file.s3cdn.medo.dev/user-e97dto394z5s/app-e9as9j53ojk1/20260907/image_1788811132189.png"
              alt="Plan du parcours Royal Green Golf Park — 18 trous"
              className="w-full h-auto"
              style={{ maxHeight: '600px', objectFit: 'contain' }}
            />

            {/* Interactive hole markers */}
            {golfHoles.map((hole) => (
              <button
                key={hole.id}
                onClick={() => setSelected(selected?.id === hole.id ? null : hole)}
                className={`absolute w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] font-bold transition-all duration-200 hover:scale-125 z-10 ${
                  selected?.id === hole.id
                    ? 'bg-accent border-accent text-white scale-125 shadow-lg'
                    : 'bg-primary border-primary text-white hover:bg-accent hover:border-accent shadow-md'
                }`}
                style={{
                  left: `${hole.x}%`,
                  top: `${hole.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                aria-label={`Trou ${hole.number}`}
              >
                {hole.number}
              </button>
            ))}

            {/* Tooltip / Info card */}
            {selected && (
              <div
                className="absolute z-20 bg-white border border-border rounded-lg shadow-hover p-4 w-64 pointer-events-auto"
                style={{
                  left: `${Math.min(Math.max(selected.x, 20), 75)}%`,
                  top: `${Math.min(Math.max(selected.y - 18, 5), 75)}%`,
                  transform: 'translateX(-50%)',
                }}
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
                  aria-label="Fermer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                    #{selected.number}
                  </span>
                  <span
                    className={`text-[10px] font-semibold border rounded px-2 py-0.5 ${difficultyColor[selected.difficulty]}`}
                  >
                    {difficultyLabel[selected.difficulty]}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                  <div className="bg-muted rounded p-2 text-center">
                    <div className="font-bold text-foreground text-base">Par {selected.par}</div>
                    <div className="text-muted-foreground">Par</div>
                  </div>
                  <div className="bg-muted rounded p-2 text-center">
                    <div className="font-bold text-foreground text-base">{selected.distance}m</div>
                    <div className="text-muted-foreground">Distance</div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{selected.description}</p>
              </div>
            )}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-4 tracking-wide">
            Cliquez sur un numéro pour découvrir les détails du trou
          </p>
        </div>

        {/* Hole list — scrollable on mobile */}
        <div className="mt-12 reveal">
          <div className="flex gap-2 overflow-x-auto pb-3 md:grid md:grid-cols-9 md:gap-2">
            {golfHoles.map((hole) => (
              <button
                key={hole.id}
                onClick={() => {
                  setSelected(selected?.id === hole.id ? null : hole);
                  document.querySelector('#parcours')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`shrink-0 flex flex-col items-center gap-1 p-3 rounded border text-center transition-all duration-200 hover:-translate-y-0.5 min-w-[64px] ${
                  selected?.id === hole.id
                    ? 'bg-primary border-primary text-primary-foreground shadow-card'
                    : 'bg-white border-border text-foreground hover:border-primary hover:shadow-card'
                }`}
              >
                <span className="text-xs font-bold">T.{hole.number}</span>
                <span className="text-[10px] opacity-70">Par {hole.par}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
