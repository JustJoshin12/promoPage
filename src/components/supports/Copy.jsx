import React from "react";
import { CheckPill } from "./CheckPill";
import { OPTIONS } from "./options";

export const Copy = ({ selected, setSelected }) => {
  return (
    <div className="w-full">
      <h2 className="mb-3 text-center text-4xl font-bold leading-tight md:text-start md:text-5xl md:leading-tight">
        Elevate Your Anime Journey Today
      </h2>
      <p className="mb-6 text-center text-base leading-relaxed md:text-start md:text-lg md:leading-relaxed">
        Anime Event Discovery revolutionizes your anime experience. Whether
        you're a seasoned fan or new to anime, our platform connects you with
        local events, vibrant communities, and the latest news. Discover
        meetups, conventions, and screenings tailored to your interests. Stay
        informed with real-time updates and personalized recommendations.
        Connect with like-minded enthusiasts and make lasting friendships.Join
        us today and elevate your anime journey!
      </p>
      <div className="mb-6 flex flex-wrap justify-center gap-3 md:justify-start">
        {OPTIONS.map((o, i) => {
          return (
            <CheckPill
              key={o.title}
              index={i}
              selected={i === selected}
              setSelected={setSelected}
            >
              {o.title}
            </CheckPill>
          );
        })}
      </div>
    </div>
  );
};
