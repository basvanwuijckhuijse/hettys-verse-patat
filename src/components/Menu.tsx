import { useState } from "react";
import { Flame, Leaf, Coffee, Beer, Utensils, Droplets, Beef } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

type Item = { name: string; desc: string; price: string; tag?: string; tags?: string[] };
type Cat = { id: string; label: string; subtitle: string; items: Item[] };

const CATEGORIES: Cat[] = [
  {
    id: "patat",
    label: "Patat",
    subtitle: "Onze trots: vers gesneden en goudbruin",
    items: [
      { name: "Patat klein", desc: "Portie voor 1 persoon", price: "€ 3,00" },
      { name: "Patat middel", desc: "Meest gekozen portie", price: "€ 3,50" },
      { name: "Patat groot", desc: "Voor de grote trek", price: "€ 4,00" },
      { name: "Gezinszak (2 pers.)", desc: "Zak verse patat voor twee", price: "€ 5,50" },
      { name: "Gezinszak (3 pers.)", desc: "Zak verse patat voor drie", price: "€ 7,50" },
      { name: "Gezinszak (4 pers.)", desc: "Zak verse patat voor vier", price: "€ 9,50" },
    ],
  },
  {
    id: "snacks",
    label: "Snacks",
    subtitle: "Snacks met een * ook in vega verkrijgbaar (+0,20)",
    items: [
      { name: "Frikandel*", desc: "De klassieker", price: "€ 2,30", tags: ["Vlees", "Vega"] },
      { name: "Frikandel speciaal*", desc: "Met curry, mayo en ui", price: "€ 3,30", tags: ["Vlees", "Vega"] },
      { name: "Kroket*", desc: "Rundvleeskroket", price: "€ 2,30", tags: ["Vlees", "Vega"] },
      { name: "Kaassoufflé*", desc: "Met echte kaas", price: "€ 2,60", tags: ["Vlees", "Vega"] },
      { name: "Kipcorn*", desc: "Krokante kipsnack", price: "€ 2,70", tags: ["Vlees", "Vega"] },
      { name: "Groente kroket*", desc: "Vol met groenten", price: "€ 2,90", tags: ["Vlees", "Vega"] },
      { name: "Bamihap", desc: "Kruidige bami", price: "€ 2,80" },
      { name: "Bal gehakt", desc: "Uit eigen keuken", price: "€ 3,50" },
      { name: "Bereklauw", desc: "Met ui aan een stokje", price: "€ 3,50" },
      { name: "Bitterballen 5 st.", desc: "Inclusief mosterd", price: "€ 3,40" },
      { name: "Braadworst", desc: "Lekker stevig", price: "€ 3,50" },
      { name: "Frikandel grof", desc: "Extra bite", price: "€ 2,90" },
      { name: "Goulash kroket", desc: "Rijkgevuld", price: "€ 2,90" },
      { name: "Halve kip", desc: "Heerlijk mals", price: "€ 7,75" },
      { name: "Hamburger", desc: "Losse hamburger", price: "€ 3,30" },
      { name: "Ham/kaassoufflé", desc: "Dubbele smaak", price: "€ 2,70" },
      { name: "Kipnuggets 6 st.", desc: "Met saus naar keuze", price: "€ 3,70" },
      { name: "Knakworst", desc: "Altijd lekker", price: "€ 3,00" },
      { name: "Kwekkeboom", desc: "De luxe kroket", price: "€ 3,00" },
      { name: "Loempia", desc: "Groot formaat", price: "€ 5,50" },
      { name: "Loempia speciaal", desc: "Rijkgevuld", price: "€ 7,50" },
      { name: "Mexicano", desc: "Licht pittig", price: "€ 3,25" },
      { name: "Minisnacks 8 st.", desc: "Mix van snacks", price: "€ 4,40" },
      { name: "Nasihap", desc: "Lekker pittig", price: "€ 2,80" },
      { name: "Picanto", desc: "Lange pittige snack", price: "€ 3,25" },
      { name: "Saté", desc: "Met pindasaus", price: "€ 7,50" },
      { name: "Satékroket", desc: "Voor de liefhebber", price: "€ 2,90" },
      { name: "Shoarmarol", desc: "Met shoarma vulling", price: "€ 3,50" },
      { name: "Smulrol", desc: "Kruidige vulling", price: "€ 3,50" },
      { name: "Sitostick", desc: "Bladerdeeg met vlees", price: "€ 3,70" },
      { name: "Schnitzel", desc: "Groot en krokant", price: "€ 7,50" },
      { name: "Trio", desc: "Drie verschillende hapjes", price: "€ 3,50" },
      { name: "Viandel", desc: "Frikandel in een jasje", price: "€ 2,90" },
      { name: "Vlammetjes 6 st.", desc: "Lekker pittig", price: "€ 4,25", tag: "Pittig" },
      { name: "Willempie", desc: "De bekende snack", price: "€ 3,00" },
    ],
  },
  {
    id: "hamburgers",
    label: "Hamburgers",
    subtitle: "Sappige burgers op een broodje",
    items: [
      { name: "Br. Hamburger", desc: "Lekker broodje burger", price: "€ 4,00" },
      { name: "Br. Hamburger Speciaal", desc: "Met uien en saus", price: "€ 6,00" },
      { name: "Br. Cheeseburger", desc: "Met gesmolten kaas", price: "€ 6,00" },
      { name: "Br. Kipburger", desc: "Krokante kip", price: "€ 6,30", tags: ["Vlees", "Vega"] },
      { name: "Smokey Mountain", desc: "BBQ style specialiteit", price: "€ 8,00", tag: "Special" },
      { name: "Spicy Vega", desc: "Pittige vegetarische burger", price: "€ 8,00", tag: "Vega" },
      { name: "Chicken Crunchy", desc: "Extra krokante kipburger", price: "€ 8,00" },
    ],
  },
  {
    id: "schotels",
    label: "Schotels",
    subtitle: "Geserveerd met frites en salade",
    items: [
      { name: "Shoarma", desc: "Grote portie shoarma", price: "€ 15,00" },
      { name: "Schnitzel", desc: "Gepaneerde schnitzel", price: "€ 15,00" },
      { name: "Hamburger", desc: "Br. hamburger", price: "€ 11,50" },
      { name: "Hamburger speciaal", desc: "Br. hamburger incl. extra garnering en gebakken ui", price: "€ 13,50" },
      { name: "Cheeseburger", desc: "Hambuger speciaal met kaas", price: "€ 14,00" },
      { name: "Kipburger", desc: "Kipburger op schotel", price: "€ 14,00", tags: ["Vlees", "Vega"] },
      { name: "Halve kip", desc: "Malse halve kip", price: "€ 15,00" },
      { name: "Saté", desc: "Malse saté", price: "€ 15,00" },
      { name: "Loempia speciaal", desc: "Grote gevulde loempia met gebakken eitje en pindasaus", price: "€ 14,50" },
      { name: "Spareribs", desc: "Onze beroemde spareribs", price: "€ 22,50", tag: "Special" },
      { name: "Smokey mountain", desc: "Burger schotel special", price: "€ 15,00" },
      { name: "Crunchy chicken", desc: "Kipburger schotel special", price: "€ 15,00" },
      { name: "Spicy vega", desc: "Vegetarische burger schotel", price: "€ 15,00", tag: "Veggie" },
    ],
  },
  {
    id: "kinderbox",
    label: "Kinderbox",
    subtitle: "Speciaal voor de kleintjes",
    items: [
      { name: "Kinderbox", desc: "Klein patatje, snack, limonade, mayo, appelmoes en verrassing", price: "€ 8,25", tag: "Kids" },
    ],
  },
  {
    id: "stokbrood",
    label: "Stokbrood",
    subtitle: "Ook op zacht broodje mogelijk",
    items: [
      { name: "Kaas of ham", desc: "Klassiek belegd", price: "€ 5,00" },
      { name: "Kaas en ham", desc: "Dubbel belegd", price: "€ 5,50" },
      { name: "Ei", desc: "Met vers ei", price: "€ 5,50" },
      { name: "Gezond", desc: "Ham, kaas, ei en salade", price: "€ 7,50" },
      { name: "Bal gehakt", desc: "Met onze eigen bal", price: "€ 5,50" },
      { name: "Slaatje", desc: "Frisse toevoeging", price: "€ 3,50" },
      { name: "Carpaccio", desc: "Met truffelmayo en pitten", price: "€ 8,00" },
      { name: "Warme pikante kip", desc: "Lekker pittig gebakken", price: "€ 8,00", tag: "Pittig" },
      { name: "Brie (walnoten en honing)", desc: "Luxe belegd", price: "€ 7,50", tag: "Veggie" },
    ],
  },
  {
    id: "broodjes",
    label: "Broodjes",
    subtitle: "Lekker belegd",
    items: [
      { name: "Pita shoarma", desc: "Inclusief knoflooksaus", price: "€ 8,00" },
    ],
  },
  {
    id: "uitsmijters",
    label: "Uitsmijters",
    subtitle: "Keuze uit wit of bruin brood",
    items: [
      { name: "Uitsmijter", desc: "Drie gebakken eieren", price: "€ 7,00" },
      { name: "Uitsmijter ham of kaas", desc: "Naar keuze belegd", price: "€ 7,50" },
      { name: "Uitsmijter ham en kaas", desc: "Zowel ham als kaas", price: "€ 8,00" },
    ],
  },
  {
    id: "tostis",
    label: "Tosti's",
    subtitle: "Keuze uit wit of bruin brood",
    items: [
      { name: "Tosti kaas of ham", desc: "Klassiek gegrild", price: "€ 4,50" },
      { name: "Tosti kaas en ham", desc: "De klassieke combinatie", price: "€ 5,00" },
    ],
  },
  {
    id: "sauzen",
    label: "Sauzen",
    subtitle: "Maak je bestelling compleet",
    items: [
      { name: "Portie saus", desc: "Mayo, curry, ketchup, pindasaus, piccalilly, joppiesaus, knoflooksaus, chilisaus", price: "€ 0,70" },
      { name: "Mayo-pinda", desc: "De beroemde combinatie", price: "€ 1,40" },
      { name: "Speciaal", desc: "Mayo, curry en verse ui", price: "€ 1,40" },
      { name: "Grote beker saus", desc: "Om mee naar huis te nemen", price: "€ 2,50" },
    ],
  },
  {
    id: "dranken",
    label: "Dranken",
    subtitle: "Koud geserveerd (Excl. statiegeld)",
    items: [
      { name: "Cola, Cola Zero", desc: "Fris en sprankelend", price: "€ 3,10" },
      { name: "Sinas, Cassis, Sprite", desc: "Vruchtenfrisdranken", price: "€ 3,10" },
      { name: "Bitterlemon, AA Drink", desc: "Verfrissend", price: "€ 2,50" },
      { name: "Spa Rood, Spa Blauw", desc: "Puur water", price: "€ 3,10" },
      { name: "Fuze Tea", desc: "Diverse smaken", price: "€ 2,95" },
      { name: "Energydrank", desc: "Voor een extra boost", price: "€ 3,25" },
      { name: "Chocomel, Fristi", desc: "Lekker als afsluiter", price: "€ 3,10" },
      { name: "Appelsap", desc: "Puur sap", price: "€ 3,10" },
    ],
  },
  {
    id: "alcohol",
    label: "Alcoholisch",
    subtitle: "Geniet verantwoord",
    items: [
      { name: "Biertje, Radler", desc: "Koud van de tap of fles", price: "€ 3,50", tag: "Alcohol" },
      { name: "Witte huiswijn", desc: "Per glas geserveerd", price: "€ 4,00", tag: "Alcohol" },
      { name: "Rode huiswijn", desc: "Per glas geserveerd", price: "€ 4,00", tag: "Alcohol" },
    ],
  },
  {
    id: "warmedranken",
    label: "Warme dranken",
    subtitle: "Vers gezet",
    items: [
      { name: "Koffie of thee", desc: "Lekker bakkie", price: "€ 3,20" },
      { name: "Cappuccino", desc: "Met melkschuim", price: "€ 3,50" },
      { name: "Latte macchiato", desc: "Luxe koffie", price: "€ 3,70" },
    ],
  },
];

