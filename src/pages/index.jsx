import { FeatureToggles } from "@/components/feature-toggles/FeatureToggles";
import { Supports } from "@/components/supports/Supports";
import { Hero } from "@/components/hero/Hero";
import { TextParallaxContentExample } from "@/components/text-parallax-content/text-parallax-content";
import { Footer } from "@/components/footer/Footer";
import { UserInfoForm } from "@/components/user-info-form/user-info-form";
import { CtaSection } from "@/components/cta/cta";

export default function Home() {
  return (
    <main className={`bg-cosmic-4 font-sans`}>
      <Hero />
      <div className="space-y-36 overflow-hidden bg-galactic-cream pb-24 pt-24 md:pt-32 lg:pt-36">
        <FeatureToggles />
        <Supports />
        <TextParallaxContentExample />
        <CtaSection />
      </div>
      <UserInfoForm />
      <Footer />
    </main>
  );
}
