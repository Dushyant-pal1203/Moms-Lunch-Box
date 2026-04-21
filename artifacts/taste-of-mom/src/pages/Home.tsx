import { Layout } from "@/components/layout/Layout";
import { MarqueeStrip } from "@/components/common/MarqueeStrip";
import {
  Hero,
  StatsStrip,
  WhyUs,
  MenuPreview,
  HowItWorks,
  Testimonials,
  CtaBanner,
} from "@/components/home";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <MarqueeStrip />
      <StatsStrip />
      <WhyUs />
      <MenuPreview />
      <HowItWorks />
      <Testimonials />
      <CtaBanner />
    </Layout>
  );
}
