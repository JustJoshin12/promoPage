import React from "react";
import { CheckPill } from "./CheckPill";
import { OPTIONS } from "./options";

export const Copy = ({ selected, setSelected }) => {
  return (
    <div className="w-full">
      <h2 className="mb-3 text-center text-4xl font-bold leading-tight text-galactic-text md:text-start md:text-5xl md:leading-tight">
        Find Your People. Show Up for Anime.
      </h2>
      <p className="mb-6 text-center text-base leading-relaxed text-gray-400 md:text-start md:text-lg md:leading-relaxed">
        Whether you've been going to cons for years or just getting into anime,
        Nymify helps you find events worth showing up to — meetups, screenings,
        conventions, and more. Get notified when something's happening near you,
        see what other fans are saying, and actually meet people who are into
        the same stuff. This is where the community comes together.
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
