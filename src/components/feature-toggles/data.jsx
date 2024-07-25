import React from "react";
import { AiFillBug } from "react-icons/ai";
import { BsFillCursorFill } from "react-icons/bs";
import {
  FiAlignLeft,
  FiAnchor,
  FiArrowRight,
  FiCheck,
  FiChevronDown,
  FiChevronRight,
  FiClock,
  FiEdit,
  FiEye,
  FiItalic,
} from "react-icons/fi";
import { Image } from "../shared/image";

const UserAccountComponent = () => {

  return (
    <div className="h-full w-full">
      <Image
        alt="image"
        src="/images/featureImages/loginScreenShot1.png"       
        className="w-92 h-full"
      />
    </div>
  );
};

const KanbanComponent = () => {
  return (
    <div className="h-full w-full">
    <Image
      alt="image"
      src="/images/featureImages/newsScreenShot1.png"
      className="w-92 h-full"
    />
  </div>
  );
};


const GanttComponent = () => {
  return (
    <div className="h-full w-full">
      <Image
        alt="image"
        src="/images/featureImages/eventSubmitScreenShot.png"
        width={500}
        height={420}
        className="w-92 h-full"
      />
    </div>
  );
};

const DocumentationComponent = () => {
  return (
    <div className="h-full w-full">
    <Image
      alt="image"
      src="/images/featureImages/eventFinderScreenShot.png"
      width={500}
      height={420}
      className="w-92 h-full"
    />
  </div>
  );
};

export const data = [
  {
    id: 1,
    title: "User Account",
    Component: UserAccountComponent,
    cardTitle:
      "Join the Ultimate Anime Community Platform and Unlock Exclusive Features!",
    cardSubtitle:
      "Personalized Event Recommendations, Customizable Profiles, Event Bookmarking, Review System and more! Sign up for a free account on Anime Event Discovery and dive into a world of endless possibilities.",
  },
  {
    id: 2,
    title: "News",
    Component: KanbanComponent,
    cardTitle: "Stay Updated with the Latest Anime News and Announcements!",
    cardSubtitle:
      "Curated content allowing users to enjoy handpicked news articles, with a interactive news feed. Get in-depth reviews and insights on whats popping in the anime scene.",
  },
  {
    id: 3,
    title: "Event Organizer",
    Component: GanttComponent,
    cardTitle: "Become an Anime Event Organizer and Share Your Passion!",
    cardSubtitle:
      " By becoming an organizer, you’ll gain access to promotional tools, community engagement, analytics and insights. Join our network of passionate organizers and make your mark in the anime community.",
  },
  {
    id: 4,
    title: "Event Finder",
    Component: DocumentationComponent,
    cardTitle: "Discover Anime Events Near You with Ease!",
    cardSubtitle:
      " As a user, you’ll benefit from location-based search, keyword search, personalized recommendations. Whether you're looking for local gatherings or major conventions, we’ve got you covered!",
  },
];
