import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowPathIcon,
  CalendarIcon,
  NewspaperIcon,
} from "@heroicons/react/24/outline";

export const TextParallaxContentExample = () => {
  return (
    <section id="forYou" className="bg-cosmic-1 pt-10">
      <TextParallaxContent
        imgUrl="/images/image.jpg"
        subheading="Unite"
        heading="Built for all of us."
      >
        <ExampleContent
          title="Bringing the Anime Community Together"
          context="At Anime Event Discovery, our mission is to bring anime fans together, creating a space where every enthusiast feels at home. We celebrate the love for anime by connecting people, sharing experiences, and building a vibrant, united community."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/images/image2.jpg"
        subheading="Quality"
        heading="Never compromise."
      >
        <ExampleContent
          title="Excellence in Every Detail"
          context="We are committed to delivering the highest quality experience for our users. We never compromise on our standards, ensuring that every event, update, and interaction meets the expectations of our vibrant anime community."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/images/image4.jpg"
        subheading="Innovative"
        heading="Dress for the best."
      >
        <ExampleContent title="Embrace Innovation: Always at the Forefront" context="We're dedicated to providing you with the latest features and tools to elevate your anime experience.We continually strive to enhance your experience, ensuring you always have the best at your fingertips." />
      </TextParallaxContent>
    </section>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = ({ title, context }) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">{title}</h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-galactic-background md:text-2xl">{context}</p>
      <IconColumn />
    </div>
  </div>
);

const perks = [
  {
    name: "Event Bookmarking",
    icon: CalendarIcon,
  },
  {
    name: "Advanced Search and Filters",
    icon: ArrowPathIcon,
  },
  {
    name: "Up-to-Date News and Announcements",
    icon: NewspaperIcon,
  },
];

const IconColumn = () => {
  return (
    <div className="">
      <h2 className="sr-only">Our perks</h2>
      <div className="mx-auto max-w-7xl divide-y divide-gray-200 lg:flex lg:justify-center lg:divide-x lg:divide-y-0 lg:py-8">
        {perks.map((perk, perkIdx) => (
          <div key={perkIdx} className="py-8 lg:w-1/3 lg:flex-none lg:py-0">
            <div className="mx-auto flex max-w-xs items-center px-4 lg:max-w-none lg:px-8">
              <perk.icon
                aria-hidden="true"
                className="h-8 w-8 flex-shrink-0 text-indigo-600"
              />
              <div className="ml-4 flex flex-auto flex-col-reverse">
                <h3 className="font-medium text-gray-900">{perk.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
