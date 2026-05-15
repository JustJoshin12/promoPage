import React from "react";
import { AnimatePresence } from "framer-motion";

export const Users = ({ benefitOptions, selected }) => {
  const option = benefitOptions[selected];
  if (!option) {
    return null;
  }
  const { Content } = option;

  return (
    <div className="w-full translate-y-2 rounded-lg bg-zinc-900">
      <AnimatePresence mode="wait">
        <Content key={option.title} />
      </AnimatePresence>
    </div>
  );
};
