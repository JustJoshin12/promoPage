import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";

import { DisappearingFeatures } from "@/components/disappearing-features/DisappearingFeatures";
import { Supports } from "@/components/supports/Supports";
import { SmoothScrollHero } from "@/components/hero/SmoothScrollHero";
import { TextParallaxContentExample } from "@/components/text-parallax-content/text-parallax-content";
import { Footer } from "@/components/footer/Footer";
import { UserInfoForm } from "@/components/user-info-form/user-info-form";
import { CtaSection } from "@/components/cta/cta";
import { EventInsights } from "@/components/event-insights/EventInsights";
import { IntroSection } from "@/components/intro/IntroSection";

const SITE_URL = "https://nymify-promopage.vercel.app";
const SITE_NAME = "Nymify";
const SITE_DESCRIPTION = "Discover,create, engage, and share anime-related events. Connect with fellow anime fans, find local meetups, conventions, and create unforgettable experiences.";
const OG_IMAGE = `${SITE_URL}/images/metadataimg.png`; 

export default function Home() {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    // hide after 3.5 seconds
    const timer = setTimeout(() => setShowHint(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{SITE_NAME} - Find Anime Events Near You</title>
        <meta name="title" content={`${SITE_NAME} - Find Anime Events Near You`} />
        <meta name="description" content={SITE_DESCRIPTION} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={`${SITE_NAME} - Find Anime Events Near You`} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={SITE_NAME} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={SITE_URL} />
        <meta name="twitter:title" content={`${SITE_NAME} - Find Anime Events Near You`} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="anime events, anime conventions, anime meetups, cosplay events, anime community, anime discovery" />
        <link rel="canonical" href={SITE_URL} />
      </Head>

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
    </>
  );
}
