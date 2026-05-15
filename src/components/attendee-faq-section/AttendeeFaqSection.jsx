import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon } from "@heroicons/react/24/outline";

const attendeeFaqItems = [
  {
    question: "Do I need an account to browse events?",
    answer:
      "You can explore public event listings right away. Creating an account helps you save events, track updates, and manage reminders in one place.",
  },
  {
    question: "How do I find events near me?",
    answer:
      "Use location, date, and event-type filters to narrow down listings. Nymify is built to make local anime discovery fast and clear.",
  },
  {
    question: "Can I save events and get reminders?",
    answer:
      "Yes. Save events you are interested in so they are easy to revisit, and use reminders to avoid missing important dates.",
  },
  {
    question: "How can I tell if an event is worth attending?",
    answer:
      "Check event details, posted updates, and attendee feedback to evaluate quality, vibe, and fit before committing.",
  },
  {
    question: "What if event details change after I save it?",
    answer:
      "Event pages update with the latest organizer information so you can always confirm the most current schedule and venue details.",
  },
];

export const AttendeeFaqSection = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);

  const toggleFaqItem = (faqIndex) => {
    setActiveFaqIndex((currentActiveIndex) =>
      currentActiveIndex === faqIndex ? -1 : faqIndex,
    );
  };

  return (
    <section id="attendee-faq" className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-300">
          Attendee FAQ
        </span>
        <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
          Questions attendees ask most
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 md:text-lg">
          Everything you need to discover, save, and confidently attend anime events.
        </p>
      </div>

      <div className="space-y-3">
        {attendeeFaqItems.map((attendeeFaqItem, faqIndex) => {
          const panelId = `attendee-faq-panel-${faqIndex}`;
          const buttonId = `attendee-faq-button-${faqIndex}`;
          const isOpen = activeFaqIndex === faqIndex;

          return (
            <article
              key={attendeeFaqItem.question}
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
                  {attendeeFaqItem.question}
                </span>
                <span
                  className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-cyan-300 transition-transform duration-200 ${
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
                      {attendeeFaqItem.answer}
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
