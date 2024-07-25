import React from "react";
import { MockupScreen } from "./MockupScreen";
import { Copy } from "./Copy";

export const Hero = () => {
  return (
    <section id="hero" className="bg-cosmic-2 border-b-2 relative flex flex-col items-center justify-center px-12 pb-48 pt-12 md:pt-24">
      <Copy />
      <MockupScreen />
    </section>
  );
};
