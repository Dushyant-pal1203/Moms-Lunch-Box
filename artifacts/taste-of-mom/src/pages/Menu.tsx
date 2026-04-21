import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import {
  Phone,
  ArrowLeft,
  Star,
  Leaf,
  Flame,
  Heart,
  Search,
  X,
} from "lucide-react";

const WHATSAPP_NUMBER = "919310004022";
const GENERAL_ORDER_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20would%20like%20to%20see%20today's%20menu%20and%20place%20an%20order.%20Thank%20you!`;

type Category = "All" | "Thali" | "Rice" | "Roti" | "Special";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  priceNum: number;
  category: Category;
  tag: string;
  tagColor: string;
  emoji: string;
  bestseller?: boolean;
  spicy?: boolean;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Full Veg Thali",
    description: "2 Roti, Dal, Sabzi (seasonal), Rice, Salad & Pickle",
    price: "₹80",
    priceNum: 80,
    category: "Thali",
    tag: "Best Seller",
    tagColor: "bg-amber-500 text-white",
    emoji: "🍛",
    bestseller: true,
  },
  {
    id: 2,
    name: "Paneer Special Thali",
    description: "2 Roti, Paneer Sabzi, Dal Tadka, Rice, Salad & Sweet",
    price: "₹100",
    priceNum: 100,
    category: "Thali",
    tag: "Popular",
    tagColor: "bg-rose-500 text-white",
    emoji: "🧀",
  },
  {
    id: 3,
    name: "Mini Thali",
    description: "1 Roti, Dal, Sabzi & Rice — perfect for light meals",
    price: "₹55",
    priceNum: 55,
    category: "Thali",
    tag: "Budget Friendly",
    tagColor: "bg-sky-500 text-white",
    emoji: "🥘",
  },
  {
    id: 4,
    name: "Dal Rice",
    description: "Homestyle dal with steamed rice, pickle & papad",
    price: "₹50",
    priceNum: 50,
    category: "Rice",
    tag: "Classic",
    tagColor: "bg-stone-600 text-white",
    emoji: "🍚",
  },
  {
    id: 5,
    name: "Rajma Chawal",
    description: "Slow-cooked kidney beans with jeera rice & salad",
    price: "₹65",
    priceNum: 65,
    category: "Rice",
    tag: "Fan Favourite",
    tagColor: "bg-violet-600 text-white",
    emoji: "🫘",
  },
  {
    id: 6,
    name: "Chole Chawal",
    description: "Spiced chickpea curry with steamed basmati rice",
    price: "₹65",
    priceNum: 65,
    category: "Rice",
    tag: "Spicy",
    tagColor: "bg-red-500 text-white",
    emoji: "🍲",
    spicy: true,
  },
  {
    id: 7,
    name: "Roti + Dal Combo",
    description: "2 soft rotis with homestyle dal and a small salad",
    price: "₹45",
    priceNum: 45,
    category: "Roti",
    tag: "Classic",
    tagColor: "bg-stone-600 text-white",
    emoji: "🫓",
  },
  {
    id: 8,
    name: "Roti + Sabzi Combo",
    description: "2 rotis with fresh seasonal vegetable sabzi",
    price: "₹50",
    priceNum: 50,
    category: "Roti",
    tag: "Healthy",
    tagColor: "bg-emerald-600 text-white",
    emoji: "🥙",
  },
  {
    id: 9,
    name: "Aloo Paratha Combo",
    description: "2 stuffed aloo parathas with dahi & homemade achaar",
    price: "₹60",
    priceNum: 60,
    category: "Special",
    tag: "Breakfast/Lunch",
    tagColor: "bg-orange-500 text-white",
    emoji: "🥞",
    bestseller: true,
  },
  {
    id: 10,
    name: "Paneer Bhurji + Roti",
    description: "Spiced scrambled paneer with 2 rotis & green chutney",
    price: "₹80",
    priceNum: 80,
    category: "Special",
    tag: "High Protein",
    tagColor: "bg-indigo-500 text-white",
    emoji: "🍳",
    spicy: true,
  },
  {
    id: 11,
    name: "Khichdi + Kadhi",
    description: "Comforting dal-rice khichdi with tangy kadhi & papad",
    price: "₹55",
    priceNum: 55,
    category: "Special",
    tag: "Comfort Food",
    tagColor: "bg-teal-600 text-white",
    emoji: "🫕",
  },
  {
    id: 12,
    name: "Weekly Pack (5 days)",
    description:
      "Hot homemade lunch every weekday Mon–Fri. Full Veg Thali. Save big!",
    price: "₹350",
    priceNum: 350,
    category: "Special",
    tag: "Best Value",
    tagColor: "bg-primary text-primary-foreground",
    emoji: "📦",
    bestseller: true,
  },
];

