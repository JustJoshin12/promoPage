import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const iconPlus = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
);

const iconSearch = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const iconStar = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

const iconDoc = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const iconMegaphone = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
    />
  </svg>
);

const SHOWCASE_CONFIG = {
  attend: {
    badgeLabel: "For attendees",
    headingLead: "Find Your Next",
    headingGradient: "Anime Night Out",
    featureItems: [
      {
        icon: iconSearch,
        title: "Discover Events",
        description: "Filter by genre, date, or location to find gatherings that match your interests.",
        gradient: "from-cyan-500 to-blue-600",
      },
      {
        icon: iconDoc,
        title: "Event Details",
        description: "Dates, venues, hosts, and what to expect — everything you need before you RSVP.",
        gradient: "from-violet-500 to-fuchsia-600",
      },
      {
        icon: iconStar,
        title: "Rank & Review",
        description: "Rate events you've attended so other fans know what to expect.",
        gradient: "from-amber-500 to-orange-600",
      },
    ],
    featureData: [
      {
        title: "Discover Events",
        image: "/images/anime-night-out-img.png",
      },
      {
        title: "Event Details",
        image: "/images/demoImages/eventdetails.png",
      },
      {
        title: "Community & buzz",
        image: "/images/demoImages/eventhero.png",
      },
    ],
  },
  create: {
    badgeLabel: "For organizers",
    headingLead: "Run Events That",
    headingGradient: "Fans Actually Find",
    featureItems: [
      {
        icon: iconPlus,
        title: "Create Events",
        description:
          "Set up a cosplay meetup, a screening night, or a full convention — and start collecting interest right away.",
        gradient: "from-fuchsia-500 to-violet-600",
      },
      {
        icon: iconMegaphone,
        title: "Event Showcase",
        description:
          "Put your event front and center with a polished hero your attendees can share.",
        gradient: "from-pink-500 to-rose-600",
      },
      {
        icon: iconDoc,
        title: "Clear listings",
        description:
          "Give fans the details they need — schedule, location, and expectations — so the right people sign up.",
        gradient: "from-emerald-500 to-teal-600",
      },
    ],
    featureData: [
      {
        title: "Create Events",
        image: "/images/demoImages/eventcreation.png",
      },
      {
        title: "Event Showcase",
        image: "/images/demoImages/eventhero.png",
      },
      {
        title: "Event Details",
        image: "/images/demoImages/eventdetails.png",
      },
    ],
  },
};

export const ProductFeatureShowcase = ({ purpose = "attend" }) => {
  const config = SHOWCASE_CONFIG[purpose] ?? SHOWCASE_CONFIG.attend;
  const sectionId = purpose === "create" ? "organizer-tools" : "event-discovery";

  return (
    <section id={sectionId} className="relative">
      <Features showcaseConfig={config} />
    </section>
  );
};

const Features = ({ showcaseConfig }) => {
  return (
    <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 md:flex-row">
      <div className="w-full md:w-1/2">
        <div className="md:sticky md:top-8 md:h-[calc(100vh-4rem)] md:flex md:items-center">
          <Copy showcaseConfig={showcaseConfig} />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <Carousel showcaseConfig={showcaseConfig} />
      </div>
    </div>
  );
};

const Copy = ({ showcaseConfig }) => {
  const { badgeLabel, headingLead, headingGradient, featureItems } = showcaseConfig;

  return (
    <div className="flex w-full flex-col justify-center py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/25">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
          </span>
          {badgeLabel}
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="mb-8 text-4xl font-black leading-[1.1] tracking-tight md:text-5xl lg:text-6xl"
      >
        <span className="text-galactic-text">{headingLead}</span>
        <br />
        <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
          {headingGradient}
        </span>
      </motion.h2>

      <div className="space-y-4">
        {featureItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl border border-zinc-700/50 bg-galactic-darkGray/60 p-4 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/50 hover:bg-galactic-darkGray hover:shadow-xl hover:shadow-violet-500/10"
          >
            <div className="flex items-start gap-4">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
              >
                {item.icon}
              </div>

              <div>
                <h3 className="mb-1 text-lg font-bold text-galactic-text">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{item.description}</p>
              </div>
            </div>

            <div
              className={`absolute -right-12 -top-12 h-24 w-24 rounded-full bg-gradient-to-br ${item.gradient} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Carousel = ({ showcaseConfig }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const { featureData } = showcaseConfig;

  return (
    <div className="relative w-full">
      <Gradient />
      <div ref={ref} className="relative z-0 flex flex-col gap-6 md:gap-12">
        {featureData.map((feature, index) => (
          <CarouselItem
            key={feature.title}
            scrollYProgress={scrollYProgress}
            position={index + 1}
            numItems={featureData.length}
            feature={feature}
          />
        ))}
      </div>
      <Buffer />
    </div>
  );
};

const CarouselItem = ({ scrollYProgress, position, numItems, feature }) => {
  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);

  return (
    <motion.div
      style={{
        opacity,
        scale,
      }}
      className="relative aspect-video w-full shrink-0 overflow-hidden rounded-2xl bg-neutral-900 shadow-xl"
    >
      <img src={feature.image} alt={feature.title} className="h-full w-full object-cover object-top" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <span className="text-lg font-semibold text-white">{feature.title}</span>
      </div>
    </motion.div>
  );
};

const Gradient = () => (
  <div className="sticky top-0 z-10 hidden h-24 w-full bg-gradient-to-b from-galactic-background to-galactic-background/0 md:block" />
);

const Buffer = () => <div className="h-24 w-full md:h-48" />;