const Menu = () => {
  const [active, setActive] = useState(CATEGORIES[0].id);
  const cat = CATEGORIES.find((c) => c.id === active)!;
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="menu" className="relative bg-background py-24 md:py-32 px-4 md:px-8 font-sans">
      <div ref={ref} className="reveal max-w-[1400px] mx-auto">
        {/* Editorial header — asymmetric */}
        <div className="grid grid-cols-12 gap-6 mb-12 md:mb-16 items-end">
          <div className="col-span-12 md:col-span-7">
            <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">02 / Menukaart</span>
            <h2 className="mt-4 font-display text-6xl md:text-8xl text-ink leading-[0.9] text-balance">
              Wat je<br />
              <span className="italic font-light">vandaag</span> proeft<span className="text-primary">.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <p className="text-ink/70 text-lg leading-relaxed text-pretty">
              Ons volledige menu, exact zoals in de winkel. Vers bereid en geserveerd met trots.
            </p>
          </div>
        </div>

        {/* Tabs — scrollable on mobile */}
        <div className="overflow-x-auto pb-4 mb-10 -mx-4 px-4 scrollbar-hide">
          <div className="flex flex-nowrap md:flex-wrap items-center gap-2 border-b border-ink/10 pb-4 min-w-max md:min-w-0">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`relative px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all whitespace-nowrap ${active === c.id ? "bg-ink text-paper" : "text-ink/60 hover:text-ink hover:bg-ink/5"
                  }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Subtitle feedback */}
        <div className="mb-8 flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.2em] text-ink/40 font-semibold">{cat.subtitle}</span>
        </div>

        {/* Items grid — magazine style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
          {cat.items.map((item, idx) => (
            <div
              key={item.name}
              className="menu-item-hover group flex items-start gap-4 px-4 py-4 rounded-2xl border-b border-ink/8 cursor-default"
            >
              <span className="font-display text-sm text-ink/30 mt-1.5 w-8 tabular-nums">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <div className="flex items-baseline gap-3">
                  <h3 className="font-display text-lg md:text-xl text-ink tracking-tight">{item.name}</h3>
                  {(item.tags || (item.tag ? [item.tag] : [])).map((t, i) => (
                    <span key={i} className={cn(
                      "inline-flex items-center gap-1 text-[8px] uppercase tracking-[0.12em] font-bold px-2 py-0.5 rounded-full",
                      t === "Veggie" || t === "Vega" || t === "Vega optie" ? "bg-green-100 text-green-800" :
                        t === "Pittig" ? "bg-red-100 text-red-800" :
                          t === "Vlees" ? "bg-orange-100 text-orange-800" :
                            "bg-primary/20 text-ink"
                    )}>
                      {t === "Veggie" || t === "Vega" || t === "Vega optie" ? <Leaf className="w-2.5 h-2.5" /> :
                        t === "Pittig" ? <Flame className="w-2.5 h-2.5" /> :
                          t === "Alcohol" ? <Beer className="w-2.5 h-2.5" /> :
                            t === "Kids" ? <Utensils className="w-2.5 h-2.5" /> :
                              t === "Vlees" ? <Beef className="w-2.5 h-2.5" /> :
                                null}
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-0.5 text-sm text-ink/60 leading-relaxed">{item.desc}</p>
              </div>
              <div className="font-display text-lg text-ink tabular-nums">{item.price}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-ink/50 leading-relaxed uppercase tracking-widest">
            Allergenen op aanvraag. <br />
            Vraag ons team naar de huisgemaakte pindasaus — daar zijn we extra trots op!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;

// Helper function
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
