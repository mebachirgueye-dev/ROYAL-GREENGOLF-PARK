import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { CalendarCheck, Loader2 } from "lucide-react";
import RevealSection from "./RevealSection";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import type { BookingFormState } from "../types";

const initialState: BookingFormState = {
  date: "",
  time: "",
  players: "2 joueurs",
  type: "Partie 18 trous",
  name: "",
  email: "",
  phone: "",
};

const inputClass =
  "w-full border border-pine-800/20 bg-sand-50 px-4 py-3 text-[0.95rem] text-pine-950 placeholder:text-pine-700/40 transition-colors duration-300 focus:border-gold-500 focus:outline-none";

const labelClass = "mb-2 block text-sm font-medium text-pine-800/90";

export default function Booking() {
  const [form, setForm] = useState<BookingFormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const handleChange = (
    field: keyof BookingFormState
  ) => (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulated availability check — no backend, per brief.
    window.setTimeout(() => setStatus("done"), 900);
  };

  const reset = () => {
    setForm(initialState);
    setStatus("idle");
  };

  return (
    <section id="reservation" className="bg-sand-100 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <RevealSection>
          <SectionHeading
            align="center"
            title="Réservez votre prochaine partie"
            subtitle="Renseignez vos préférences, nous confirmons la disponibilité sous 24h."
          />
        </RevealSection>

        <RevealSection delay={120} className="mt-12 border border-pine-800/10 bg-sand-50 p-6 sm:p-10">
          {status === "done" ? (
            <div className="flex flex-col items-center py-8 text-center">
              <CalendarCheck size={40} className="text-gold-500" />
              <h3 className="mt-5 font-display text-2xl text-pine-950">
                Votre demande a bien été enregistrée
              </h3>
              <p className="mt-3 max-w-md text-pine-800/80">
                Merci {form.name || ""}. Nous revenons vers vous par e-mail
                à {form.email || "l'adresse indiquée"} pour confirmer votre
                partie du {form.date || "jour choisi"}
                {form.time ? ` à ${form.time}` : ""} ({form.players},{" "}
                {form.type.toLowerCase()}).
              </p>
              <button
                type="button"
                onClick={reset}
                className="mt-8 text-sm font-medium text-pine-800 underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-600"
              >
                Faire une nouvelle réservation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="date">Date</label>
                <input
                  id="date"
                  type="date"
                  required
                  value={form.date}
                  onChange={handleChange("date")}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="time">Heure</label>
                <input
                  id="time"
                  type="time"
                  required
                  value={form.time}
                  onChange={handleChange("time")}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="players">Nombre de joueurs</label>
                <select
                  id="players"
                  value={form.players}
                  onChange={handleChange("players")}
                  className={inputClass}
                >
                  <option>1 joueur</option>
                  <option>2 joueurs</option>
                  <option>3 joueurs</option>
                  <option>4 joueurs</option>
                </select>
              </div>

              <div>
                <label className={labelClass} htmlFor="type">Type de réservation</label>
                <select
                  id="type"
                  value={form.type}
                  onChange={handleChange("type")}
                  className={inputClass}
                >
                  <option>Partie 18 trous</option>
                  <option>Practice</option>
                  <option>Initiation golf</option>
                  <option>Événement privé</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="name">Nom</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Votre nom complet"
                  value={form.name}
                  onChange={handleChange("name")}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="vous@exemple.com"
                  value={form.email}
                  onChange={handleChange("email")}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="phone">Téléphone</label>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="06 00 00 00 00"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  className={inputClass}
                />
              </div>

              <div className="mt-2 sm:col-span-2">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full sm:w-auto"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Vérification en cours&hellip;
                    </>
                  ) : (
                    "Vérifier les disponibilités"
                  )}
                </Button>
              </div>
            </form>
          )}
        </RevealSection>
      </div>
    </section>
  );
}
