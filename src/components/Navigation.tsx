import { useState, useEffect } from "react";
import { Menu, X, MapPin, Globe } from "lucide-react";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";
import { useLanguage, Language } from "@/context/LanguageContext";
import { translations } from "@/translations";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language].nav;

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuItems = [
    { label: t.menu, href: "#menu" },
    { label: t.story, href: "#story" },
    { label: t.vacancies, href: "#community" },
    { label: t.visit, href: "#bezoek" },
  ];

  const languages: Language[] = ["NL", "EN", "DE"];

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-[60] px-6 md:px-10 py-6 flex items-center justify-between font-sans">
        <a href="#" className="flex items-center gap-2 group">
          <img 
            src={logo} 
            alt="Hetty's Verse Patat Logo" 
            className="h-16 md:h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-105" 
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 lg:gap-9 text-sm font-medium text-ink/80 whitespace-nowrap">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="hover:text-ink transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Selector */}
          <div className="flex items-center gap-1 bg-ink/5 p-1 rounded-full border border-ink/10">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-bold transition-all",
                  language === lang 
                    ? "bg-ink text-paper shadow-sm" 
                    : "text-ink/40 hover:text-ink/70"
                )}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Location */}
          <a
            href="https://maps.google.com/?q=Langeweg+98,+Ooltgensplaat"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-ink/15 hover:bg-ink hover:text-paper transition-colors"
          >
            <MapPin className="w-4 h-4" /> {t.location}
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className={cn(
            "md:hidden p-2 rounded-full border z-[70] relative transition-all duration-300",
            "bg-background/50 backdrop-blur-sm border-ink/15"
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? t.close : t.open}
        >
          {isOpen ? <X className="w-6 h-6 text-ink" /> : <Menu className="w-6 h-6 text-ink" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-[50] transition-all duration-500 md:hidden flex flex-col justify-center px-6",
          isOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="space-y-12">
          <ul className="space-y-6">
            {menuItems.map((item, i) => (
              <li
                key={item.label}
                className={cn(
                  "transition-all duration-500",
                  isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-5xl text-ink active:text-primary transition-colors block"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Language & Location */}
          <div className={cn(
            "pt-12 border-t border-ink/10 flex flex-col gap-6 transition-all duration-500 delay-500",
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="flex items-center gap-4">
              <Globe className="w-5 h-5 text-primary" />
              <div className="flex gap-4">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setIsOpen(false);
                    }}
                    className={cn(
                      "text-xl font-display transition-colors",
                      language === lang ? "text-primary" : "text-ink/40"
                    )}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Langeweg+98,+Ooltgensplaat"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-ink/60"
            >
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-medium">{t.location}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
