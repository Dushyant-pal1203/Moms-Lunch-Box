import { Section } from "@/components/common/Section";

const steps = [
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
];

export function HowItWorks() {
  return (
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
          <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-linear-to-r from-transparent via-amber-300 to-transparent" />

          {steps.map((s, i) => (
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
  );
}
