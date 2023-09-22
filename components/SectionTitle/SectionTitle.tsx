import React from "react";
import { SectionTitleBase } from "./SectionTitle.style";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <SectionTitleBase>
      <h2>{title}</h2>
    </SectionTitleBase>
  );
}
