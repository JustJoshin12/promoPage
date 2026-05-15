import React from "react";
import { CheckPill } from "./CheckPill";

const COPY_BY_PURPOSE = {
  attend: {
    title: "Find Your People. Show Up for Anime.",
    body:
      "Whether you've been going to cons for years or just getting into anime, Nymify helps you find events worth showing up to — meetups, screenings, conventions, and more. Get notified when something's happening near you, see what other fans are saying, and actually meet people who are into the same stuff.",
  },
  create: {
    title: "Reach Fans Who Actually Show Up.",
    body:
      "Posting in endless group chats shouldn't be your promotion strategy. Nymify puts your event in front of local anime fans who are looking for something to do — clear listings, real interest signals, and insight into what's working so your next event fills up faster.",
  },
};

export const Copy = ({ purpose, benefitOptions, selected, setSelected }) => {
  const copy = COPY_BY_PURPOSE[purpose] ?? COPY_BY_PURPOSE.attend;

  return (
    <div className="w-full">
      <h2 className="mb-3 text-center text-4xl font-bold leading-tight text-galactic-text md:text-start md:text-5xl md:leading-tight">
        {copy.title}
      </h2>
      <p className="mb-6 text-center text-base leading-relaxed text-gray-400 md:text-start md:text-lg md:leading-relaxed">
        {copy.body}
      </p>
      <div className="mb-6 flex flex-wrap justify-center gap-3 md:justify-start">
        {benefitOptions.map((option, optionIndex) => {
          return (
            <CheckPill
              key={option.title}
              index={optionIndex}
              selected={optionIndex === selected}
              setSelected={setSelected}
            >
              {option.title}
            </CheckPill>
          );
        })}
      </div>
    </div>
  );
};
