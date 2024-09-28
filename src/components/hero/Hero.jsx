import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { AiFillApple, AiFillFileImage } from "react-icons/ai";
import { useRef } from "react";
import { Image } from "../shared/image";

export const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <>
      {/* <Nav scrollYProgress={scrollYProgress} /> */}
      <section ref={targetRef} id="hero" className="h-[350vh] bg-cosmic-5 pb-10">
        <div className="sticky top-0 z-0 grid h-screen grid-cols-3 grid-rows-3 gap-4 overflow-hidden p-4">
          <Copy scrollYProgress={scrollYProgress} />
          <Images scrollYProgress={scrollYProgress} />
          <Circles />
        </div>
      </section>
    </>
  );
};

const Nav = ({ scrollYProgress }) => {
  const background = useTransform(scrollYProgress, (i) =>
    i === 1 ? "rgb(13,10,9)" : "transparent"
  );

  return (
    <motion.nav
      style={{ background }}
      className="fixed left-0 right-0 top-0 z-40 flex items-center justify-between px-4 py-2 transition-colors"
    >
      <div className="flex items-center gap-2 text-lg text-white">
        <AiFillFileImage className="text-xl" />
        <span className="font-bold">PIXII</span>
      </div>
      <button className="flex items-center gap-1.5 bg-white px-3 py-1.5 text-sm font-semibold text-black transition-opacity hover:opacity-90">
        <AiFillApple className="text-lg" />
        <span>Download</span>
      </button>
    </motion.nav>
  );
};

const Copy = ({ scrollYProgress }) => {
  const copyScale = useTransform(scrollYProgress, [0, 0.75], [1, 0.5]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const copyY = useTransform(scrollYProgress, [0, 0.75], ["0%", "7.5%"]);
  const image = "/images/logo.jpg"

  return (
    <motion.div
      style={{
        scale: copyScale,
        opacity: copyOpacity,
        y: copyY,
      }}
      className="absolute z-30 flex h-screen w-full flex-col items-center justify-center px-8"
    >
      
      <Image
      alt={`Image of website logo`}
      src={image}
      className="w-40 h-40 mb-2"
      />
      <h1 className="max-w-xl my-2 text-center text-5xl font-bold text-stone-950 md:text-7xl">
        Anime Event Discovery
      </h1>
      <p className="my-6 max-w-xl text-center font-bold text-sm text-stone-900 md:text-base lg:text-lg">
        Explore exciting upcoming anime events near you, read detailed reviews
        from fellow fans, and stay updated with the latest anime news and
        releases. Join our community today and never miss out on the anime
        action!
      </p>
      {/* <div className="flex items-center gap-4">
        <button className="bg-violet-600 px-4 py-2 font-medium text-white transition-colors hover:bg-violet-600">
          Try for free
        </button>
        <button className="bg-transparent px-4 py-2 font-medium text-stone-950 transition-colors hover:bg-stone-200">
          Learn about us
        </button>
      </div> */}
    </motion.div>
  );
};

const Images = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const image1Offset = useTransform(scrollYProgress, [0, 1], ["-35%", "0%"]);

  const image2OffsetX = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);
  const image2OffsetY = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  const image3OffsetX = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
  const image3OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  const image4OffsetX = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
  const image4OffsetY = useTransform(scrollYProgress, [0, 1], ["-145%", "0%"]);

  const image5OffsetX = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
  const image5OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  const image6OffsetX = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
  const image6OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  const heroImageSources = {
    image1: "/images/heroImages/cosplayImg.jpg",
    image2: "/images/heroImages/cosplayImg2.jpg",
    image3: "/images/heroImages/gamingImg.jpg",
    image4: "/images/heroImages/jjkImg.jpg",
    image5: "/images/heroImages/musicImg.png",
    image6: "/images/heroImages/uzumakiImg.jpg",
  }

  return (
    <>
      <motion.div
        className="relative z-10 col-span-2"
        style={{
          backgroundImage:  `url(${heroImageSources.image3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image1Offset,
          y: image1Offset,
        }}
      />
      <motion.div
        className="relative z-10 row-span-2"
        style={{
          backgroundImage:
            `url(${heroImageSources.image1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image2OffsetX,
          y: image2OffsetY,
        }}
      />

      <motion.div
        className="relative z-10 row-span-2"
        style={{
          backgroundImage:
            `url(${heroImageSources.image6})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image3OffsetX,
          y: image3OffsetY,
        }}
      />
      <motion.div
        className="relative z-10"
        style={{
          backgroundImage:
           `url(${heroImageSources.image2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image4OffsetX,
          y: image4OffsetY,
        }}
      />

      <motion.div
        className="relative z-10"
        style={{
          backgroundImage:
           `url(${heroImageSources.image4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image5OffsetX,
          y: image5OffsetY,
        }}
      />
      <motion.div
        className="relative z-10"
        style={{
          backgroundImage:
           `url(${heroImageSources.image5})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image6OffsetX,
          y: image6OffsetY,
        }}
      />
    </>
  );
};

const Circles = () => (
  <>
    <div className="absolute left-0 top-0 z-0 aspect-square w-3/5 min-w-[400px] max-w-[850px] -translate-x-[50%] -translate-y-[50%] rounded-full border-[8px] border-slate-200" />
    <div className="absolute bottom-0 right-0 z-0 aspect-square w-1/2 min-w-[300px] max-w-[600px] translate-x-[50%] translate-y-[50%] rounded-full border-[8px] border-slate-200" />
  </>
);

// export const Hero = () => {
//   return (
//     <section id="hero" className="bg-cosmic-2 border-b-2 relative flex flex-col items-center justify-center px-12 pb-48 pt-12 md:pt-24">
//       <Copy />
//       <MockupScreen />
//     </section>
//   );
// };
