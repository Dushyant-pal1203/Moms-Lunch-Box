import { Heart, Star } from "lucide-react";
import { Section } from "@/components/common/Section";

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

export function Testimonials() {
  return (
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
  );
}
