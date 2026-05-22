import careers from "@/assets/careers.png";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const Community = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="community" className="relative bg-secondary text-secondary-foreground py-24 md:py-36 px-4 md:px-8 overflow-hidden">
      <div ref={ref} className="reveal max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 md:gap-12 items-center">
          {/* Image side */}
          <div className="col-span-12 md:col-span-5 relative">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-bento">
              <img src={careers} alt="Verse patat wordt geschept in onze keuken" loading="lazy" width={1024} height={1280} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-4 -right-4 md:-right-6 bg-primary text-ink rounded-2xl p-4 w-32 rotate-3 shadow-bento">
              <Sparkles className="w-5 h-5 mb-2" />
              <div className="font-display text-xs uppercase tracking-wider">Join ons</div>
              <div className="text-[10px] mt-0.5 leading-tight">Word onderdeel van ons team!</div>
            </div>
          </div>

          {/* Text side */}
          <div className="col-span-12 md:col-span-7 md:pl-8">
            <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">05 / Vacatures</span>
            <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.9] tracking-[-0.04em] text-balance">
              Kom jij ons <span className="italic font-light text-primary">team</span> versterken?
            </h2>
            <p className="mt-6 text-secondary-foreground/75 text-lg leading-relaxed max-w-xl text-pretty">
              Wij zijn altijd op zoek naar enthousiaste aanpakkers die onze passie voor verse patat en kwaliteit delen.
              Of je nu achter de bakpan wilt staan of onze gasten met een glimlach wilt helpen, bij Hetty's kom je
              terecht in een gezellig, hecht en gedreven team.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <div className="font-display text-4xl text-primary">10+</div>
                <div className="text-xs text-secondary-foreground/60 mt-1">Gezellige collega's</div>
              </div>
              <div>
                <div className="font-display text-4xl text-primary">1994</div>
                <div className="text-xs text-secondary-foreground/60 mt-1">Jaar van oorsprong</div>
              </div>
              <div>
                <div className="font-display text-4xl text-primary">100%</div>
                <div className="text-xs text-secondary-foreground/60 mt-1">Passie</div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="mailto:hettywesdorp78@hotmail.com" className="inline-flex items-center gap-2 bg-primary text-ink font-semibold px-6 py-3 rounded-full text-sm hover:bg-primary/90 transition-colors">
                Solliciteer direct <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/p/Hettys-verse-patat-100057209839592/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-secondary-foreground border-b border-primary pb-1 hover:gap-3 transition-all text-sm">
                Volg ons op Facebook! <ArrowUpRight className="w-4 h-4 text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
