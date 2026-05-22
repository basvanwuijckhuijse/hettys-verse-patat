import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQ = () => {
  const ref = useReveal<HTMLDivElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      q: "Wat zijn jullie openingstijden?",
      a: "Wij zijn van dinsdag tot en met zondag geopend van 11:30 tot 20:30. Op maandag zijn we gesloten."
    },
    {
      q: "Hoe kan ik bestellen — en bezorgen jullie ook?",
      a: (
        <>
          Bestellen kan telefonisch via <a href="tel:+31187639408" className="text-primary hover:underline font-semibold">0187 639 408</a>; 
          geef daarbij door op welk tijdstip je je bestelling wilt afhalen, en wij zorgen dat alles vers en op tijd voor je klaarstaat. 
          Wij bezorgen niet — alle bestellingen worden bij ons in de zaak afgehaald tijdens openingstijden.
        </>
      ),
      textA: "Bestellen kan telefonisch via 0187 639 408; geef daarbij door op welk tijdstip je je bestelling wilt afhalen, en wij zorgen dat alles vers en op tijd voor je klaarstaat. Wij bezorgen niet — alle bestellingen worden bij ons in de zaak afgehaald tijdens openingstijden."
    },
    {
      q: "Waar zijn jullie gevestigd en is er parkeergelegenheid?",
      a: "Je vindt ons aan de Langeweg. We beschikken over een gigantische, gratis parkeerplaats direct bij de zaak, met voldoende ruimte voor auto's, campers en zelfs vrachtwagens. Even snel afhalen of rustig stoppen tijdens een rit — parkeren is bij ons nooit een probleem."
    },
    {
      q: "Welke betaalmethoden accepteren jullie?",
      a: "Je kunt bij ons betalen met pin, contant, Apple Pay en Google Wallet."
    },
    {
      q: "Hebben jullie vegetarische of glutenvrije opties?",
      a: "Ja, in onze menukaart vind je verschillende vegetarische en glutenvrije opties. Vraag gerust aan een van onze medewerkers welke snacks geschikt zijn voor jouw wensen."
    },
    {
      q: "Zijn honden welkom in de zaak?",
      a: "Ja, honden zijn van harte welkom bij ons in de zaak. Je trouwe viervoeter mag gewoon mee naar binnen terwijl je bestelt of een hapje eet — we zorgen graag dat ook je hond zich bij ons thuis voelt."
    },
    {
      q: "Waar kan ik de allergeneninformatie van jullie producten vinden?",
      a: "Voor een actueel overzicht van allergenen kun je het beste even aan een medewerker op locatie vragen. Zij helpen je graag met informatie over de ingrediënten van onze snacks."
    },
    {
      q: "Zijn jullie snacks halal, en in welke olie bakken jullie?",
      a: "Een deel van ons assortiment is halal. Let op: alle snacks worden in hetzelfde vet gebakken, dus we kunnen kruisbesmetting niet uitsluiten. Onze patat wordt apart gebakken in sojaolie, gescheiden van de snacks."
    },
    {
      q: "Worden jullie snacks en patat vers bereid?",
      a: "Onze patat wordt elke dag vers gesneden van de beste aardappelen — wij geloven in het echte ambacht. Voor onze snacks werken we met topkwaliteit merken, zodat je altijd verzekerd bent van smaak en kwaliteit."
    },
    {
      q: "Doen jullie bittergarnituur voor feesten en groepen om af te halen?",
      a: (
        <>
          Bij ons kun je grote porties bittergarnituur bestellen. Ook andere grote bestellingen voor feesten of groepen zijn mogelijk —
          neem hiervoor telefonisch contact met ons op via <a href="tel:+31187639408" className="text-primary hover:underline font-semibold">0187 639 408</a>,
          dan bespreken we de mogelijkheden.
        </>
      ),
      textA: "Bij ons kun je grote porties bittergarnituur bestellen. Ook andere grote bestellingen voor feesten of groepen zijn mogelijk — neem hiervoor telefonisch contact met ons op via 0187 639 408, dan bespreken we de mogelijkheden."
    },
    {
      q: "Zijn jullie ook open op zondag en feestdagen?",
      a: "Ja, op zondag zijn wij gewoon geopend van 11:30 tot 20:30. Op feestdagen zijn we in principe ook open, tenzij anders aangegeven. Houd onze Facebook-pagina in de gaten voor de actuele openingstijden rond feestdagen."
    }
  ];

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  // Split FAQs into two columns for desktop
  const leftColumn = faqs.slice(0, Math.ceil(faqs.length / 2));
  const rightColumn = faqs.slice(Math.ceil(faqs.length / 2));

  return (
    <section id="faq" className="bg-paper py-24 md:py-32 px-4 md:px-8 border-t border-ink/5">
      <div ref={ref} className="reveal max-w-[1400px] mx-auto">
        <div className="text-primary mb-6">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold">06 / Veelgestelde vragen</span>
        </div>
        
        <h2 className="font-display text-5xl md:text-6xl text-ink leading-[0.9] tracking-[-0.04em] mb-12">
          Vragen over <br />
          <span className="italic font-light pl-12 md:pl-20 text-primary">onze service<span className="text-ink">.</span></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-20">
          {/* Left Column */}
          <div className="flex flex-col">
            {leftColumn.map((faq, i) => (
              <article key={i} className="border-b border-ink/10 overflow-hidden">
                <button 
                  onClick={() => toggle(i)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <h3 className={cn(
                    "font-display text-lg md:text-xl text-ink transition-colors leading-tight pr-4",
                    openIndex === i ? "text-primary" : "group-hover:text-primary"
                  )}>
                    {faq.q}
                  </h3>
                  <ChevronDown className={cn(
                    "w-4 h-4 text-primary shrink-0 transition-transform duration-300",
                    openIndex === i ? "rotate-180" : ""
                  )} />
                </button>
                
                <div className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  openIndex === i ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                )}>
                  <div className="overflow-hidden">
                    <p className="text-ink/70 leading-relaxed text-pretty text-sm md:text-base">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            {rightColumn.map((faq, i) => {
              const actualIndex = i + leftColumn.length;
              return (
                <article key={actualIndex} className="border-b border-ink/10 overflow-hidden">
                  <button 
                    onClick={() => toggle(actualIndex)}
                    className="w-full py-6 flex items-center justify-between text-left group"
                  >
                    <h3 className={cn(
                      "font-display text-lg md:text-xl text-ink transition-colors leading-tight pr-4",
                      openIndex === actualIndex ? "text-primary" : "group-hover:text-primary"
                    )}>
                      {faq.q}
                    </h3>
                    <ChevronDown className={cn(
                      "w-4 h-4 text-primary shrink-0 transition-transform duration-300",
                      openIndex === actualIndex ? "rotate-180" : ""
                    )} />
                  </button>
                  
                  <div className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    openIndex === actualIndex ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}>
                    <div className="overflow-hidden">
                      <p className="text-ink/70 leading-relaxed text-pretty text-sm md:text-base">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
