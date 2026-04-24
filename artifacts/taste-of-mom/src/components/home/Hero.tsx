import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Heart, Star, UtensilsCrossed, ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const floatingEmojis = [
  { emoji: "🍛", top: "10%", left: "8%", delay: "0s", size: "text-4xl" },
  { emoji: "🫓", top: "20%", right: "6%", delay: "1.5s", size: "text-3xl" },
  { emoji: "🌿", top: "60%", left: "4%", delay: "3s", size: "text-2xl" },
  { emoji: "⭐", top: "75%", right: "8%", delay: "0.8s", size: "text-3xl" },
  { emoji: "❤️", top: "45%", right: "4%", delay: "2.2s", size: "text-2xl" },
  { emoji: "🫘", top: "85%", left: "7%", delay: "1s", size: "text-3xl" },
];

export function Hero() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative flex items-center justify-center overflow-hidden py-17.5">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-200/40 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/4 -right-24 w-80 h-80 bg-amber-200/50 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-green-100/60 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(140 40% 24%) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Floating food emojis */}
      {floatingEmojis.map((e, i) => (
        <span
          key={i}
          className={`absolute ${e.size} opacity-20 select-none pointer-events-none animate-float`}
          style={{
            top: e.top,
            left: "left" in e ? e.left : undefined,
            right: "right" in e ? e.right : undefined,
            animationDelay: e.delay,
          }}
        >
          {e.emoji}
        </span>
      ))}

      <div className="container-fluid">
        <div
          className={`flex flex-col md:flex-row gap-5 justify-around relative z-10 text-center transition-all duration-1000 ease-out ${
            heroVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <div>
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 rounded-full px-5 py-2">
                <Heart className="w-3 h-3 fill-current" /> Delhi's Favourite
                Home Kitchen
              </span>
            </div>
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-linear-to-br from-amber-400 to-green-600 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity scale-150" />
                <img
                  src="/logo.png"
                  alt="Taste of Mom's Hand"
                  data-testid="img-hero-logo"
                  className="relative w-52 h-52 md:w-90 md:h-90 object-full rounded-full shadow-2xl border-4 border-white/60 animate-float"
                  style={{ animationDuration: "7s" }}
                />
              </div>
            </div>
          </div>
          <div>
            <h1
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-5"
              data-testid="heading-hero"
            >
              <span className="text-foreground">Taste of</span>
              <br />
              <span className="shimmer-text italic">Mom's Hand</span>
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed"
              data-testid="text-hero-subtitle"
            >
              Freshly prepared home-cooked meals delivered with love — because
              every meal should feel like home.
            </p>
            <div className="flex items-center justify-center gap-1.5 mb-10">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-amber-400 text-amber-400"
                />
              ))}
              <span className="ml-2 text-sm font-semibold text-muted-foreground">
                4.9 · 500+ happy customers
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-hero-order"
                className="group inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-9 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-white shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Order on WhatsApp
              </a>
              <Link
                href="/menu"
                data-testid="link-hero-menu"
                className="group inline-flex items-center gap-2.5 border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1"
              >
                <UtensilsCrossed className="w-4.5 h-4.5" />
                See Full Menu
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted-foreground/50">
        <div className="w-px h-10 bg-linear-to-b from-transparent to-current animate-bounce" />
      </div>
    </section>
  );
}
