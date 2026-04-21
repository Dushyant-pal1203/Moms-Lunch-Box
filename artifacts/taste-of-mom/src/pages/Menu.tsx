import { useState } from "react";
import { Link } from "wouter";
import { Phone, ArrowLeft, Star, Leaf, Heart } from "lucide-react";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { MenuCard, MenuFilters, HowToOrderSection } from "@/components/menu";
import { menuItems, categories, type Category } from "@/lib/menuData";
import { GENERAL_ORDER_LINK } from "@/lib/constants";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [search, setSearch] = useState("");

  const filtered = menuItems.filter((m) => {
    const matchCat = activeCategory === "All" || m.category === activeCategory;
    const matchSearch =
      search === "" ||
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const itemCounts = categories.reduce(
    (acc, cat) => {
      acc[cat] =
        cat === "All"
          ? menuItems.length
          : menuItems.filter((m) => m.category === cat).length;
      return acc;
    },
    {} as Record<Category, number>,
  );

  // Debug logs to check filtering
  console.log("Active Category:", activeCategory);
  console.log("Search term:", search);
  console.log("Total menu items:", menuItems.length);
  console.log("Filtered items count:", filtered.length);
  console.log(
    "Filtered items:",
    filtered.map((f) => f.name),
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingWhatsApp />
      <Navbar />

      <div className="container-fluid">
        {/* Page Title */}
        <div className="text-center my-5">
          <div className="flex justify-center mb-5">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-amber-400 to-green-600 rounded-full blur-xl opacity-20 scale-110" />
              <img
                src="/logo.png"
                alt="Taste of Mom's Hand Logo"
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

        {/* Filters */}
        <MenuFilters
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          search={search}
          onSearchChange={setSearch}
          itemCounts={itemCounts}
        />

        {/* Menu Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {filtered.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} inView={true} />
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

        {/* How to Order Section */}
        <HowToOrderSection />
      </div>

      <Footer />
    </div>
  );
}
