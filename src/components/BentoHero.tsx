import { Clock, MapPin, Facebook, Sparkles, ArrowUpRight } from "lucide-react";
import heroFries from "@/assets/hero-fries.jpg";

const BentoHero = () => {
  return (
    <section className="relative pt-28 md:pt-32 pb-10 px-4 md:px-8 bg-paper overflow-hidden">
      {/* Floating editorial label */}
      <div className="max-w-[1400px] mx-auto mb-6 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-ink/60">
          <Sparkles className="w-3.5 h-3.5 text-primary" /> Ooltgensplaat · Echte Hollandse Patat
        </span>
        <span className="hidden md:block text-xs uppercase tracking-[0.25em] text-ink/40">N° 01 — Editie 2026</span>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-12 grid-rows-[auto] gap-3 md:gap-4">
        {/* MAIN BENTO — large image with overlapping type */}
        <article className="col-span-12 md:col-span-8 row-span-2 relative rounded-[2rem] overflow-hidden bg-secondary aspect-[4/5] md:aspect-auto md:min-h-[640px] group">
          <img
            src={heroFries}
            alt="Verse, ambachtelijke patat in een papieren puntzak"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
            width={1080}
            height={1600}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/10 to-transparent" />

          {/* Overlapping editorial title */}
          <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <span className="px-3 py-1.5 rounded-full bg-background/90 backdrop-blur text-[11px] uppercase tracking-[0.2em] text-ink font-semibold">
                Vers · dagelijks gesneden
              </span>
            </div>

            <div className="text-secondary-foreground">
              <h1 className="font-display text-[15vw] md:text-[8.5vw] lg:text-[7.5rem] leading-[0.85] tracking-[-0.04em] text-balance">
                Hetty's<br />
                <span className="italic font-light text-primary">verse</span> patat<span className="text-primary">.</span>
              </h1>
              <p className="mt-6 max-w-md text-secondary-foreground/80 text-base md:text-lg leading-relaxed text-pretty">
                Lekkere verse patat en snacks. Voor jou geserveerd met een glimlach!
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#menu" className="inline-flex items-center gap-2 bg-primary text-ink font-semibold px-6 py-3.5 rounded-full hover:bg-primary/90 transition-colors">
                  Bekijk de menukaart <ArrowUpRight className="w-4 h-4" />
                </a>
                <a href="tel:0187639408" className="inline-flex items-center gap-2 text-secondary-foreground border border-secondary-foreground/30 px-6 py-3.5 rounded-full hover:bg-secondary-foreground/10 transition-colors">
                  Bestel direct
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* OPENING HOURS — golden box */}
        <article className="col-span-12 md:col-span-4 relative rounded-[2rem] overflow-hidden bg-primary text-ink p-8 min-h-[280px] flex flex-col justify-between hover-lift">
          <div className="flex items-center justify-between">
            <Clock className="w-6 h-6" strokeWidth={2.2} />
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold">Vandaag open</span>
          </div>
          <div>
            <div className="font-display text-5xl md:text-6xl leading-none">11:30 <span className="text-2xl align-middle italic font-light">t/m</span> 20:30</div>
            <ul className="mt-4 text-sm space-y-1 text-ink/75">
              <li className="flex justify-between"><span>Dinsdag — Zondag</span><span className="font-semibold text-ink">11:30 – 20:30</span></li>
              <li className="flex justify-between"><span>Maandag</span><span className="font-semibold text-ink">Gesloten</span></li>
            </ul>
          </div>
          <a
            href="https://maps.google.com/?q=Langeweg+98,+Ooltgensplaat"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold border-t border-ink/15 pt-4 hover:gap-3 transition-all"
          >
            <MapPin className="w-4 h-4" /> Langeweg 98, Ooltgensplaat · Route →
          </a>
        </article>

        {/* FACEBOOK PROMO */}
        <article className="col-span-12 md:col-span-4 relative rounded-[2rem] overflow-hidden bg-secondary text-secondary-foreground p-8 min-h-[280px] flex flex-col justify-between hover-lift">
          <div className="flex items-center justify-between">
            <Facebook className="w-6 h-6 text-primary" strokeWidth={2.2} />
            <span className="text-[11px] uppercase tracking-[0.2em] text-secondary-foreground/60">Volg ons</span>
          </div>
          <div>
            <div className="font-display text-3xl md:text-4xl text-balance leading-tight">
              Verse<br />
              <span className="text-primary italic font-light">updates</span> op Facebook
            </div>
            <p className="mt-3 text-sm text-secondary-foreground/70 text-pretty">
              Blijf op de hoogte van eventuele acties, bijzondere openingstijden en het laatste nieuws uit de keuken.
            </p>
          </div>
          <a
            href="https://www.facebook.com/p/Hettys-verse-patat-100057209839592/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-ink font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-primary/90 transition-colors w-fit"
          >
            Bekijk Facebook →
          </a>
        </article>
      </div>

      {/* Marquee strip */}
      <div className="mt-10 max-w-[1400px] mx-auto overflow-hidden border-y border-ink/10 py-5">
        <div className="flex marquee whitespace-nowrap gap-12 font-display text-2xl md:text-3xl text-ink/80">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              <span>Verse aardappel</span>
              <span className="text-primary">✦</span>
              <span className="italic font-light">Dagelijks gesneden</span>
              <span className="text-primary">✦</span>
              <span>Flakkeese trots</span>
              <span className="text-primary">✦</span>
              <span className="italic font-light">Sinds 2012</span>
              <span className="text-primary">✦</span>
              <span>Lekkere snacks</span>
              <span className="text-primary">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoHero;
