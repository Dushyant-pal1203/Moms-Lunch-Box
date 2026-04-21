import { Section } from "@/components/common/Section";

const stats = [
  { num: "500+", label: "Happy Customers", emoji: "😊" },
  { num: "100%", label: "Fresh Daily", emoji: "🌿" },
  { num: "4.9★", label: "Average Rating", emoji: "⭐" },
  { num: "₹45+", label: "Starting Price", emoji: "💚" },
];

export function StatsStrip() {
  return (
    <Section className="py-17.5">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
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
  );
}
