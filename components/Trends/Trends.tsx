import { TrendList, TrendsBase } from "./Trends.style";

import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function Trends() {
  return (
    <TrendsBase>
      <SectionTitle title="En Yeni Tarifler" />
      <TrendList>
        <RecipeCard size="large" />
        <RecipeCard size="medium" />
        <RecipeCard size="medium" />
        <RecipeCard size="medium" />
        <RecipeCard size="medium" />
      </TrendList>
    </TrendsBase>
  );
}
