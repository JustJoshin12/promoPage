import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon } from "@heroicons/react/24/outline";

const organizerFaqItems = [
  {
    question: "How do I publish an event on Nymify?",
    answer:
      "Go to Create Event, add your title, date, location, and event details, then publish. Your listing appears where local anime fans browse for events.",
  },
  {
    question: "Can I update event details after publishing?",
    answer:
      "Yes. You can edit your event at any time to update schedule changes, venue info, ticket links, or additional announcements.",
  },
  {
    question: "How do I know if my event is performing well?",
    answer:
      "Use the analytics view to track interest, attendance behavior, and engagement trends so you can improve your next event strategy.",
  },
  {
    question: "Can I run different kinds of anime events?",
    answer:
      "Yes. Nymify supports conventions, screenings, cosplay meetups, gaming nights, and community gatherings with the same organizer workflow.",
  },
  {
    question: "Do attendees see updates if details change?",
    answer:
      "Yes. Event pages reflect your latest updates so attendees always see current details before they decide to attend.",
  },
];

export const OrganizerFaqSection = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);

  const toggleFaqItem = (faqIndex) => {
    setActiveFaqIndex((currentActiveIndex) =>
      currentActiveIndex === faqIndex ? -1 : faqIndex,
    );
  };

  return (
    <section id="organizer-faq" className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="inline-flex items-center rounded-full bg-fuchsia-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-fuchsia-300">
          Organizer FAQ
        </span>
        <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
          Questions organizers ask most
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 md:text-lg">
          Clear answers for running and improving events on Nymify.
        </p>
      </div>

      <div className="space-y-3">
        {organizerFaqItems.map((organizerFaqItem, faqIndex) => {
          const panelId = `organizer-faq-panel-${faqIndex}`;
          const buttonId = `organizer-faq-button-${faqIndex}`;
          const isOpen = activeFaqIndex === faqIndex;

          return (
            <article
              key={organizerFaqItem.question}
              className="overflow-hidden rounded-2xl border border-zinc-700/70 bg-galactic-darkGray/60 backdrop-blur-sm"
            >
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleFaqItem(faqIndex)}
                className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left md:px-6"
              >
                <span className="min-w-0 flex-1 text-base font-semibold text-white md:text-lg">
                  {organizerFaqItem.question}
                </span>
                <span
                  className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-fuchsia-300 transition-transform duration-200 ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                  aria-hidden="true"
                >
                  <PlusIcon className="h-4 w-4" strokeWidth={2} />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-zinc-700/70 px-5 py-4 text-sm leading-relaxed text-gray-300 md:px-6 md:text-base">
                      {organizerFaqItem.answer}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </section>
  );
};
