import { Heart, Leaf, Clock, ChefHat } from "lucide-react";
import { Section } from "@/components/common/Section";

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

export function WhyUs() {
  return (
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
  );
}
