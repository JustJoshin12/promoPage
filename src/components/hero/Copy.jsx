import React from "react";
import { Button } from "../shared/Button";
import { Image } from "../shared/image";
import { animateScroll as scroll, scroller } from "react-scroll";

export const Copy = () => {
  const scrollToFormSection = () => {
    const section = "pre-register";
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <div className="mb-1.5 ">
        <Image alt="Logo" src="/images/logo.jpg" className="h-64 w-64" />
      </div>
      <h1 className="max-w-4xl text-center text-4xl font-black leading-[1.15] md:text-7xl md:leading-[1.15]">
        Anime Event Discovery
      </h1>
      <p className="mx-auto my-4 max-w-3xl text-center text-base leading-relaxed md:my-6 md:text-2xl md:leading-relaxed">
        Explore exciting upcoming anime events near you, read detailed reviews
        from fellow fans, and stay updated with the latest anime news and
        releases. Join our community today and never miss out on the anime
        action!
      </p>
      <Button onClick={scrollToFormSection}>
        <span className="font-bold">pre-register now! </span>
      </Button>
    </>
  );
};
