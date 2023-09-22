import LayoutSectionContainer from "../LayoutSectionContainer/LayoutSectionContainer";
import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import { TrioBase } from "./Trio.style";

export default function Trio() {
  return (
    <LayoutSectionContainer>
      <TrioBase>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </TrioBase>
    </LayoutSectionContainer>
  );
}
