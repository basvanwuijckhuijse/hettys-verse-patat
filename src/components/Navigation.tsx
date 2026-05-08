import { useState, useEffect } from "react";
import { Menu, X, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    { label: "Menukaart", href: "#menu" },
    { label: "Ons verhaal", href: "#story" },
    { label: "Vacatures", href: "#community" },
    { label: "Bezoek", href: "#bezoek" },
  ];

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
        <ul className="hidden md:flex items-center gap-9 text-sm font-medium text-ink/80">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="hover:text-ink transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Location */}
        <a
          href="https://maps.google.com/?q=Langeweg+98,+Ooltgensplaat"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-ink/15 hover:bg-ink hover:text-paper transition-colors"
        >
          <MapPin className="w-4 h-4" /> Langeweg 98
        </a>

        {/* Mobile Toggle Button */}
        <button
          className={cn(
            "md:hidden p-2 rounded-full border z-[70] relative transition-all duration-300",
            "bg-background/50 backdrop-blur-sm border-ink/15"
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Sluit menu" : "Open menu"}
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

      </div>
    </>
  );
};

export default Navigation;
