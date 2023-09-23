import React from "react";
import { SectionTitleBase } from "./SectionTitle.style";

export default function SectionTitle({
  title,
  level,
  iconPrefix,
}: {
  title: string;
  level?: string;
  iconPrefix?: React.ReactNode;
}) {
  const Tag = level ? (`h${level}` as keyof JSX.IntrinsicElements) : "h2";
  return (
    <SectionTitleBase>
      <Tag>
        {iconPrefix}
        {title}
      </Tag>
    </SectionTitleBase>
  );
}
