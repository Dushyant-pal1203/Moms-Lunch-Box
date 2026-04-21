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

export function MarqueeStrip() {
  return (
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
  );
}
