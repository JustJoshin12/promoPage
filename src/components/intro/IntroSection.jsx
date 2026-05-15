import { motion } from "framer-motion";
import { FiMapPin, FiCalendar, FiBarChart2, FiUsers } from "react-icons/fi";

const features = [
  {
    icon: FiMapPin,
    title: "Discover anime events near you",
  },
  {
    icon: FiCalendar,
    title: "Post events and keep your attendees in the loop",
  },
  {
    icon: FiBarChart2,
    title: "See who's interested, who's attending, and how your events are doing",
  },
  {
    icon: FiUsers,
    title: "Built for fans, creators, and communities",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const IntroSection = () => {
  return (
    <section id="intro" className="relative overflow-hidden bg-galactic-background py-16 md:py-24 lg:py-32">
      {/* Background gradient effects */}
      <div className="pointer-events-none absolute -left-64 top-1/4 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-64 bottom-1/4 h-[500px] w-[500px] rounded-full bg-pink-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-sm font-medium tracking-wide text-gray-400">
                For anime fans & event creators
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2 variants={itemVariants} className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              <span className="text-white">Discover Anime Events. </span>
              <span className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Build Real Connections.
              </span>
            </motion.h2>

            {/* Description */}
            <motion.div variants={itemVariants} className="space-y-4 text-gray-400">
              <p className="text-lg leading-relaxed">
                Nymify is where anime fans find events near them — and where creators post events,
                reach the right people, and actually get them through the door.
              </p>
              <p className="text-base leading-relaxed">
                From conventions and cosplay meetups to watch parties and local gatherings,
                Nymify helps fans find what's happening — and helps creators get the word out
                and bring people together. Post your event, share it with local fans, and see
                who's coming.
              </p>
            </motion.div>

            {/* Feature Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <FeatureCard key={index} icon={feature.icon} title={feature.title} />
              ))}
            </motion.div>

          </motion.div>

          {/* Right Content - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-galactic-background/80 via-transparent to-transparent z-10" />
              <img
                src="/images/ctaImages/dance.jpg"
                alt="Anime event crowd with vibrant lights"
                className="h-[400px] w-full object-cover md:h-[500px] lg:h-[600px]"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full border border-purple-500/20" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full border border-pink-500/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title }) => {
  return (
    <div className="group flex items-start gap-4 rounded-lg border border-gray-800 bg-gray-900/50 p-4 transition-all hover:border-gray-700 hover:bg-gray-900/80">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-red-500/20 to-orange-500/20">
        <Icon className="h-5 w-5 text-red-400" />
      </div>
      <p className="text-sm font-medium text-gray-300">{title}</p>
    </div>
  );
};

export default IntroSection;

