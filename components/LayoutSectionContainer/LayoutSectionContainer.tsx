import { LayoutSectionContainerBase } from "./LayoutSectionContainer.style";
import React from "react";

export default function LayoutSectionContainer({
  children,
  flex = false,
}: {
  children: React.ReactNode;
  flex?: boolean;
}) {
  return (
    <LayoutSectionContainerBase flex={flex}>
      {children}
    </LayoutSectionContainerBase>
  );
}
