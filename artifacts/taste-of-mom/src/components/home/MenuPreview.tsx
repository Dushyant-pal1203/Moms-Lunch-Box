import { Link } from "wouter";
import { UtensilsCrossed, ArrowRight, Phone, Star, Flame } from "lucide-react";
import { Section } from "@/components/common/Section";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { menuItems } from "@/lib/menuData";
import { useState } from "react";

// Get the first 6 menu items for preview
const previewItems = menuItems.slice(0, 6);

export function MenuPreview() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
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
          {previewItems.map((item, i) => (
            <Section key={item.id}>
              <div
                data-testid={`card-menu-preview-${i}`}
                className="group bg-card border border-card-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-2 flex flex-col"
              >
                {/* Image section - matching Menu page styling */}
                <div className="relative bg-linear-to-br from-amber-50 via-green-50/40 to-amber-50/80 h-auto overflow-hidden">
                  {!imageErrors[item.id] ? (
                    <img
                      src={item.image}
                      alt={item.imageAlt || item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={() => handleImageError(item.id)}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-6xl group-hover:scale-110 transition-transform duration-400 relative z-10 drop-shadow-sm select-none">
                        🍽️
                      </span>
                    </div>
                  )}

                  {/* Badges */}
                  {item.bestseller && (
                    <span className="absolute top-3 right-3 flex items-center gap-1 bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                      <Star className="w-2.5 h-2.5 fill-white" /> Best Seller
                    </span>
                  )}
                  {item.spicy && !item.bestseller && (
                    <span className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm text-red-600 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                      <Flame className="w-3.5 h-3.5 fill-red-500" /> Spicy
                    </span>
                  )}
                  {item.spicy && item.bestseller && (
                    <span className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm text-red-600 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                      <Flame className="w-3.5 h-3.5 fill-red-500" /> Spicy
                    </span>
                  )}

                  {/* Tag */}
                  <span
                    className={`absolute bottom-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${item.tagColor} shadow-sm`}
                  >
                    {item.tag}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl font-bold text-primary">
                      {item.price}
                    </span>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                        `Hi! I'd like to order *${item.name}* (${item.price}). Please confirm!`,
                      )}`}
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
  );
}
