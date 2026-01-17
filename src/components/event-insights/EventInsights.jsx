import { motion } from "framer-motion";

const featurePills = [
  { icon: "⚡", label: "Live Engagement Tracking" },
  { icon: "📊", label: "Creator-Owned Data" },
  { icon: "📈", label: "Actionable Metrics" },
  { icon: "✨", label: "No Setup Required" },
];

const dashboardImages = [
  {
    src: "/images/demoImages/analyticsdashboard.png",
    alt: "Analytics Dashboard Overview",
  },
  {
    src: "/images/demoImages/anaylticsdashboard2.png",
    alt: "Event Performance Metrics",
  },
  {
    src: "/images/demoImages/analyticsdashboard3.png",
    alt: "Audience Insights",
  },
];

const DashboardShowcase = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Main large image */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="lg:row-span-2"
      >
        <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-violet-500/10 border border-gray-200/50">
          <img
            src={dashboardImages[0].src}
            alt={dashboardImages[0].alt}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* Smaller stacked images */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-fuchsia-500/10 border border-gray-200/50">
          <img
            src={dashboardImages[1].src}
            alt={dashboardImages[1].alt}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-pink-500/10 border border-gray-200/50">
          <img
            src={dashboardImages[2].src}
            alt={dashboardImages[2].alt}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
};

export const EventInsights = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
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
              Live Analytics
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
          >
            <span className="text-white">Turn Events Into </span>
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              Insights
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-10"
          >
            Track attendance, engagement, and growth with real-time analytics built for creators — not spreadsheets.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {featurePills.map((pill, index) => (
              <motion.div
                key={pill.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 backdrop-blur-sm transition-all duration-300 hover:border-violet-300 hover:bg-white hover:shadow-lg hover:shadow-violet-500/10"
              >
                <span>{pill.icon}</span>
                <span>{pill.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dashboard Images */}
        <DashboardShowcase />
      </div>
    </section>
  );
};
