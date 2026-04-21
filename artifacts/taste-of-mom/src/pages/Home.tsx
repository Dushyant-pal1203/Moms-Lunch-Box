import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import {
  Heart,
  Clock,
  Phone,
  Star,
  ChefHat,
  Leaf,
  UtensilsCrossed,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const WHATSAPP_NUMBER = "919310004022";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20would%20like%20to%20place%20a%20lunch%20order%20today.%20Please%20share%20the%20menu.%20Thank%20you!`;

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const testimonials = [
  {
    name: "Riya Sharma",
    city: "Delhi",
    text: "It actually tastes like home. I've been ordering every day since I moved. The dal is exactly like my mother's recipe!",
    rating: 5,
    initial: "R",
  },
  {
    name: "Arjun Mehta",
    city: "Noida",
    text: "Finally real homemade food at the office! No more oily restaurant food. Fresh, hot and perfectly packed every time.",
    rating: 5,
    initial: "A",
  },
  {
    name: "Priya Nair",
    city: "Gurgaon",
    text: "The paneer thali is outstanding. Portions are generous, price is fair and food arrives on time. Highly recommend!",
    rating: 5,
    initial: "P",
  },
  {
    name: "Suresh Kumar",
    city: "Delhi",
    text: "Ordered the weekly subscription and it's the best decision. Saves time, money and tastes incredible every single day.",
    rating: 5,
    initial: "S",
  },
];

const features = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Made with Love",
    desc: "Every meal prepared fresh daily with the care a mother gives her children.",
    color: "from-rose-50 to-red-50",
    iconBg: "bg-rose-100 text-rose-600",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Fresh Ingredients",
    desc: "Locally grown vegetables and pure natural spices — zero preservatives ever.",
    color: "from-emerald-50 to-green-50",
    iconBg: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "On-Time Delivery",
    desc: "Your hot lunch delivered right to your doorstep, exactly when you need it.",
    color: "from-blue-50 to-sky-50",
    iconBg: "bg-blue-100 text-blue-700",
  },
  {
    icon: <ChefHat className="w-6 h-6" />,
    title: "Traditional Recipes",
    desc: "Certified home kitchen following authentic, time-tested family recipes.",
    color: "from-amber-50 to-yellow-50",
    iconBg: "bg-amber-100 text-amber-700",
  },
];

const menuPreviews = [
  {
    name: "Full Veg Thali",
    emoji: "🍛",
    price: "₹80",
    tag: "Best Seller",
    tagColor: "bg-amber-500 text-white",
    desc: "2 Roti + Dal + Sabzi + Rice + Salad",
  },
  {
    name: "Rajma Chawal",
    emoji: "🫘",
    price: "₹65",
    tag: "Fan Favourite",
    tagColor: "bg-rose-500 text-white",
    desc: "Slow-cooked kidney beans with jeera rice",
  },
  {
    name: "Paneer Thali",
    emoji: "🧀",
    price: "₹100",
    tag: "Popular",
    tagColor: "bg-primary text-primary-foreground",
    desc: "Paneer Sabzi + Dal Tadka + Rice + Sweet",
  },
  {
    name: "Aloo Paratha",
    emoji: "🥞",
    price: "₹60",
    tag: "Breakfast/Lunch",
    tagColor: "bg-orange-500 text-white",
    desc: "2 stuffed parathas with dahi & achaar",
  },
  {
    name: "Weekly Pack",
    emoji: "📦",
    price: "₹350",
    tag: "Best Value",
    tagColor: "bg-teal-600 text-white",
    desc: "5 days of hot homemade lunch — Mon to Fri",
  },
  {
    name: "Khichdi + Kadhi",
    emoji: "🫕",
    price: "₹55",
    tag: "Comfort Food",
    tagColor: "bg-violet-600 text-white",
    desc: "Comforting dal-rice with tangy kadhi",
  },
];

const marqueItems = [
  "Full Veg Thali",
  "Rajma Chawal",
  "Paneer Special",
  "Dal Rice",
  "Aloo Paratha",
  "Khichdi Kadhi",
  "Roti Sabzi",
  "Chole Chawal",
  "Weekly Pack",
];
const floatingEmojis = [
  { emoji: "🍛", top: "10%", left: "8%", delay: "0s", size: "text-4xl" },
  { emoji: "🫓", top: "20%", right: "6%", delay: "1.5s", size: "text-3xl" },
  { emoji: "🌿", top: "60%", left: "4%", delay: "3s", size: "text-2xl" },
  { emoji: "⭐", top: "75%", right: "8%", delay: "0.8s", size: "text-3xl" },
  { emoji: "❤️", top: "45%", right: "4%", delay: "2.2s", size: "text-2xl" },
  { emoji: "🫘", top: "85%", left: "7%", delay: "1s", size: "text-3xl" },
];

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="button-floating-whatsapp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-pulse-ring"
        aria-label="Order on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-white shrink-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="hidden sm:block">Order Now</span>
      </a>

      {/* Sticky Nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent"}`}
      >
        <div className="container-fluid px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            data-testid="link-nav-home"
            className="flex items-center gap-2.5"
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="w-9 h-9 rounded-full object-cover shadow-sm"
            />
            <span className="font-display font-bold text-base text-foreground hidden sm:block">
              Taste of Mom's Hand
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/menu"
              data-testid="link-nav-menu"
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors px-3 py-1.5"
            >
              Menu
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-nav-order"
              className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <Phone className="w-3.5 h-3.5" />
              Order
            </a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
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
            className={`flex flex-col md:flex-row gap-5 justify-around relative z-10 text-center transition-all duration-1000 ease-out ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <div>
              {/* Badge */}
              <div className="flex justify-center mb-6">
                <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 rounded-full px-5 py-2">
                  <Heart className="w-3 h-3 fill-current" /> Delhi's Favourite
                  Home Kitchen
                </span>
              </div>

              {/* Logo */}
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

              {/* Star rating */}
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

              {/* CTA Buttons */}
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

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted-foreground/50">
          <div className="w-px h-10 bg-linear-to-b from-transparent to-current animate-bounce" />
        </div>
      </section>

      {/* ─── MARQUEE STRIP ─── */}
      <div className="bg-primary py-3.5 overflow-hidden border-y border-primary/20">
        <div className="flex whitespace-nowrap animate-marquee gap-0">
          {[...marqueItems, ...marqueItems].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 text-primary-foreground/90 font-medium text-sm px-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ─── STATS STRIP ─── */}
      <Section className="py-17.5">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "500+", label: "Happy Customers", emoji: "😊" },
              { num: "100%", label: "Fresh Daily", emoji: "🌿" },
              { num: "4.9★", label: "Average Rating", emoji: "⭐" },
              { num: "₹45+", label: "Starting Price", emoji: "💚" },
            ].map((s, i) => (
              <div
                key={i}
                data-testid={`stat-${i}`}
                className="text-center p-5 rounded-2xl bg-card border border-card-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="text-3xl mb-1">{s.emoji}</div>
                <div className="font-display text-3xl font-bold text-primary mb-0.5">
                  {s.num}
                </div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── WHY US ─── */}
      <section className="py-17.5 bg-linear-to-b from-muted/30 to-transparent">
        <div className="container-fluid">
          <Section>
            <div className="text-center mb-14">
              <h2
                className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3"
                data-testid="heading-why-us"
              >
                Why Choose Us?
              </h2>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-amber-400 rounded-full" />
                <Heart className="w-4 h-4 fill-amber-400 text-amber-400" />
                <div className="w-8 h-0.5 bg-amber-400 rounded-full" />
              </div>
              <p className="text-muted-foreground text-lg max-w-sm mx-auto">
                We bring the warmth of a home kitchen right to your plate.
              </p>
            </div>
          </Section>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <Section key={i}>
                <div
                  data-testid={`card-feature-${i}`}
                  className={`group relative h-full bg-linear-to-br ${f.color} border border-card-border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-400 hover:-translate-y-2 overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-white/40 -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-700" />
                  <div
                    className={`w-14 h-14 rounded-2xl ${f.iconBg} flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}
                  >
                    {f.icon}
                  </div>
                  <h3 className="font-semibold text-foreground text-base mb-2">
                    {f.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MENU PREVIEW ─── */}
      <section className="py-17.5">
        <div className="container-fluid">
          <Section>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-amber-600 mb-3">
                Today's Specials
              </span>
              <h2
                className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3"
                data-testid="heading-menu-preview"
              >
                Our Menu
              </h2>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-amber-400 rounded-full" />
                <UtensilsCrossed className="w-4 h-4 text-amber-500" />
                <div className="w-8 h-0.5 bg-amber-400 rounded-full" />
              </div>
              <p className="text-muted-foreground text-lg">
                Freshly cooked every morning — order by 10 AM
              </p>
            </div>
          </Section>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {menuPreviews.map((item, i) => (
              <Section key={i}>
                <div
                  data-testid={`card-menu-preview-${i}`}
                  className="group bg-card border border-card-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-2 flex flex-col"
                >
                  {/* Top gradient area */}
                  <div className="relative bg-linear-to-br from-amber-50 via-green-50/50 to-amber-50 py-8 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-white/50 to-transparent" />
                    <span className="text-6xl group-hover:scale-110 transition-transform duration-300 relative z-10 drop-shadow-sm">
                      {item.emoji}
                    </span>
                    <span
                      className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full ${item.tagColor}`}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                      {item.desc}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-2xl font-bold text-primary">
                        {item.price}
                      </span>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi! I'd like to order *${item.name}* (${item.price}). Please confirm!`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`button-order-preview-${i}`}
                        className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-4 py-2 rounded-full transition-all duration-200 hover:shadow-md active:scale-95"
                      >
                        <Phone className="w-3 h-3" />
                        Order
                      </a>
                    </div>
                  </div>
                </div>
              </Section>
            ))}
          </div>

          <Section>
            <div className="text-center">
              <Link
                href="/menu"
                data-testid="link-full-menu"
                className="group inline-flex items-center gap-2 text-primary font-semibold text-base hover:gap-3 transition-all duration-200"
              >
                View All Menu Items
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Section>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-17.5 bg-linear-to-b from-primary/5 to-transparent">
        <div className="container-fluid">
          <Section>
            <div className="text-center mb-14">
              <h2
                className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3"
                data-testid="heading-how-it-works"
              >
                How It Works
              </h2>
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-0.5 bg-amber-400 rounded-full" />
                <span className="text-amber-500 text-lg">✨</span>
                <div className="w-8 h-0.5 bg-amber-400 rounded-full" />
              </div>
            </div>
          </Section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-linear-to-r from-transparent via-amber-300 to-transparent" />

            {[
              {
                step: "01",
                title: "Browse Menu",
                desc: "Check our daily menu and pick what you'd love to eat today.",
                emoji: "📖",
              },
              {
                step: "02",
                title: "WhatsApp Order",
                desc: "Tap 'Order' and send us a WhatsApp — takes just 10 seconds!",
                emoji: "📱",
              },
              {
                step: "03",
                title: "Enjoy Freshly",
                desc: "We confirm and deliver your hot, home-cooked meal on time.",
                emoji: "🍽️",
              },
            ].map((s, i) => (
              <Section key={i}>
                <div
                  data-testid={`step-${i}`}
                  className="relative text-center group"
                >
                  <div className="relative inline-block mb-5">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground font-display font-bold text-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto">
                      {s.step}
                    </div>
                    <span className="absolute -top-1 -right-1 text-xl">
                      {s.emoji}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                    {s.desc}
                  </p>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-17.5">
        <div className="container-fluid">
          <Section>
            <div className="text-center mb-14">
              <h2
                className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3"
                data-testid="heading-testimonials"
              >
                Customer Love
              </h2>
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-8 h-0.5 bg-amber-400 rounded-full" />
                <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                <div className="w-8 h-0.5 bg-amber-400 rounded-full" />
              </div>
              <p className="text-muted-foreground">
                Real words from real customers who order every day
              </p>
            </div>
          </Section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <Section key={i}>
                <div
                  data-testid={`card-testimonial-${i}`}
                  className="relative bg-card border border-card-border rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                >
                  <div className="absolute top-4 right-5 text-3xl opacity-10 font-display font-bold">
                    "
                  </div>
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star
                        key={j}
                        className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4 italic">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-linear-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0 shadow-sm">
                      {t.initial}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">
                        {t.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {t.city}
                      </div>
                    </div>
                  </div>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="py-16">
        <div className="container-fluid">
          <Section>
            <div className="relative bg-linear-to-br from-primary via-primary to-primary/90 rounded-3xl p-6 md:p-10 text-center overflow-hidden shadow-2xl">
              {/* Decorative blobs */}
              <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full -translate-x-20 -translate-y-20" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full translate-x-24 translate-y-24" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/3 rounded-full" />

              <div className="relative z-10">
                <span className="text-4xl mb-4 block">🍱</span>
                <h2
                  className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-3"
                  data-testid="heading-cta"
                >
                  Ready for a Taste of Home?
                </h2>
                <p className="text-primary-foreground/75 text-lg mb-2 max-w-md mx-auto">
                  Order now on WhatsApp — fresh, hot and delivered with love.
                </p>
                <div className="flex items-center justify-center gap-4 mb-8 text-primary-foreground/60 text-sm">
                  {[
                    "No app required",
                    "Instant confirmation",
                    "Same-day delivery",
                  ].map((t) => (
                    <span key={t} className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-cta-order"
                  className="inline-flex items-center gap-3 bg-white hover:bg-amber-50 text-green-700 font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-green-600 shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Order on WhatsApp Now
                </a>
                <p className="mt-4 text-primary-foreground/50 text-xs">
                  +91 93100 04022 · Orders accepted till 10 AM daily
                </p>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-border bg-card py-5">
        <div className="container-fluid">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-12 h-12 rounded-full object-cover shadow-sm"
              />
              <div>
                <div className="font-display font-bold text-foreground">
                  Taste of Mom's Hand
                </div>
                <div className="text-xs text-muted-foreground">
                  Made with Love. Served with Care.
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <Link
                href="/menu"
                className="hover:text-primary transition-colors"
              >
                Menu
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
          <div className="mt-4 pt-6 border-t border-border text-center text-xs text-muted-foreground/60">
            © 2026 Taste of Mom's Hand · All rights reserved · +91 93100 04022
          </div>
        </div>
      </footer>
    </div>
  );
}
