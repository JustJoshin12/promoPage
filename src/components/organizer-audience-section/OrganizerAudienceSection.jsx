// src/components/organizer-audience-section/OrganizerAudienceSection.jsx
import { motion } from "framer-motion";

const organizerAudiences = [
  {
    title: "First-time meetup hosts",
    description:
      "For fans planning a watch party, cosplay meetup, gaming night, or small local hangout who need an easy way to get discovered.",
    stat: "Small starts",
    gradient: "from-fuchsia-500 to-violet-600",
  },
  {
    title: "Community builders",
    description:
      "For clubs, creators, and local anime groups trying to keep fans engaged beyond social posts and scattered group chats.",
    stat: "Repeat crowds",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "Convention teams",
    description:
      "For larger organizers who need polished event pages, attendee interest signals, and better visibility with anime fans.",
    stat: "Bigger reach",
    gradient: "from-violet-500 to-indigo-600",
  },
];

export const OrganizerAudienceSection = () => {
  return (
    <section id="organizer-audience" className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-fuchsia-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-fuchsia-300">
            Who it's for
          </span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
            Built for anime organizers at every stage.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-400 md:text-lg">
            Whether you are hosting your first local meetup or promoting a full convention,
            Nymify helps the right anime fans find the event and decide to show up.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
          {organizerAudiences.map((organizerAudience, audienceIndex) => (
            <motion.article
              key={organizerAudience.title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: audienceIndex * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-700/70 bg-galactic-darkGray/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-fuchsia-500/40 hover:shadow-xl hover:shadow-fuchsia-500/10"
            >
              <div
                className={`absolute -right-12 -top-12 h-28 w-28 rounded-full bg-gradient-to-br ${organizerAudience.gradient} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20`}
                aria-hidden="true"
              />
              <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between lg:flex-row">
                <div>
                  <h3 className="text-xl font-bold text-white">{organizerAudience.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {organizerAudience.description}
                  </p>
                </div>
                <span
                  className={`inline-flex w-fit shrink-0 rounded-full bg-gradient-to-r ${organizerAudience.gradient} px-3 py-1 text-xs font-semibold text-white shadow-lg`}
                >
                  {organizerAudience.stat}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
