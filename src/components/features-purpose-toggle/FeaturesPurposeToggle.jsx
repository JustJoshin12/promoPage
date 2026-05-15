// src/components/features-purpose-toggle/FeaturesPurposeToggle.jsx
import { motion } from "framer-motion";

const PURPOSE_KEYS = {
  attend: "attend",
  create: "create",
};

export const FEATURE_PURPOSE = PURPOSE_KEYS;

const CARDS = [
  {
    key: PURPOSE_KEYS.attend,
    eyebrow: "For fans",
    heading: "I want to attend events",
    description:
      "Discover anime meetups, cons, screenings, and gatherings near you — filter to your vibe and never miss a night out.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2.5" />
        <path
          d="M16 24c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8-8-3.582-8-8z"
          fill="currentColor"
          opacity="0.25"
        />
        <path
          d="M24 16v8l5 3"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    gradient: "from-cyan-500 to-blue-600",
    glowColor: "shadow-cyan-500/40",
    borderActive: "border-cyan-500/60",
    borderIdle: "border-zinc-700/60",
    pillText: "Explore events",
    pillBg: "bg-cyan-500/10 text-cyan-300",
  },
  {
    key: PURPOSE_KEYS.create,
    eyebrow: "For organizers",
    heading: "I want to create events",
    description:
      "Post your event, reach local anime fans who are actively looking, and use real data to grow every time you run one.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
        <rect x="6" y="6" width="36" height="36" rx="8" stroke="currentColor" strokeWidth="2.5" />
        <path
          d="M24 16v16M16 24h16"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    gradient: "from-fuchsia-500 to-violet-600",
    glowColor: "shadow-fuchsia-500/40",
    borderActive: "border-fuchsia-500/60",
    borderIdle: "border-zinc-700/60",
    pillText: "Start hosting",
    pillBg: "bg-fuchsia-500/10 text-fuchsia-300",
  },
];

export const FeaturesPurposeToggle = ({ value, onChange }) => {
  return (
    <section id="choose-path" className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="mb-6 text-center md:mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
          Personalize your experience
        </p>
        <h2 className="mt-2 text-2xl font-black tracking-tight text-white md:mt-3 md:text-4xl">
          How are you using Nymify?
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-gray-400 md:mt-3 md:text-base">
          Choose your path — the page below updates to show exactly what you need.
        </p>
      </div>

      {/* Cards */}
      <div
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4"
        role="tablist"
        aria-label="Audience selection"
      >
        {CARDS.map((card) => {
          const isActive = value === card.key;

          return (
            <button
              key={card.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(card.key)}
              className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:p-5 md:p-8 ${
                isActive
                  ? `${card.borderActive} shadow-2xl ${card.glowColor}`
                  : `${card.borderIdle} hover:border-zinc-500/60`
              }`}
            >
              {/* Background fill on active */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} transition-opacity duration-300 ${
                  isActive ? "opacity-10" : "opacity-0 group-hover:opacity-5"
                }`}
                aria-hidden="true"
              />

              {/* Glow orb */}
              {isActive && (
                <motion.div
                  layoutId={`glow-orb-${card.key}`}
                  className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${card.gradient} blur-3xl md:-right-16 md:-top-16 md:h-48 md:w-48`}
                  style={{ opacity: 0.22 }}
                  aria-hidden="true"
                />
              )}

              <div className="relative z-10 flex flex-col gap-3 md:gap-5">
                {/* Top row */}
                <div className="flex items-start justify-between gap-3 md:gap-4">
                  {/* Icon */}
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${card.gradient} p-0.5 shadow-lg transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14 md:h-16 md:w-16 md:rounded-2xl`}
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-galactic-darkGray text-white [&_svg]:h-7 [&_svg]:w-7 sm:[&_svg]:h-8 sm:[&_svg]:w-8 md:rounded-[14px] md:[&_svg]:h-10 md:[&_svg]:w-10">
                      {card.icon}
                    </div>
                  </div>

                  {/* Active indicator */}
                  <motion.div
                    animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br ${card.gradient} shadow-md md:h-7 md:w-7`}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 md:h-4 md:w-4">
                      <path
                        d="M3 8l3.5 3.5L13 4.5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* Copy */}
                <div className="space-y-1.5 md:space-y-2">
                  <p className={`text-[11px] font-semibold uppercase tracking-widest md:text-xs ${card.pillBg.split(" ")[1]}`}>
                    {card.eyebrow}
                  </p>
                  <h3 className="text-lg font-black leading-tight text-white md:text-2xl">
                    {card.heading}
                  </h3>
                  <p className="hidden text-sm leading-relaxed text-gray-400 sm:block md:text-base">
                    {card.description}
                  </p>
                </div>

                {/* Pill CTA */}
                <span
                  className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold transition-colors duration-200 md:px-4 md:py-1.5 ${card.pillBg} ${
                    isActive ? "opacity-100" : "opacity-60 group-hover:opacity-80"
                  }`}
                >
                  {card.pillText}
                  <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Divider arrow hinting at content below */}
      <div className="mt-6 flex flex-col items-center gap-1.5 md:mt-10">
        <p className="text-xs text-gray-600">
          {value === PURPOSE_KEYS.attend ? "Showing: attend experience" : "Showing: organizer experience"}
        </p>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="text-gray-700"
          aria-hidden="true"
        >
          <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
            <path
              d="M5 7l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};
