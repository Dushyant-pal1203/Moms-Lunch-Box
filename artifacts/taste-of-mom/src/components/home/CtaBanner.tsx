import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/common/Section";
import { WHATSAPP_LINK } from "@/lib/constants";

export function CtaBanner() {
  return (
    <section className="py-16">
      <div className="container-fluid">
        <Section>
          <div className="relative bg-linear-to-br from-primary via-primary to-primary/90 rounded-3xl p-6 md:p-10 text-center overflow-hidden shadow-2xl">
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
  );
}
