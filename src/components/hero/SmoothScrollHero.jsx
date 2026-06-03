import { ReactLenis } from "lenis/react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useRef, useState, useEffect } from "react";
import { Image } from "../shared/image";

const DESKTOP_SECTION_HEIGHT = 1500;
const MOBILE_SECTION_HEIGHT = 900;

export const SmoothScrollHero = () => {
  const isMobile = useIsMobile();
  const sectionHeight = isMobile ? MOBILE_SECTION_HEIGHT : DESKTOP_SECTION_HEIGHT;

  return (
    <div id="hero" className="bg-galactic-background">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <HeroSection sectionHeight={sectionHeight} />
        <TitleSection />
      </ReactLenis>
    </div>
  );
};

const TitleSection = () => {
  return (
    <div className="flex flex-col items-center bg-galactic-background px-6 pb-10 pt-2 text-center md:px-10 md:py-20">
      <Image
        alt="Website logo"
        src="/images/logo2.png"
        className="mb-4 h-24 w-24 rounded-full shadow-lg shadow-galactic-primary/50"
      />
      <h1 className="text-4xl font-black uppercase tracking-tight text-galactic-accent drop-shadow-lg md:text-6xl lg:text-7xl">
        Nymify
      </h1>
      <h2 className="text-2xl font-bold py-2 md:py-4">Discover anime events. Create anime culture.</h2>
      <p className="mt-4 max-w-md text-sm font-semibold text-galactic-text md:text-base">
        Anime events shouldn’t be this hard to find — or this hard to host.
        Nymify helps fans find what's happening nearby — and helps creators fill the room.
      </p>
    </div>
  );
};



const HeroSection = ({ sectionHeight }) => {
  return (
    <div
      style={{ height: `calc(${sectionHeight}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage sectionHeight={sectionHeight} />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 pb-4 bg-galactic-background" />
    </div>
  );
};

const CenterImage = ({ sectionHeight }) => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, sectionHeight], [25, 0]);
  const clip2 = useTransform(scrollY, [0, sectionHeight], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, sectionHeight + 500],
    ["100%", "100%"]
  );

  const opacity = useTransform(
    scrollY,
    [sectionHeight, sectionHeight + 500],
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

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

const ParallaxImages = () => {
  const isMobile = useIsMobile();
  const scale = isMobile ? 0.35 : 1;

  return (
    <div className="mx-auto max-w-5xl px-4 pt-[100px] md:pt-[200px]">
      <ParallaxImg
        src="/images/cosplayImages/img2.jpg"
        alt="Cosplay event"
        start={-200 * scale}
        end={200 * scale}
        className="w-1/3"
      />
      <ParallaxImg
        src="/images/heroImages/gamingImg.jpg"
        alt="Gaming event"
        start={200 * scale}
        end={-250 * scale}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="/images/heroImages/uzumakiImg.jpg"
        alt="Anime artwork"
        start={-200 * scale}
        end={200 * scale}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="/images/cosplayImages/img1.jpg"
        alt="One Piece event"
        start={0}
        end={-500 * scale}
        className="ml-6 md:ml-24 w-5/12"
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

