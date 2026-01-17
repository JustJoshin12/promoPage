import { ReactLenis } from "lenis/react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useRef } from "react";
import { Image } from "../shared/image";

const SECTION_HEIGHT = 1500;

export const SmoothScrollHero = () => {
  return (
    <div className="bg-galactic-background">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <HeroSection />
        <TitleSection />
      </ReactLenis>
    </div>
  );
};

const TitleSection = () => {
  return (
    <div className="relative flex flex-col items-center overflow-hidden bg-galactic-background px-6 py-10 text-center md:px-10 md:py-20">
      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full bg-purple-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 -bottom-32 h-64 w-64 rounded-full bg-pink-400/20 blur-3xl" />
      
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-xl opacity-60" />
        <Image
          alt="Website logo"
          src="/images/logo2.png"
          className="relative mb-6 h-28 w-28 rounded-full shadow-2xl ring-4 ring-purple-500/30 md:h-32 md:w-32"
        />
      </motion.div>
      
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-400 bg-clip-text text-5xl font-black uppercase tracking-tight text-transparent drop-shadow-lg md:text-7xl lg:text-8xl"
      >
        Nymify
      </motion.h1>
      
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="my-4 h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 md:w-32"
      />
      
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-2 max-w-lg text-base font-medium text-gray-400 md:text-lg"
      >
        Explore exciting upcoming anime events near you, read detailed reviews
        from fellow fans, and stay updated with the latest anime news!
      </motion.p>
    </div>
  );
};



const HeroSection = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-transparent to-galactic-background" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["100%", "100%"]
  );

  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage: "url(/images/animeScene.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="/images/heroImages/cosplayImg.jpg"
        alt="Cosplay event"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="/images/heroImages/gamingImg.jpg"
        alt="Gaming event"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="/images/heroImages/uzumakiImg.jpg"
        alt="Anime artwork"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="/images/heroImages/onePieceImg.jpg"
        alt="One Piece event"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={`${className} rounded-lg shadow-xl`}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

export default SmoothScrollHero;

