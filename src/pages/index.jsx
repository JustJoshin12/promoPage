import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FeatureToggles } from "@/components/feature-toggles/FeatureToggles";
import { Supports } from "@/components/supports/Supports";
import { Hero } from "@/components/hero/Hero";
import { TextParallaxContentExample } from "@/components/text-parallax-content/text-parallax-content";
import { Footer } from "@/components/footer/Footer";
import { UserInfoForm } from "@/components/user-info-form/user-info-form";
import { CtaSection } from "@/components/cta/cta";

export default function Home() {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    // hide after 3.5 seconds
    const timer = setTimeout(() => setShowHint(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative bg-cosmic-4 font-sans">
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
            <div className="rounded-xl bg-white px-6 py-4 shadow-lg dark:bg-gray-800">
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Scroll down to navigate through the website 👇
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
