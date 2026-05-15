import { motion } from "framer-motion";

const discoverySteps = [
  {
    stepLabel: "Step 1",
    title: "Browse what's happening",
    description:
      "Open the event feed to instantly see anime meetups, conventions, screenings, and themed nights in one place.",
    imageSrc: "/images/anime-night-out-img2.png",
    imageAlt: "Event feed showing multiple anime events",
  },
  {
    stepLabel: "Step 2",
    title: "Filter for your vibe",
    description:
      "Narrow by date, location, and event style so you can quickly find events that fit your schedule and interests.",
    imageSrc: "/images/filtered-events.png",
    imageAlt: "Event details and filters for anime event discovery",
  },
  {
    stepLabel: "Step 3",
    title: "Save and get reminders",
    description:
      "Save promising events and stay on top of upcoming plans with reminder-friendly event pages you can revisit anytime.",
    imageSrc: "/images/saved-events.png",
    imageAlt: "Highlighted anime event page ready to save and revisit",
  },
];

export const HowDiscoveryWorksSection = () => {
  return (
    <section id="how-discovery-works" className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-300">
          Attendee journey
        </span>
        <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
          How discovery works
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 md:text-lg">
          Find the right anime event in minutes: browse, filter, then save your plan.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {discoverySteps.map((discoveryStep, stepIndex) => (
          <motion.article
            key={discoveryStep.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: stepIndex * 0.1 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-2xl border border-zinc-700/70 bg-galactic-darkGray/60 shadow-lg shadow-black/20 backdrop-blur-sm"
          >
            <div className="aspect-video overflow-hidden border-b border-zinc-700/70">
              <img
                src={discoveryStep.imageSrc}
                alt={discoveryStep.imageAlt}
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="space-y-3 p-5">
              <span className="inline-flex rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-200">
                {discoveryStep.stepLabel}
              </span>
              <h3 className="text-xl font-bold text-white">{discoveryStep.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{discoveryStep.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
