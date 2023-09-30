import LayoutSectionContainer from "../LayoutSectionContainer/LayoutSectionContainer";
import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import { TrioBase } from "./Trio.style";
import { Recipe } from "@/generated/graphql";

export default function Trio({ cards }: { cards: Recipe[] }) {
  return (
    <LayoutSectionContainer>
      <TrioBase>
        {cards.map((card, index) => (
          <RecipeCard key={index} data={card} />
        ))}
      </TrioBase>
    </LayoutSectionContainer>
  );
}
