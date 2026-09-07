import { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { reservationTypes } from '@/data/mockData';
import { useScrollReveal } from '@/hooks/useAnimations';
import type { ReservationForm } from '@/types';

const today = new Date().toISOString().split('T')[0];

export default function ReservationSection() {
  useScrollReveal();

  const [form, setForm] = useState<ReservationForm>({
    date: '',
    time: '',
    players: '2',
    type: '',
    name: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState<Partial<ReservationForm>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<ReservationForm> = {};
    if (!form.date) newErrors.date = 'Date requise';
    else if (form.date < today) newErrors.date = 'La date ne peut pas être dans le passé';
    if (!form.time) newErrors.time = 'Heure requise';
    if (!form.players) newErrors.players = 'Nombre de joueurs requis';
    if (!form.type) newErrors.type = 'Type de réservation requis';
    if (!form.name.trim()) newErrors.name = 'Nom requis';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Email invalide';
    if (!form.phone.match(/^[\d\s\+\-\(\)]{8,}$/)) newErrors.phone = 'Téléphone invalide';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = (field: keyof ReservationForm) =>
    `w-full px-4 py-3 text-sm border rounded bg-white text-foreground placeholder-muted-foreground transition-colors ${
      errors[field]
        ? 'border-destructive focus:border-destructive'
        : 'border-border focus:border-primary'
    }`;

  return (
    <section id="reservation" className="py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="section-label block mb-4">Réservation</span>
          <span className="gold-divider mx-auto mb-6 block" />
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Réservez votre
            <br />
            <em className="font-normal text-primary/70">prochaine partie</em>
          </h2>
          <p className="text-muted-foreground mt-4 text-sm max-w-md mx-auto">
            Remplissez le formulaire et nous vous confirmons votre réservation sous 24h.
          </p>
        </div>

        {submitted ? (
          <div className="reveal bg-white border border-border rounded-xl p-12 text-center shadow-card">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h3
              className="text-2xl font-semibold text-foreground mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Demande envoyée !
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto mb-8">
              Votre demande a bien été prise en compte. Notre équipe vous contactera
              dans les 24h pour confirmer votre réservation.
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm({ date: '', time: '', players: '2', type: '', name: '', email: '', phone: '' }); }}
              className="px-6 py-3 border border-primary text-primary text-sm font-semibold rounded hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Nouvelle réservation
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="reveal bg-white border border-border rounded-xl p-8 md:p-10 shadow-card"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Date */}
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">
                  Date *
                </label>
                <input
                  type="date"
                  min={today}
                  value={form.date}
                  onChange={(e) => { setForm({ ...form, date: e.target.value }); setErrors({ ...errors, date: undefined }); }}
                  className={inputClass('date')}
                />
                {errors.date && <p className="text-destructive text-xs mt-1">{errors.date}</p>}
              </div>

              {/* Heure */}
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">
                  Heure *
                </label>
                <select
                  value={form.time}
                  onChange={(e) => { setForm({ ...form, time: e.target.value }); setErrors({ ...errors, time: undefined }); }}
                  className={inputClass('time')}
                >
                  <option value="">Choisir une heure</option>
                  {['07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '13:00', '14:00', '14:30', '15:00', '15:30', '16:00'].map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                {errors.time && <p className="text-destructive text-xs mt-1">{errors.time}</p>}
              </div>

              {/* Players */}
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">
                  Nombre de joueurs *
                </label>
                <select
                  value={form.players}
                  onChange={(e) => setForm({ ...form, players: e.target.value })}
                  className={inputClass('players')}
                >
                  {['1', '2', '3', '4'].map((n) => (
                    <option key={n} value={n}>{n} joueur{+n > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              {/* Type */}
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">
                  Type de réservation *
                </label>
                <select
                  value={form.type}
                  onChange={(e) => { setForm({ ...form, type: e.target.value }); setErrors({ ...errors, type: undefined }); }}
                  className={inputClass('type')}
                >
                  <option value="">Choisir un type</option>
                  {reservationTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                {errors.type && <p className="text-destructive text-xs mt-1">{errors.type}</p>}
              </div>

              {/* Name */}
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  placeholder="Jean Dupont"
                  value={form.name}
                  onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: undefined }); }}
                  className={inputClass('name')}
                />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="jean.dupont@email.com"
                  value={form.email}
                  onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: undefined }); }}
                  className={inputClass('email')}
                />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  placeholder="+33 6 12 34 56 78"
                  value={form.phone}
                  onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: undefined }); }}
                  className={inputClass('phone')}
                />
                {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-8 w-full py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-wider rounded transition-all duration-300 hover:bg-primary/90 hover:-translate-y-0.5 shadow-card hover:shadow-hover disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Vérification en cours...
                </>
              ) : (
                'Vérifier les disponibilités'
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
