import logo from "@/assets/Hettysversepatat-logo-footer.png";

const Footer = () => {
  return (
    <footer className="bg-ink text-paper px-4 md:px-8 py-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-6">
            <div className="mb-6">
              <img src={logo} alt="Hetty's Verse Patat Logo" className="h-20 md:h-28 w-auto object-contain" />
            </div>
            <p className="mt-4 text-paper/60 max-w-sm">Ambachtelijke patat & snacks. Ooltgensplaat, sinds 2012.</p>
          </div>
          <div className="col-span-6 md:col-span-2">
            <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Bezoek</div>
            <ul className="space-y-2 text-sm text-paper/75">
              <li>Langeweg 98</li>
              <li>Ooltgensplaat</li>
              <li>0187 639408</li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-2">
            <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Menu</div>
            <ul className="space-y-2 text-sm text-paper/75">
              <li><a href="#menu" className="hover:text-primary">Patat</a></li>
              <li><a href="#menu" className="hover:text-primary">Snacks</a></li>
              <li><a href="#menu" className="hover:text-primary">Broodjes</a></li>
              <li><a href="#menu" className="hover:text-primary">Specials</a></li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-2">
            <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Volg</div>
            <ul className="space-y-2 text-sm text-paper/75">
              <li><a href="https://www.facebook.com/p/Hettys-verse-patat-100057209839592/" target="_blank" rel="noreferrer" className="hover:text-primary">Facebook</a></li>
              <li><a href="mailto:hettywesdorp78@hotmail.com" className="hover:text-primary">Stuur een email</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-paper/10 flex flex-col md:flex-row gap-3 justify-between text-xs text-paper/50">
          <div>© {new Date().getFullYear()} Hetty's Verse Patat — Alle rechten voorbehouden.</div>
          <div>Met liefde bereid · Ontworpen door De Vormbrouwers</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
