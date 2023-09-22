import { GlobalStyle } from "@/styles/globalStyle";
import { LayoutBase } from "./Layout.style";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutBase>
      <GlobalStyle />
      {children}
    </LayoutBase>
  );
}
