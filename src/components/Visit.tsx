import { MapPin, Clock, Phone, Instagram } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const Visit = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="bezoek" className="relative bg-paper py-24 md:py-32 px-4 md:px-8">
      <div ref={ref} className="reveal max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Big address card */}
          <article className="col-span-12 md:col-span-7 bg-ink text-paper rounded-[2rem] p-8 md:p-12 min-h-[420px] flex flex-col justify-between relative overflow-hidden">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">07 / Bezoek</span>
              <h2 className="mt-5 font-display text-5xl md:text-7xl leading-[0.9] text-balance">
                Tot snel<br />
                <span className="italic font-light text-primary">aan de Langeweg</span>.
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              <div>
                <MapPin className="w-5 h-5 text-primary mb-2" />
                <div className="font-semibold">Langeweg 98</div>
                <div className="text-sm text-paper/60">Ooltgensplaat, Nederland</div>
              </div>
              <div>
                <Phone className="w-5 h-5 text-primary mb-2" />
                <div className="font-semibold">0187 639408</div>
                <div className="text-sm text-paper/60">Bestellen vóór 20:00</div>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
          </article>

          {/* Hours */}
          <article className="col-span-12 md:col-span-5 bg-primary text-ink rounded-[2rem] p-8 md:p-10 hover-lift">
            <Clock className="w-5 h-5 mb-3" />
            <h3 className="font-display text-2xl mb-5">Openingstijden</h3>
            <ul className="space-y-3 text-sm">
              {[
                ["Maandag", "Gesloten"],
                ["Dinsdag", "11:30 – 20:30"],
                ["Woensdag", "11:30 – 20:30"],
                ["Donderdag", "11:30 – 20:30"],
                ["Vrijdag", "11:30 – 20:30"],
                ["Zaterdag", "11:30 – 20:30"],
                ["Zondag", "11:30 – 20:30"],
              ].map(([day, hours]) => (
                <li key={day} className="flex justify-between border-b border-ink/15 pb-2">
                  <span>{day}</span>
                  <span className="font-semibold tabular-nums">{hours}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Map placeholder (CSS art) */}
          <article className="col-span-12 md:col-span-8 rounded-[2rem] overflow-hidden bg-paper-deep h-80 md:h-full min-h-[320px] relative bg-sack">
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary grid place-items-center mb-0 md:mb-3 animate-float-slow shadow-bento">
                  <MapPin className="w-6 h-6 text-ink" />
                </div>
                <div className="font-display text-2xl md:text-3xl text-ink">Langeweg 98, Ooltgensplaat</div>
                <a
                  href="https://maps.google.com/?q=Langeweg+98,+Ooltgensplaat"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm md:text-base text-ink/60 hover:text-ink underline underline-offset-4"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </article>

          {/* TIKTOK PROMO */}
          <article className="col-span-12 md:col-span-4 relative rounded-[2rem] overflow-hidden bg-secondary text-secondary-foreground p-8 min-h-[320px] flex flex-col justify-between hover-lift">
            <div className="flex items-center justify-between">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
              <span className="text-[11px] uppercase tracking-[0.2em] text-secondary-foreground/60 font-semibold">Ook op TikTok</span>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl text-balance leading-tight">
                Bekijk onze<br />
                <span className="text-primary italic font-light">snelle video's</span>
              </div>
              <p className="mt-3 text-sm text-secondary-foreground/70 text-pretty">
                Beleef de sfeer achter de schermen, zie hoe we die verse patat snijden en blijf op de hoogte.
              </p>
            </div>
            <a
              href="https://www.tiktok.com/@hettysversepatat"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-ink font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-primary/90 transition-colors w-fit"
            >
              Volg TikTok →
            </a>
          </article>


        </div>
      </div>
    </section>
  );
};

export default Visit;
