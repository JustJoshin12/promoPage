import React from "react";
import {
  FiBell,
  FiCheck,
  FiChevronDown,
  FiList,
  FiMessageCircle,
  FiUser,
} from "react-icons/fi";
import { LogoSmall } from "../navigation/Logo";
import { Image } from "../shared/image";

export const MockupScreen = () => {
  return (
    <div className="absolute bottom-0 left-1/2 h-44 w-[calc(100vw_-_80px)] max-w-[1100px] -translate-x-1/2 overflow-hidden rounded-t-xl bg-zinc-900 p-0.5">
      <Image alt="website screen shot" src="/images/websiteScreenShot.png" className=""/>
    </div>
  );
};
