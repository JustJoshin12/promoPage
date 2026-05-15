// src/components/organizer-publishing-checklist-section/OrganizerPublishingChecklistSection.jsx
import { motion } from "framer-motion";

const publishingChecklistPhoto = {
  src: "/images/publishing-img.jpg",
  alt: "Preview image for your event listing",
};

const publishingChecklistItems = [
  {
    title: "Event basics",
    description: "Name, category, date, time, and the clearest location details you can provide.",
  },
  {
    title: "Cover image",
    description: "A strong visual that makes your event easy to recognize in feeds and shares.",
  },
  {
    title: "What attendees should expect",
    description: "Describe the vibe, schedule, age rules, ticket needs, cosplay notes, or venue details.",
  },
  {
    title: "Organizer details",
    description: "Show who is hosting, how fans can identify you, and where they can learn more.",
  },
  {
    title: "Final review",
    description: "Check the listing from an attendee's point of view before it goes live.",
  },
];

export const OrganizerPublishingChecklistSection = () => {
  return (
    <section id="publishing-checklist" className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-zinc-700/70 bg-galactic-darkGray/60 shadow-2xl shadow-fuchsia-500/5 backdrop-blur-sm">
        <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden border-b border-zinc-700/70 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
            <div
              className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative z-10">
              <span className="inline-flex items-center rounded-full bg-fuchsia-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-fuchsia-300">
                Publishing checklist
              </span>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
                Get event-ready before you publish.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-gray-400 md:text-lg">
                A complete listing helps fans trust the details, understand the vibe, and decide
                whether your event fits their plans.
              </p>
              <figure className="mt-8 overflow-hidden rounded-2xl border border-fuchsia-500/20 bg-black/20">
                <div className="relative aspect-[4/3] w-full sm:aspect-[3/2]">
                  <img
                    src={publishingChecklistPhoto.src}
                    alt={publishingChecklistPhoto.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </figure>
            </div>
          </div>

          <div className="p-4 sm:p-6 lg:p-8">
            <div className="space-y-3">
              {publishingChecklistItems.map((checklistItem, checklistIndex) => (
                <motion.article
                  key={checklistItem.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: checklistIndex * 0.08 }}
                  viewport={{ once: true }}
                  className="group flex gap-4 rounded-2xl border border-zinc-700/60 bg-zinc-950/30 p-4 transition-all duration-300 hover:border-fuchsia-500/40 hover:bg-zinc-950/50"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-600 text-sm font-black text-white shadow-lg shadow-fuchsia-500/20">
                    {checklistIndex + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white md:text-lg">{checklistItem.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-400">
                      {checklistItem.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
