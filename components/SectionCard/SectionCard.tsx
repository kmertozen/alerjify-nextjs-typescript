import React, { ReactNode } from "react";
import { SectionCardBase } from "./SectionCard.style";

const SectionCard = ({ children }: { children?: ReactNode }) => {
  return <SectionCardBase>{children}</SectionCardBase>;
};

export default SectionCard;
