import { useState } from "react";
import { Flame, Leaf, Coffee, Beer, Utensils, Droplets, Beef } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

type Item = { name: string; desc: string; price: string; tag?: string; tags?: string[] };
type Cat = { id: string; label: string; subtitle: string; items: Item[] };

const Menu = () => {
  const { language } = useLanguage();
  const t = translations[language].menu;
  
  // Localized categories with items
  const CATEGORIES: Cat[] = [
    {
      id: "patat",
      label: t.categories.patat,
      subtitle: t.subtitles.patat,
      items: language === "NL" ? [
        { name: "Patat klein", desc: "Portie voor 1 persoon", price: "€ 3,00" },
        { name: "Patat middel", desc: "Meest gekozen portie", price: "€ 3,50" },
        { name: "Patat groot", desc: "Voor de grote trek", price: "€ 4,00" },
        { name: "Gezinszak (2 pers.)", desc: "Zak verse patat voor twee", price: "€ 5,50" },
        { name: "Gezinszak (3 pers.)", desc: "Zak verse patat voor drie", price: "€ 7,50" },
        { name: "Gezinszak (4 pers.)", desc: "Zak verse patat voor vier", price: "€ 9,50" },
      ] : language === "EN" ? [
        { name: "Small Fries", desc: "Portion for 1 person", price: "€ 3.00" },
        { name: "Medium Fries", desc: "Most popular portion", price: "€ 3.50" },
        { name: "Large Fries", desc: "For the big appetite", price: "€ 4.00" },
        { name: "Family bag (2 pers.)", desc: "Bag of fresh fries for two", price: "€ 5.50" },
        { name: "Family bag (3 pers.)", desc: "Bag of fresh fries for three", price: "€ 7.50" },
        { name: "Family bag (4 pers.)", desc: "Bag of fresh fries for four", price: "€ 9.50" },
      ] : [
        { name: "Pommes klein", desc: "Portion für 1 Person", price: "€ 3,00" },
        { name: "Pommes mittel", desc: "Beliebteste Portion", price: "€ 3,50" },
        { name: "Pommes groß", desc: "Für den großen Hunger", price: "€ 4,00" },
        { name: "Familientüte (2 Pers.)", desc: "Tüte frische Pommes für zwei", price: "€ 5,50" },
        { name: "Familientüte (3 Pers.)", desc: "Tüte frische Pommes für drei", price: "€ 7,50" },
        { name: "Familientüte (4 Pers.)", desc: "Tüte frische Pommes für vier", price: "€ 9,50" },
      ],
    },
    {
      id: "snacks",
      label: t.categories.snacks,
      subtitle: t.subtitles.snacks,
      items: language === "NL" ? [
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
        { name: "Mexicano", desc: "Licht pittig", price: "€ 3,25" },
        { name: "Vlammetjes 6 st.", desc: "Lekker pittig", price: "€ 4,25", tag: "Pittig" },
      ] : language === "EN" ? [
        { name: "Frikandel*", desc: "The classic", price: "€ 2.30", tags: ["Meat", "Veggie"] },
        { name: "Frikandel special*", desc: "With curry, mayo and onion", price: "€ 3.30", tags: ["Meat", "Veggie"] },
        { name: "Croquette*", desc: "Beef croquette", price: "€ 2.30", tags: ["Meat", "Veggie"] },
        { name: "Cheese soufflé*", desc: "With real cheese", price: "€ 2.60", tags: ["Meat", "Veggie"] },
        { name: "Chicken corn*", desc: "Crispy chicken snack", price: "€ 2.70", tags: ["Meat", "Veggie"] },
        { name: "Vegetable croquette*", desc: "Full of vegetables", price: "€ 2.90", tags: ["Meat", "Veggie"] },
        { name: "Bamihap", desc: "Spiced noodles", price: "€ 2.80" },
        { name: "Meatball", desc: "From our own kitchen", price: "€ 3.50" },
        { name: "Bear claw", desc: "With onion on a stick", price: "€ 3.50" },
        { name: "Bitterballen 5 pcs.", desc: "Includes mustard", price: "€ 3.40" },
        { name: "Bratwurst", desc: "Nice and firm", price: "€ 3.50" },
        { name: "Mexicano", desc: "Lightly spicy", price: "€ 3.25" },
        { name: "Vlammetjes 6 pcs.", desc: "Nice and spicy", price: "€ 4.25", tag: "Spicy" },
      ] : [
        { name: "Frikandel*", desc: "Der Klassiker", price: "€ 2,30", tags: ["Fleisch", "Veggie"] },
        { name: "Frikandel spezial*", desc: "Mit Curry, Mayo und Zwiebeln", price: "€ 3,30", tags: ["Fleisch", "Veggie"] },
        { name: "Krokette*", desc: "Rindfleischkrokette", price: "€ 2,30", tags: ["Fleisch", "Veggie"] },
        { name: "Käsesoufflé*", desc: "Mit echtem Käse", price: "€ 2,60", tags: ["Fleisch", "Veggie"] },
        { name: "Chicken Corn*", desc: "Knuspriger Hähnchensnack", price: "€ 2,70", tags: ["Fleisch", "Veggie"] },
        { name: "Gemüsekrokette*", desc: "Voll mit Gemüse", price: "€ 2,90", tags: ["Fleisch", "Veggie"] },
        { name: "Bamihap", desc: "Würzige Nudeln", price: "€ 2,80" },
        { name: "Frikadelle", desc: "Aus eigener Küche", price: "€ 3,50" },
        { name: "Bärenklaue", desc: "Mit Zwiebel am Spieß", price: "€ 3,50" },
        { name: "Bitterballen 5 Stk.", desc: "Inklusive Senf", price: "€ 3,40" },
        { name: "Bratwurst", desc: "Schön herzhaft", price: "€ 3,50" },
        { name: "Mexicano", desc: "Leicht scharf", price: "€ 3,25" },
        { name: "Vlammetjes 6 Stk.", desc: "Schön scharf", price: "€ 4,25", tag: "Scharf" },
      ],
    },
    {
      id: "hamburgers",
      label: t.categories.hamburgers,
      subtitle: t.subtitles.hamburgers,
      items: language === "NL" ? [
        { name: "Br. Hamburger", desc: "Lekker broodje burger", price: "€ 4,00" },
        { name: "Br. Hamburger Speciaal", desc: "Met uien en saus", price: "€ 6,00" },
        { name: "Br. Cheeseburger", desc: "Met gesmolten kaas", price: "€ 6,00" },
        { name: "Br. Kipburger", desc: "Krokante kip", price: "€ 6,30", tags: ["Vlees", "Vega"] },
        { name: "Smokey Mountain", desc: "BBQ style specialiteit", price: "€ 8,00", tag: "Special" },
      ] : language === "EN" ? [
        { name: "Hamburger", desc: "Delicious burger on a bun", price: "€ 4.00" },
        { name: "Hamburger Special", desc: "With onions and sauce", price: "€ 6.00" },
        { name: "Cheeseburger", desc: "With melted cheese", price: "€ 6.00" },
        { name: "Chicken Burger", desc: "Crispy chicken", price: "€ 6.30", tags: ["Meat", "Veggie"] },
        { name: "Smokey Mountain", desc: "BBQ style specialty", price: "€ 8.00", tag: "Special" },
      ] : [
        { name: "Hamburger", desc: "Leckerer Burger im Brötchen", price: "€ 4,00" },
        { name: "Hamburger Spezial", desc: "Mit Zwiebeln und Sauce", price: "€ 6,00" },
        { name: "Cheeseburger", desc: "Mit geschmolzenem Käse", price: "€ 6,00" },
        { name: "Chickenburger", desc: "Knuspriges Hähnchen", price: "€ 6,30", tags: ["Fleisch", "Veggie"] },
        { name: "Smokey Mountain", desc: "BBQ-Style Spezialität", price: "€ 8,00", tag: "Spezial" },
      ],
    },
    {
      id: "schotels",
      label: t.categories.schotels,
      subtitle: t.subtitles.schotels,
      items: language === "NL" ? [
        { name: "Shoarma", desc: "Grote portie shoarma", price: "€ 15,00" },
        { name: "Schnitzel", desc: "Gepaneerde schnitzel", price: "€ 15,00" },
        { name: "Spareribs", desc: "Onze beroemde spareribs", price: "€ 22,50", tag: "Special" },
      ] : language === "EN" ? [
        { name: "Shawarma", desc: "Large portion of shawarma", price: "€ 15.00" },
        { name: "Schnitzel", desc: "Breaded schnitzel", price: "€ 15.00" },
        { name: "Spareribs", desc: "Our famous spareribs", price: "€ 22.50", tag: "Special" },
      ] : [
        { name: "Schawarma", desc: "Große Portion Schawarma", price: "€ 15,00" },
        { name: "Schnitzel", desc: "Paniertes Schnitzel", price: "€ 15,00" },
        { name: "Spareribs", desc: "Unsere berühmten Spareribs", price: "€ 22,50", tag: "Spezial" },
      ],
    },
    {
      id: "kinderbox",
      label: t.categories.kinderbox,
      subtitle: t.subtitles.kinderbox,
      items: language === "NL" ? [
        { name: "Kinderbox", desc: "Klein patatje, snack, limonade, mayo, appelmoes en verrassing", price: "€ 8,25", tag: "Kids" },
      ] : language === "EN" ? [
        { name: "Kids Box", desc: "Small fries, snack, lemonade, mayo, applesauce and a surprise", price: "€ 8.25", tag: "Kids" },
      ] : [
        { name: "Kinderbox", desc: "Kleine Pommes, Snack, Limonade, Mayo, Apfelmus und eine Überraschung", price: "€ 8,25", tag: "Kids" },
      ],
    },
    {
      id: "stokbrood",
      label: t.categories.stokbrood,
      subtitle: t.subtitles.stokbrood,
      items: language === "NL" ? [
        { name: "Kaas of ham", desc: "Klassiek belegd", price: "€ 5,00" },
        { name: "Kaas en ham", desc: "Dubbel belegd", price: "€ 5,50" },
        { name: "Ei", desc: "Met vers ei", price: "€ 5,50" },
        { name: "Gezond", desc: "Ham, kaas, ei en salade", price: "€ 7,50" },
        { name: "Bal gehakt", desc: "Met onze eigen bal", price: "€ 5,50" },
        { name: "Slaatje", desc: "Frisse toevoeging", price: "€ 3,50" },
        { name: "Carpaccio", desc: "Met truffelmayo en pitten", price: "€ 8,00" },
        { name: "Warme pikante kip", desc: "Lekker pittig gebakken", price: "€ 8,00", tag: "Pittig" },
        { name: "Brie (walnoten en honing)", desc: "Luxe belegd", price: "€ 7,50", tag: "Veggie" },
      ] : language === "EN" ? [
        { name: "Cheese or ham", desc: "Classic topping", price: "€ 5.00" },
        { name: "Cheese and ham", desc: "Double topping", price: "€ 5.50" },
        { name: "Egg", desc: "With fresh egg", price: "€ 5.50" },
        { name: "Healthy", desc: "Ham, cheese, egg and salad", price: "€ 7.50" },
        { name: "Meatball", desc: "With our own meatball", price: "€ 5.50" },
        { name: "Small salad", desc: "Fresh addition", price: "€ 3.50" },
        { name: "Carpaccio", desc: "With truffle mayo and seeds", price: "€ 8.00" },
        { name: "Warm spicy chicken", desc: "Nice and spicy baked", price: "€ 8.00", tag: "Spicy" },
        { name: "Brie (walnuts and honey)", desc: "Luxury topping", price: "€ 7.50", tag: "Veggie" },
      ] : [
        { name: "Käse oder Schinken", desc: "Klassisch belegt", price: "€ 5,00" },
        { name: "Käse und Schinken", desc: "Doppelt belegt", price: "€ 5,50" },
        { name: "Ei", desc: "Mit frischem Ei", price: "€ 5,50" },
        { name: "Gesund", desc: "Schinken, Käse, Ei und Salat", price: "€ 7,50" },
        { name: "Frikadelle", desc: "Mit unserer eigenen Frikadelle", price: "€ 5,50" },
        { name: "Kleiner Salat", desc: "Frische Ergänzung", price: "€ 3,50" },
        { name: "Carpaccio", desc: "Mit Trüffelmayo und Kernen", price: "€ 8,00" },
        { name: "Warmes scharfes Hähnchen", desc: "Schön scharf gebacken", price: "€ 8,00", tag: "Scharf" },
        { name: "Brie (Walnüsse und Honig)", desc: "Luxuriös belegt", price: "€ 7,50", tag: "Veggie" },
      ],
    },
    {
      id: "broodjes",
      label: t.categories.broodjes,
      subtitle: t.subtitles.broodjes,
      items: language === "NL" ? [
        { name: "Pita shoarma", desc: "Inclusief knoflooksaus", price: "€ 8,00" },
      ] : language === "EN" ? [
        { name: "Pita shawarma", desc: "Includes garlic sauce", price: "€ 8.00" },
      ] : [
        { name: "Pita Schawarma", desc: "Inklusive Knoblauchsauce", price: "€ 8,00" },
      ],
    },
    {
      id: "uitsmijters",
      label: t.categories.uitsmijters,
      subtitle: t.subtitles.uitsmijters,
      items: language === "NL" ? [
        { name: "Uitsmijter", desc: "Drie gebakken eieren", price: "€ 7,00" },
        { name: "Uitsmijter ham of kaas", desc: "Naar keuze belegd", price: "€ 7,50" },
        { name: "Uitsmijter ham en kaas", desc: "Zowel ham als kaas", price: "€ 8,00" },
      ] : language === "EN" ? [
        { name: "Fried eggs", desc: "Three fried eggs", price: "€ 7.00" },
        { name: "Fried eggs ham or cheese", desc: "Topped with your choice", price: "€ 7.50" },
        { name: "Fried eggs ham and cheese", desc: "Both ham and cheese", price: "€ 8.00" },
      ] : [
        { name: "Strammer Max", desc: "Drei Spiegeleier", price: "€ 7,00" },
        { name: "Strammer Max Schinken oder Käse", desc: "Nach Wahl belegt", price: "€ 7,50" },
        { name: "Strammer Max Schinken und Käse", desc: "Sowohl Schinken als auch Käse", price: "€ 8,00" },
      ],
    },
    {
      id: "tostis",
      label: t.categories.tostis,
      subtitle: t.subtitles.tostis,
      items: language === "NL" ? [
        { name: "Tosti kaas of ham", desc: "Klassiek gegrild", price: "€ 4,50" },
        { name: "Tosti kaas en ham", desc: "De klassieke combinatie", price: "€ 5,00" },
      ] : language === "EN" ? [
        { name: "Toastie cheese or ham", desc: "Classic grilled", price: "€ 4.50" },
        { name: "Toastie cheese and ham", desc: "The classic combination", price: "€ 5.00" },
      ] : [
        { name: "Tosti Käse oder Schinken", desc: "Klassisch gegrillt", price: "€ 4,50" },
        { name: "Tosti Käse und Schinken", desc: "Die klassische Kombination", price: "€ 5,00" },
      ],
    },
    {
      id: "sauzen",
      label: t.categories.sauzen,
      subtitle: t.subtitles.sauzen,
      items: language === "NL" ? [
        { name: "Portie saus", desc: "Mayo, curry, ketchup, pindasaus, piccalilly, joppiesaus, knoflooksaus, chilisaus", price: "€ 0,70" },
        { name: "Mayo-pinda", desc: "De beroemde combinatie", price: "€ 1,40" },
        { name: "Speciaal", desc: "Mayo, curry en verse ui", price: "€ 1,40" },
        { name: "Grote beker saus", desc: "Om mee naar huis te nemen", price: "€ 2,50" },
      ] : language === "EN" ? [
        { name: "Portion of sauce", desc: "Mayo, curry, ketchup, peanut sauce, piccalilli, joppie sauce, garlic sauce, chili sauce", price: "€ 0.70" },
        { name: "Mayo-peanut", desc: "The famous combination", price: "€ 1.40" },
        { name: "Special", desc: "Mayo, curry and fresh onion", price: "€ 1.40" },
        { name: "Large cup of sauce", desc: "To take home", price: "€ 2.50" },
      ] : [
        { name: "Portion Sauce", desc: "Mayo, Curry, Ketchup, Erdnusssauce, Piccalilly, Joppiesauce, Knoblauchsauce, Chilisauce", price: "€ 0,70" },
        { name: "Mayo-Erdnuss", desc: "Die berühmte Kombination", price: "€ 1,40" },
        { name: "Spezial", desc: "Mayo, Curry und frische Zwiebeln", price: "€ 1,40" },
        { name: "Großer Becher Sauce", desc: "Zum Mitnehmen", price: "€ 2,50" },
      ],
    },
    {
      id: "dranken",
      label: t.categories.dranken,
      subtitle: t.subtitles.dranken,
      items: language === "NL" ? [
        { name: "Cola, Cola Zero", desc: "Fris en sprankelend", price: "€ 3,10" },
        { name: "Sinas, Cassis, Sprite", desc: "Vruchtenfrisdranken", price: "€ 3,10" },
        { name: "Bitterlemon, AA Drink", desc: "Verfrissend", price: "€ 2,50" },
        { name: "Spa Rood, Spa Blauw", desc: "Puur water", price: "€ 3,10" },
        { name: "Fuze Tea", desc: "Diverse smaken", price: "€ 2,95" },
        { name: "Energydrank", desc: "Voor een extra boost", price: "€ 3,25" },
        { name: "Chocomel, Fristi", desc: "Lekker als afsluiter", price: "€ 3,10" },
        { name: "Appelsap", desc: "Puur sap", price: "€ 3,10" },
      ] : language === "EN" ? [
        { name: "Cola, Cola Zero", desc: "Fresh and sparkling", price: "€ 3.10" },
        { name: "Orange, Cassis, Sprite", desc: "Fruit soft drinks", price: "€ 3.10" },
        { name: "Bitter lemon, AA Drink", desc: "Refreshing", price: "€ 2.50" },
        { name: "Sparkling water, Still water", desc: "Pure water", price: "€ 3.10" },
        { name: "Fuze Tea", desc: "Various flavors", price: "€ 2.95" },
        { name: "Energy drink", desc: "For an extra boost", price: "€ 3.25" },
        { name: "Chocolate milk, Fristi", desc: "Nice to finish", price: "€ 3.10" },
        { name: "Apple juice", desc: "Pure juice", price: "€ 3.10" },
      ] : [
        { name: "Cola, Cola Zero", desc: "Frisch und spritzig", price: "€ 3,10" },
        { name: "Fanta, Cassis, Sprite", desc: "Fruchtlimonaden", price: "€ 3,10" },
        { name: "Bitter Lemon, AA Drink", desc: "Erfrischend", price: "€ 2,50" },
        { name: "Mineralwasser, Stilles Wasser", desc: "Reines Wasser", price: "€ 3,10" },
        { name: "Fuze Tea", desc: "Verschiedene Geschmacksrichtungen", price: "€ 2,95" },
        { name: "Energydrink", desc: "Für den extra Kick", price: "€ 3,25" },
        { name: "Schokomilch, Fristi", desc: "Schön zum Abschluss", price: "€ 3,10" },
        { name: "Apfelsaft", desc: "Reiner Saft", price: "€ 3,10" },
      ],
    },
    {
      id: "alcohol",
      label: t.categories.alcohol,
      subtitle: t.subtitles.alcohol,
      items: language === "NL" ? [
        { name: "Biertje, Radler", desc: "Koud van de tap of fles", price: "€ 3,50", tag: "Alcohol" },
        { name: "Witte huiswijn", desc: "Per glas geserveerd", price: "€ 4,00", tag: "Alcohol" },
        { name: "Rode huiswijn", desc: "Per glas geserveerd", price: "€ 4,00", tag: "Alcohol" },
      ] : language === "EN" ? [
        { name: "Beer, Radler", desc: "Cold from tap or bottle", price: "€ 3.50", tag: "Alcohol" },
        { name: "White house wine", desc: "Served per glass", price: "€ 4.00", tag: "Alcohol" },
        { name: "Red house wine", desc: "Served per glass", price: "€ 4.00", tag: "Alcohol" },
      ] : [
        { name: "Bier, Radler", desc: "Kalt vom Fass oder aus der Flasche", price: "€ 3,50", tag: "Alkohol" },
        { name: "Weißer Hauswein", desc: "Pro Glas serviert", price: "€ 4,00", tag: "Alkohol" },
        { name: "Roter Hauswein", desc: "Pro Glas serviert", price: "€ 4,00", tag: "Alkohol" },
      ],
    },
    {
      id: "warmedranken",
      label: t.categories.warmedranken,
      subtitle: t.subtitles.warmedranken,
      items: language === "NL" ? [
        { name: "Koffie of thee", desc: "Lekker bakkie", price: "€ 3,20" },
        { name: "Cappuccino", desc: "Met melkschuim", price: "€ 3,50" },
        { name: "Latte macchiato", desc: "Luxe koffie", price: "€ 3,70" },
      ] : language === "EN" ? [
        { name: "Coffee or tea", desc: "Nice cup", price: "€ 3.20" },
        { name: "Cappuccino", desc: "With milk foam", price: "€ 3.50" },
        { name: "Latte macchiato", desc: "Luxury coffee", price: "€ 3.70" },
      ] : [
        { name: "Kaffee oder Tee", desc: "Leckere Tasse", price: "€ 3,20" },
        { name: "Cappuccino", desc: "Mit Milchschaum", price: "€ 3,50" },
        { name: "Latte Macchiato", desc: "Luxuskaffee", price: "€ 3,70" },
      ],
    },
  ];

  const [active, setActive] = useState(CATEGORIES[0].id);
  const cat = CATEGORIES.find((c) => c.id === active) || CATEGORIES[0];
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <section id="menu" className="relative bg-background py-24 md:py-32 px-4 md:px-8 font-sans">
      <div ref={revealRef} className="reveal max-w-[1400px] mx-auto">
        {/* Editorial header — asymmetric */}
        <div className="grid grid-cols-12 gap-6 mb-12 md:mb-16 items-end">
          <div className="col-span-12 md:col-span-7">
            <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">{t.number}</span>
            <h2 className="mt-4 font-display text-6xl md:text-8xl text-ink leading-[0.9] text-balance">
              {t.title_top}<br />
              <span className="italic font-light">{t.title_italic}</span> {t.title_bottom}
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <p className="text-ink/70 text-lg leading-relaxed text-pretty">
              {t.desc}
            </p>
          </div>
        </div>

        {/* Tabs — scrollable on mobile */}
        <div className="overflow-x-auto pb-4 mb-10 -mx-4 px-4 scrollbar-hide">
          <div className="flex flex-nowrap items-center gap-2 border-b border-ink/10 pb-4 min-w-max">
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
            {t.allergenen} <br />
            {t.pindasaus}
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
