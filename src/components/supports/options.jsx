import { MotionConfig, motion } from "framer-motion";

const Testimonial = ({ imgSrc, name, content }) => (
  <MotionConfig
    transition={{
      duration: 0.2,
      ease: "easeInOut",
    }}
  >
    <motion.div
      initial={{
        y: 0,
      }}
      animate={{
        y: -8,
      }}
      exit={{
        y: 0,
      }}
      className="w-full overflow-hidden rounded-lg border-2 border-zinc-900 bg-white p-8 md:p-12"
    >
      <div className="mb-6 flex items-center gap-6">
        <div className="rounded-lg bg-zinc-900">
          <motion.img
            initial={{
              rotate: "0deg",
              opacity: 0,
            }}
            animate={{
              rotate: "3deg",
              opacity: 1,
            }}
            exit={{
              rotate: "0deg",
              opacity: 0,
            }}
            src={imgSrc}
            alt="avatar"
            className="size-24 rounded-lg border-2 border-zinc-900 bg-indigo-200"
          />
        </div>
        <motion.div
          initial={{
            y: 12,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -12,
            opacity: 0,
          }}
        >
          <span className="mb-1.5 block text-3xl font-medium">{name}</span>
        </motion.div>
      </div>
      <motion.p
        initial={{
          y: 12,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: -12,
          opacity: 0,
        }}
        className="text-xl leading-relaxed"
      >
        {content}
      </motion.p>
    </motion.div>
  </MotionConfig>
);

export const OPTIONS = [
  {
    title: "Enthusiasts",
    Content: () => (
      <Testimonial
        imgSrc="/images/animeIconImages/icon1.png"
        name="Enthusiasts"
        content="Find local meetups, conventions, and screenings that let you immerse yourself in the anime culture."
      />
    ),
  },
  {
    title: "Event Organizers",
    Content: () => (
      <Testimonial
        imgSrc="/images/animeIconImages/icon3.webp"
        name="Event Organizers"
        content="Easily promote your events, ensuring they reach the right audience and create memorable experiences for attendees."
      />
    ),
  },
  {
    title: "Finding Local Fans",
    Content: () => (
      <Testimonial
        imgSrc="/images/animeIconImages/icon4.jpg"
        name="Finding Local Fans"
        content="It can be hard to meet fellow anime enthusiasts in your area. Our platform helps you find local events and meetups where you can make new friends."
      />
    ),
  },
  {
    title: "Discover New Interests",
    Content: () => (
      <Testimonial
        imgSrc="/images/animeIconImages/icon5.png"
        name="Discover New Interests"
        content="Explore new genres and events that you might not have considered before."
      />
    ),
  },
  {
    title: "Lack of Information",
    Content: () => (
      <Testimonial
        imgSrc="/images/animeIconImages/icon7.jpg"
        name="Lack of Information"
        content="Finding all the details about an event can be challenging. Our platform provides comprehensive event listings."
      />
    ),
  },
  {
    title: "User Reviews",
    Content: () => (
      <Testimonial
        imgSrc="/images/animeIconImages/icon6.jpg"
        name="User Reviews."
        content="Read reviews from other attendees to know what to expect."
      />
    ),
  },
  {
    title: "Staying Current",
    Content: () => (
      <Testimonial
        imgSrc="/images/animeIconImages/icon9.png"
        name="Staying Current"
        content="Keeping up with anime news can be time-consuming. Our platform consolidates news in one place."
      />
    ),
  },
  {
    title: "Personalized Choices",
    Content: () => (
      <Testimonial
        imgSrc="/images/animeIconImages/icon.png"
        name="Personalized Choices"
        content=" With so many events, it can be hard to decide which to attend. Personalized recommendations simplify this process."
      />
    ),
  },
  {
    title: "Event Analytics",
    Content: () => (
      <Testimonial
        imgSrc="/images/animeIconImages/icon8.png"
        name="Event Analytics"
        content="Track event performance and optimize future events."
      />
    ),
  },
];
