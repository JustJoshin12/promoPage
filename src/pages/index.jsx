import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";

import { ProductFeatureShowcase } from "@/components/product-feature-showcase/ProductFeatureShowcase";
import { AudienceBenefitsSection } from "@/components/audience-benefits-section/AudienceBenefitsSection";
import { SmoothScrollHero } from "@/components/hero/SmoothScrollHero";
import { BrandValuesSection } from "@/components/brand-values-section/BrandValuesSection";
import { Footer } from "@/components/footer/Footer";
import { SupportedEventTypesSection } from "@/components/supported-event-types-section/SupportedEventTypesSection";
import { AnalyticsShowcase } from "@/components/analytics-showcase/AnalyticsShowcase";
import { IntroSection } from "@/components/intro/IntroSection";
import { NotifyInterestForm } from "@/components/notify-interest-form/NotifyInterestForm";
import {
  FeaturesPurposeToggle,
  FEATURE_PURPOSE,
} from "@/components/features-purpose-toggle/FeaturesPurposeToggle";
import { HowDiscoveryWorksSection } from "@/components/how-discovery-works-section/HowDiscoveryWorksSection";
import { OrganizerFaqSection } from "@/components/organizer-faq-section/OrganizerFaqSection";
import { AttendeeFaqSection } from "@/components/attendee-faq-section/AttendeeFaqSection";
import { OrganizerAudienceSection } from "@/components/organizer-audience-section/OrganizerAudienceSection";
import { OrganizerPublishingChecklistSection } from "@/components/organizer-publishing-checklist-section/OrganizerPublishingChecklistSection";
import { NearYouCalendarTeaserSection } from "@/components/near-you-calendar-teaser-section/NearYouCalendarTeaserSection";

const SITE_URL = "https://nymify-promopage.vercel.app";
const SITE_NAME = "Nymify";
const SITE_DESCRIPTION = "Discover,create, engage, and share anime-related events. Connect with fellow anime fans, find local meetups, conventions, and create unforgettable experiences.";
const OG_IMAGE = `${SITE_URL}/images/metadataimg.png`; 


export default function Home() {
  const [showHint, setShowHint] = useState(true);
  const [featuresPurpose, setFeaturesPurpose] = useState(FEATURE_PURPOSE.attend);

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

      <div id="features" className="space-y-24 bg-galactic-background pb-4 pt-24 md:pt-28 md:space-y-28">
        <FeaturesPurposeToggle value={featuresPurpose} onChange={setFeaturesPurpose} />
        <AnimatePresence mode="wait">
          <motion.div
            key={featuresPurpose}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col space-y-36"
          >
            {featuresPurpose === FEATURE_PURPOSE.attend ? (
              <>
                <ProductFeatureShowcase purpose="attend" />
                <HowDiscoveryWorksSection />
                <NearYouCalendarTeaserSection />
                <SupportedEventTypesSection />
                <AudienceBenefitsSection purpose="attend" />
                <AttendeeFaqSection />
              </>
            ) : (
              <>
                <ProductFeatureShowcase purpose="create" />
                <OrganizerAudienceSection />
                <AudienceBenefitsSection purpose="create" />
                <AnalyticsShowcase />
                <OrganizerPublishingChecklistSection />
                <OrganizerFaqSection />
              </>
            )}
          </motion.div>
        </AnimatePresence>
        <BrandValuesSection />
      </div>
      <NotifyInterestForm />
      <Footer purpose={featuresPurpose} />
      </main>
    </>
  );
}
