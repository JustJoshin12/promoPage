import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import {
  FiActivity,
  FiBarChart2,
  FiCalendar,
  FiCheckCircle,
  FiCompass,
  FiHelpCircle,
  FiHome,
  FiList,
  FiMapPin,
  FiSend,
  FiStar,
  FiTarget,
  FiTool,
  FiUsers,
} from "react-icons/fi";

const commonLinks = [
  { section: "hero", text: "Home", Icon: FiHome },
  { section: "intro", text: "About", Icon: FiStar },
  { section: "choose-path", text: "Choose Path", Icon: FiTarget },
];

const audienceNavigation = {
  attend: {
    eyebrow: "Attendee route",
    title: "Find your next anime plan",
    description: "Jump to discovery, nearby planning, event types, and attendee answers.",
    accent: "from-cyan-500 to-blue-600",
    textColor: "text-cyan-200",
    links: [
      { section: "event-discovery", text: "Discover", Icon: FiCompass },
      { section: "how-discovery-works", text: "How It Works", Icon: FiList },
      { section: "near-you", text: "Near You", Icon: FiMapPin },
      { section: "event-types", text: "Event Types", Icon: FiCalendar },
      { section: "attendee-benefits", text: "Benefits", Icon: FiUsers },
      { section: "attendee-faq", text: "FAQ", Icon: FiHelpCircle },
    ],
  },
  create: {
    eyebrow: "Organizer route",
    title: "Build events fans can find",
    description: "Jump to organizer tools, audience fit, analytics, publishing help, and answers.",
    accent: "from-fuchsia-500 to-violet-600",
    textColor: "text-fuchsia-200",
    links: [
      { section: "organizer-tools", text: "Tools", Icon: FiTool },
      { section: "organizer-audience", text: "Audience", Icon: FiUsers },
      { section: "organizer-benefits", text: "Benefits", Icon: FiActivity },
      { section: "analytics", text: "Analytics", Icon: FiBarChart2 },
      { section: "publishing-checklist", text: "Publish", Icon: FiCheckCircle },
      { section: "organizer-faq", text: "FAQ", Icon: FiHelpCircle },
    ],
  },
};

const FooterNav = ({ purpose }) => {
  const navigationConfig = audienceNavigation[purpose] ?? audienceNavigation.attend;
  const footerLinks = [...commonLinks, ...navigationConfig.links, { section: "waitlist", text: "Waitlist", Icon: FiSend }];

  return (
    <motion.nav
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px" }}
      aria-label={`${navigationConfig.eyebrow} footer navigation`}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/80 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-6"
    >
      <div
        className={`pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-gradient-to-br ${navigationConfig.accent} opacity-20 blur-3xl`}
        aria-hidden="true"
      />
      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-md">
          <span className={`text-xs font-semibold uppercase tracking-[0.18em] ${navigationConfig.textColor}`}>
            {navigationConfig.eyebrow}
          </span>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-white md:text-3xl">
            {navigationConfig.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-400">
            {navigationConfig.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5 lg:max-w-2xl lg:justify-end">
          {footerLinks.map((footerLink) => (
            <FooterLink key={footerLink.section} {...footerLink} accent={navigationConfig.accent} />
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

const FooterLink = ({ section, text, Icon, accent }) => {
  return (
    <ScrollLink
      to={section}
      smooth={true}
      duration={500}
      offset={-24}
      spy={true}
      activeClass="border-white/30 bg-white/15 text-white"
      className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-semibold text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
    >
      <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br ${accent} text-white shadow-lg shadow-black/20`}>
        <Icon className="h-3.5 w-3.5" />
      </span>
      <span>{text}</span>
    </ScrollLink>
  );
};

export const Footer = ({ purpose = "attend" }) => {
  return (
    <footer id="footer" className="bg-galactic-background px-4 pb-10 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <FooterNav purpose={purpose} />
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center md:flex-row md:text-left">
          <p className="text-sm font-semibold text-white">Nymify</p>
          <p className="text-xs leading-5 text-gray-500">
            &copy; 2026 Nymify, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
