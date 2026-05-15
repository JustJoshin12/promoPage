import React, { useState } from "react";
import { Users } from "./Users";
import { Copy } from "./Copy";
import { ATTEND_BENEFIT_OPTIONS, CREATE_BENEFIT_OPTIONS } from "./options";

export const AudienceBenefitsSection = ({ purpose = "attend" }) => {
  const benefitOptions = purpose === "create" ? CREATE_BENEFIT_OPTIONS : ATTEND_BENEFIT_OPTIONS;
  const sectionId = purpose === "create" ? "organizer-benefits" : "attendee-benefits";
  const [selected, setSelected] = useState(0);

  return (
    <section id={sectionId} className="relative mx-auto flex max-w-6xl flex-col items-center gap-4 px-2 md:flex-row md:gap-8 md:px-4">
      <Copy
        purpose={purpose}
        benefitOptions={benefitOptions}
        selected={selected}
        setSelected={setSelected}
      />
      <Users benefitOptions={benefitOptions} selected={selected} />
    </section>
  );
};
