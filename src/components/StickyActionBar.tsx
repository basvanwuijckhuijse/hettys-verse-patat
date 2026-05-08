import { Phone, Navigation } from "lucide-react";

const StickyActionBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 p-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] bg-background/85 backdrop-blur-lg border-t border-ink/10">
      <div className="grid grid-cols-2 gap-2">
        <a
          href="tel:0187639408"
          className="inline-flex items-center justify-center gap-2 bg-primary text-ink font-semibold py-3.5 rounded-2xl active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4" /> Bel om te bestellen
        </a>
        <a
          href="https://maps.google.com/?q=Langeweg+98"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-ink text-paper font-semibold py-3.5 rounded-2xl active:scale-95 transition-transform"
        >
          <Navigation className="w-4 h-4" /> Route
        </a>
      </div>
    </div>
  );
};

export default StickyActionBar;