const categories: Category[] = ["All", "Thali", "Rice", "Roti", "Special"];
const categoryEmojis: Record<Category, string> = {
  All: "🍽️",
  Thali: "🍛",
  Rice: "🍚",
  Roti: "🫓",
  Special: "⭐",
};

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const { ref, inView } = useInView();
  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi! I would like to order:\n*${item.name}* (${item.price})\n\nPlease confirm availability and delivery time. Thank you!`,
  )}`;
  return (
    <div
      ref={ref}
      data-testid={`card-menu-item-${item.id}`}
      className={`group bg-card border border-card-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      {/* Visual top */}
      <div className="relative bg-linear-to-br from-amber-50 via-green-50/40 to-amber-50/80 flex items-center justify-center py-8 overflow-hidden">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-primary/5 to-amber-200/20" />
        <span className="text-6xl group-hover:scale-110 transition-transform duration-400 relative z-10 drop-shadow-sm select-none">
          {item.emoji}
        </span>
        {item.bestseller && (
          <span className="absolute top-3 right-3 flex items-center gap-1 bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
            <Star className="w-2.5 h-2.5 fill-white" /> Best Seller
          </span>
        )}
        {item.spicy && !item.bestseller && (
          <span className="absolute top-3 left-3 flex items-center gap-1 text-red-600 text-xs font-bold">
            <Flame className="w-3.5 h-3.5 fill-red-500" /> Spicy
          </span>
        )}
        {item.spicy && item.bestseller && (
          <span className="absolute top-3 left-3 flex items-center gap-1 text-red-600 text-xs font-bold">
            <Flame className="w-3.5 h-3.5 fill-red-500" /> Spicy
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <span
          className={`self-start text-xs font-bold px-2.5 py-0.5 rounded-full ${item.tagColor} mb-3`}
        >
          {item.tag}
        </span>
        <h3 className="font-display font-semibold text-lg text-foreground mb-1 leading-snug">
          {item.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-display text-2xl font-bold text-primary">
            {item.price}
          </span>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`button-order-item-${item.id}`}
            className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-sm font-bold px-4 py-2 rounded-full transition-all duration-200 hover:shadow-md active:scale-95 group/btn"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-3.5 h-3.5 fill-white shrink-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Order
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  const [active, setActive] = useState<Category>("All");
  const [search, setSearch] = useState("");

  const filtered = menuItems.filter((m) => {
    const matchCat = active === "All" || m.category === active;
    const matchSearch =
      search === "" ||
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Floating WhatsApp */}
      <a
        href={GENERAL_ORDER_LINK}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="button-floating-whatsapp-menu"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-pulse-ring"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="hidden sm:block">Order Now</span>
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container-fluid h-16 flex items-center justify-between gap-4">
          <Link
            href="/"
            data-testid="link-back-home"
            className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium hidden sm:block">Home</span>
          </Link>
          <h1
            className="font-display font-bold text-xl text-foreground"
            data-testid="heading-menu-header"
          >
            Our Menu
          </h1>
          <a
            href={GENERAL_ORDER_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-header-order"
            className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 shrink-0 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Order</span>
          </a>
        </div>
      </header>

      <div className="container-fluid">
        {/* Page Title */}
        <div className="text-center my-5">
          <div className="flex justify-center mb-5">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-amber-400 to-green-600 rounded-full blur-xl opacity-20 scale-110" />
              <img
                src="/logo.png"
                alt="Logo"
                className="relative w-20 h-20 object-cover rounded-full shadow-md border-2 border-white/60"
                data-testid="img-menu-logo"
              />
            </div>
          </div>
          <h2
            className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2"
            data-testid="heading-menu-title"
          >
            Today's <span className="shimmer-text italic">Menu</span>
          </h2>
          <p className="text-muted-foreground mb-4">
            All meals cooked fresh daily — order by 10 AM for same-day delivery
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-1 rounded-full font-medium">
              <Leaf className="w-3.5 h-3.5" /> 100% Vegetarian
            </span>
            <span className="flex items-center gap-1.5 bg-rose-50 text-rose-600 border border-rose-100 px-3 py-1 rounded-full font-medium">
              <Heart className="w-3.5 h-3.5 fill-rose-500" /> Home Cooked
            </span>
            <span className="flex items-center gap-1.5 bg-amber-50 text-amber-700 border border-amber-100 px-3 py-1 rounded-full font-medium">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> No
              Preservatives
            </span>
          </div>
        </div>

        {/* Search */}
        <div className="relative max-w-sm mx-auto mb-7">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search menu..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            data-testid="input-search-menu"
            className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category filter */}
        <div className="flex gap-2 flex-wrap justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              data-testid={`filter-${cat.toLowerCase()}`}
              onClick={() => setActive(cat)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                active === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20 scale-105"
                  : "bg-card text-foreground border-border hover:border-primary/40 hover:text-primary"
              }`}
            >
              <span>{categoryEmojis[cat]}</span>
              {cat}
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full ${active === cat ? "bg-white/20" : "bg-muted"}`}
              >
                {cat === "All"
                  ? menuItems.length
                  : menuItems.filter((m) => m.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {filtered.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16" data-testid="empty-search">
            <span className="text-5xl mb-4 block">🔍</span>
            <p className="text-muted-foreground font-medium">
              No items found for "{search}"
            </p>
            <button
              onClick={() => setSearch("")}
              className="mt-3 text-sm text-primary hover:underline"
            >
              Clear search
            </button>
          </div>
        )}

        {/* How to Order */}
        <div
          className="bg-linear-to-br from-primary/5 via-primary/8 to-amber-50/50 border border-primary/15 rounded-3xl p-8 md:p-10 text-center"
          data-testid="section-how-to-order"
        >
          <span className="text-4xl mb-4 block">📱</span>
          <h3
            className="font-display text-2xl font-bold text-foreground mb-2"
            data-testid="heading-how-to-order"
          >
            How to Order
          </h3>
          <p className="text-muted-foreground text-sm mb-8 max-w-sm mx-auto">
            Just click the Order button on any dish — it opens WhatsApp with the
            order already filled in!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-start max-w-lg mx-auto mb-8">
            {[
              {
                n: "1",
                t: "Choose a meal",
                d: "Browse above & pick your favourite",
              },
              {
                n: "2",
                t: "Tap Order",
                d: "Opens WhatsApp with message ready",
              },
              {
                n: "3",
                t: "Confirm & enjoy!",
                d: "We confirm delivery time for you",
              },
            ].map((s) => (
              <div
                key={s.n}
                className="flex flex-col items-center text-center flex-1"
                data-testid={`step-order-${s.n}`}
              >
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mb-2 shadow-md text-sm">
                  {s.n}
                </div>
                <p className="font-semibold text-foreground text-sm mb-0.5">
                  {s.t}
                </p>
                <p className="text-xs text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>

          <a
            href={GENERAL_ORDER_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-whatsapp-general"
            className="inline-flex items-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-bold text-base px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-white shrink-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
          <p className="text-xs text-muted-foreground/70 mt-3">
            +91 93100 04022 · Accept orders till 10 AM daily
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border mt-10 bg-card py-8 px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-8 h-8 rounded-full object-contain opacity-80"
          />
          <span className="font-display font-semibold text-foreground">
            Taste of Mom's Hand
          </span>
        </div>
        <p className="text-muted-foreground text-sm mb-1">
          Made with Love. Served with Care.
        </p>
        <p className="text-xs text-muted-foreground/60 mt-3">
          © 2026 Taste of Mom's Hand · All rights reserved
        </p>
      </footer>
    </div>
  );
}
