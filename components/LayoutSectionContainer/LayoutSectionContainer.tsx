import {
  LayoutSectionContainerBase,
  TitleWrapper,
} from "./LayoutSectionContainer.style";
import React from "react";

export default function LayoutSectionContainer({
  children,
  flex = false,
  headline = false,
  bgcolor,
  title,
}: {
  children?: React.ReactNode;
  flex?: boolean;
  headline?: boolean;
  bgcolor?: string;
  title?: string;
}) {
  return (
    <LayoutSectionContainerBase
      flex={flex}
      headline={headline}
      bgcolor={bgcolor}
    >
      {title && (
        <TitleWrapper>
          <h1>{title}</h1>
        </TitleWrapper>
      )}
      {children}
    </LayoutSectionContainerBase>
  );
}
