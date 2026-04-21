import { Search, X } from "lucide-react";
import { categories, categoryEmojis, type Category } from "@/lib/menuData";

interface MenuFiltersProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
  search: string;
  onSearchChange: (search: string) => void;
  itemCounts: Record<Category, number>;
}

export function MenuFilters({
  activeCategory,
  onCategoryChange,
  search,
  onSearchChange,
  itemCounts,
}: MenuFiltersProps) {
  return (
    <>
      {/* Search */}
      <div className="relative max-w-sm mx-auto mb-7">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="search"
          placeholder="Search menu..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          data-testid="input-search-menu"
          className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
        />
        {search && (
          <button
            onClick={() => onSearchChange("")}
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
            onClick={() => onCategoryChange(cat)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20 scale-105"
                : "bg-card text-foreground border-border hover:border-primary/40 hover:text-primary"
            }`}
          >
            <span>{categoryEmojis[cat]}</span>
            {cat}
            <span
              className={`text-xs px-1.5 py-0.5 rounded-full ${
                activeCategory === cat ? "bg-white/20" : "bg-muted"
              }`}
            >
              {itemCounts[cat]}
            </span>
          </button>
        ))}
      </div>
    </>
  );
}
