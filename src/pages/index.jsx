import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { DisappearingFeatures } from "@/components/disappearing-features/DisappearingFeatures";
import { Supports } from "@/components/supports/Supports";
import { SmoothScrollHero } from "@/components/hero/SmoothScrollHero";
import { TextParallaxContentExample } from "@/components/text-parallax-content/text-parallax-content";
import { Footer } from "@/components/footer/Footer";
import { UserInfoForm } from "@/components/user-info-form/user-info-form";
import { CtaSection } from "@/components/cta/cta";
import { EventInsights } from "@/components/event-insights/EventInsights";
import { IntroSection } from "@/components/intro/IntroSection";


export default function Home() {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    // hide after 3.5 seconds
    const timer = setTimeout(() => setShowHint(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative font-sans bg-galactic-background text-galactic-text">
      {/* Hint Modal */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30"
          >
            <div className="rounded-xl bg-white px-4 py-4 md:px-6 md:py-4 shadow-lg dark:bg-gray-800">
              <p className="text-sm text-center md:text-lg font-semibold text-gray-900 dark:text-gray-100">
                Scroll down to navigate through the website 👇
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SmoothScrollHero />
      <IntroSection />

      <div id="features" className="space-y-36 bg-galactic-background pb-4 pt-24 md:pt-28">
        <DisappearingFeatures />
        <Supports />
        <EventInsights />
        <TextParallaxContentExample />
        <CtaSection />
      </div>
      <Footer />
    </main>
  );
}
