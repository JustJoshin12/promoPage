// src/components/near-you-calendar-teaser-section/NearYouCalendarTeaserSection.jsx
import { motion } from "framer-motion";

const calendarPreviewItems = [
  {
    label: "Today",
    title: "Check what is nearby",
    description: "See events that are close enough to plan around without digging through social feeds.",
    accent: "from-cyan-500 to-blue-600",
  },
  {
    label: "This weekend",
    title: "Compare your options",
    description: "Scan dates, locations, and event styles so the best fit is easy to spot.",
    accent: "from-violet-500 to-fuchsia-600",
  },
  {
    label: "Saved",
    title: "Come back before you go",
    description: "Keep promising events in one place and revisit the details when it is time to head out.",
    accent: "from-amber-500 to-orange-600",
  },
];

const discoverySignals = [
  "Local-first discovery",
  "Date-aware browsing",
  "Saved event planning",
];

export const NearYouCalendarTeaserSection = () => {
  return (
    <section id="near-you" className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-300">
            Near you
          </span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
            Plan your anime week before it passes you by.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-400 md:text-lg">
            The attendee experience should answer three questions fast: what is close, what fits
            your schedule, and what is worth saving for later.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {discoverySignals.map((discoverySignal) => (
              <span
                key={discoverySignal}
                className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-200"
              >
                {discoverySignal}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-zinc-700/70 bg-galactic-darkGray/60 p-4 shadow-2xl shadow-cyan-500/5 backdrop-blur-sm sm:p-6"
        >
          <div
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10">
            <div className="mb-5 rounded-2xl border border-zinc-700/70 bg-zinc-950/40 p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
                    Discovery preview
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-white">Nearby calendar</h3>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-black/30 px-3 py-2 text-sm text-gray-300">
                  <span className="h-2 w-2 rounded-full bg-cyan-300" />
                  Location-aware
                </div>
              </div>
            </div>

            <div className="grid gap-3">
              {calendarPreviewItems.map((calendarPreviewItem, previewIndex) => (
                <motion.article
                  key={calendarPreviewItem.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: previewIndex * 0.08 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-700/60 bg-zinc-950/30 p-4 transition-all duration-300 hover:border-cyan-500/40 hover:bg-zinc-950/50"
                >
                  <div
                    className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${calendarPreviewItem.accent}`}
                    aria-hidden="true"
                  />
                  <div className="flex flex-col gap-3 pl-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
                        {calendarPreviewItem.label}
                      </p>
                      <h4 className="mt-1 text-lg font-bold text-white">
                        {calendarPreviewItem.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-gray-400">
                        {calendarPreviewItem.description}
                      </p>
                    </div>
                    <span
                      className={`inline-flex w-fit shrink-0 rounded-full bg-gradient-to-r ${calendarPreviewItem.accent} px-3 py-1 text-xs font-semibold text-white shadow-lg`}
                    >
                      Preview
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
