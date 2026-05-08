import { Star, Quote, Loader2 } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { useQuery } from "@tanstack/react-query";

const PLACE_ID = import.meta.env.VITE_GOOGLE_PLACE_ID || "ChIJ276P77F2xkcR-1o69W2G04Q";
const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const REVIEWS = [
  { name: "P. Post", text: "Hetty een begrip voor iedereen die langs de N59 richting Rotterdam of Zeeland rijd.", rating: 4, time: "6 maanden geleden" },
  { name: "Jeroen B.", text: "Ik vond de hut er goed schoon en verzorgd uitzien. En door de hoeveelheid mensen en personeel loopt het goed.", rating: 5, time: "1 maand geleden" },
  { name: "Anouk d.W.", text: "De moeite waard om een lekker patatje te eten met een snack erbij! Beter dan McDonalds", rating: 4, time: "2 maanden geleden" },
  { name: "M. Pook.", text: "Beste snackbar van de regio. Stukje omrijden voor ons, maar dit hebben we wel over voor een goede snack.", rating: 4, time: "1 week geleden" },
  { name: "A. Drimmel", text: "Frietjes zijn erg lekker. De moeite waard om er eens heen te gaan, de snacks zijn niet zo bijzonder.", rating: 3, time: "5 dagen geleden" },
];

const Reviews = () => {
  const ref = useReveal<HTMLDivElement>();

  const { data: reviews, isLoading, error } = useQuery({
    queryKey: ['google-reviews', PLACE_ID],
    queryFn: async () => {
      if (!API_KEY || API_KEY === "YOUR_API_KEY_HERE") {
        return REVIEWS; // Fallback to static reviews if no API key
      }

      // Note: In production, use a backend proxy to avoid CORS and protect API key.
      // This fetch might fail due to CORS if called directly from certain environments.
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${API_KEY}`
      );
      const data = await response.json();

      if (data.status !== "OK") {
        console.error("Google Places API error:", data.status, data.error_message);
        return REVIEWS;
      }

      return data.result.reviews.map((r: any) => ({
        name: r.author_name,
        text: r.text,
        rating: r.rating,
        time: r.relative_time_description,
      })) || REVIEWS;
    },
    enabled: !!PLACE_ID,
    staleTime: 1000 * 60 * 60, // Cache for 1 hour
  });

  const displayReviews = reviews || REVIEWS;

  return (
    <section className="relative bg-background py-24 md:py-32 px-4 md:px-8">
      <div ref={ref} className="reveal max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 mb-14 items-end">
          <div className="col-span-12 md:col-span-8">
            <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">04 / Stemmen uit de buurt</span>
            <h2 className="mt-4 font-display text-5xl md:text-7xl text-ink leading-[0.9] text-balance">
              Wat de <span className="italic font-light">stamgasten</span> zeggen<span className="text-primary">.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 flex md:justify-end">
            <div className="flex items-center gap-3 bg-paper rounded-2xl px-5 py-4">
              <div className="font-display text-3xl text-ink">4.3</div>
              <div>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <div className="text-xs text-ink/60 mt-0.5">2.200+ Google reviews</div>
              </div>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 grayscale opacity-50">
            <Loader2 className="w-8 h-8 animate-spin text-primary mb-4" />
            <p className="text-sm font-display uppercase tracking-widest">Reviews laden...</p>
          </div>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {displayReviews.map((r, i) => (
              <article
                key={i}
                className="break-inside-avoid mb-5 rounded-3xl border border-ink/10 bg-paper p-6 hover-lift"
              >
                <Quote className="w-7 h-7 text-primary mb-3" />
                <p className="text-ink/85 leading-relaxed text-pretty">"{r.text}"</p>
                <div className="mt-5 pt-4 border-t border-ink/10 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-ink text-sm">{r.name}</div>
                    <div className="text-xs text-ink/50">{r.time}</div>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: r.rating }).map((_, k) => (
                      <Star key={k} className="w-3.5 h-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Reviews;
