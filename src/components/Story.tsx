import origin from "@/assets/chapter1-origin.jpg";
import building from "@/assets/chapter2-building.jpg";
import { useReveal } from "@/hooks/use-reveal";

const Story = () => {
  const r1 = useReveal<HTMLDivElement>();
  const r2 = useReveal<HTMLDivElement>();
  const r3 = useReveal<HTMLDivElement>();

  return (
    <section id="story" className="relative bg-paper py-24 md:py-36 px-4 md:px-8 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Eyebrow + title */}
        <div ref={r1} className="reveal grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 md:col-span-5">
            <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">03 / Herkomst</span>
          </div>
          <h2 className="col-span-12 md:col-span-12 font-display text-6xl md:text-[9rem] text-ink leading-[0.85] tracking-[-0.04em] text-balance">
            Onze geschiedenis<br />
            <span className="italic font-light pl-12 md:pl-40">van kar tot cafetaria<span className="text-primary">.</span></span>
          </h2>
        </div>

        {/* Asymmetric image + text composition */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-32 md:mb-48 relative">
          <div ref={r2} className="reveal col-span-12 md:col-span-7 relative">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-soft">
              <img src={origin} alt="Historische krantenaankondiging van de opening in 1994" loading="lazy" width={1280} height={1024} className="w-full h-full object-cover" />
            </div>
            <span className="absolute -top-4 -left-2 md:-left-6 bg-primary text-ink font-display text-sm px-4 py-2 rounded-full -rotate-3 shadow-soft">
              Hoofdstuk 01
            </span>
          </div>

          {/* Overlapping text card */}
          <div className="col-span-12 md:col-span-6 md:col-start-7 md:-mt-16 md:ml-[-6%] relative z-10">
            <div className="bg-background rounded-[2rem] p-8 md:p-12 shadow-bento border border-ink/5">
              <div className="font-display text-7xl text-primary leading-none mb-3">01</div>
              <h3 className="font-display text-3xl md:text-4xl text-ink leading-tight mb-4 text-balance">
                Het begon allemaal <span className="italic font-light">in 1994</span>.
              </h3>
              <p className="text-ink/70 leading-relaxed text-pretty">
                Onze passie voor patat is niet over één nacht ijs gegaan; het begon allemaal op 8 oktober 1994.
                Op die dag opende de inmiddels bekende patatkar voor het eerst zijn luiken in Den Bommel.
                Wat begon als een bescheiden kraam, is na decennia van hard werken en toewijding uitgegroeid tot het
                hedendaagse cafetaria van Hetty Wesdorp. Een plek waar we u, vele jaren later, nog altijd met hetzelfde
                plezier en trots serveren.
              </p>
            </div>
          </div>
        </div>

        {/* Reverse composition */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 relative">
          <div className="col-span-12 md:col-span-6 order-2 md:order-1 md:mt-24 relative z-10">
            <div className="bg-secondary text-secondary-foreground rounded-[2rem] p-8 md:p-12 shadow-bento">
              <div className="font-display text-7xl text-primary leading-none mb-3">02</div>
              <h3 className="font-display text-3xl md:text-4xl leading-tight mb-4 text-balance">
                Een nieuw hoofdstuk <span className="italic font-light">aan de Langeweg</span>.
              </h3>
              <p className="text-secondary-foreground/75 leading-relaxed text-pretty">
                In 2013 sloegen we een nieuwe weg in met de opening van ons moderne cafetaria aan de Langeweg 98 in Ooltgensplaat. 
                Dit pand gaf ons de ruimte om de passie voor verse patat naar een hoger niveau te tillen. Een plek waar het 
                ambacht van toen samenkomt met de gastvrijheid van nu — nog altijd op die vertrouwde locatie.
              </p>
              <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                <span className="w-8 h-px bg-primary" /> Ambacht boven snelheid
              </div>
            </div>
          </div>

          <div ref={r3} className="reveal col-span-12 md:col-span-7 md:col-start-6 order-1 md:order-2 relative md:-ml-[6%]">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-soft">
              <img src={building} alt="Het moderne cafetaria van Hetty's Verse Patat in Ooltgensplaat" loading="lazy" width={1280} height={960} className="w-full h-full object-cover" />
            </div>
            <span className="absolute -bottom-4 right-4 bg-primary text-ink font-display text-sm px-4 py-2 rounded-full rotate-2 shadow-soft">
              Hoofdstuk 02
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
