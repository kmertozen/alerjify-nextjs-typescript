import { TrendList, TrendsBase } from "./Trends.style";

import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Recipe } from "@/generated/graphql";

export default function Trends({ trends }: { trends: Recipe[] }) {
  return (
    <TrendsBase>
      <SectionTitle title="En Popüler Tarifler" />
      <TrendList>
        {trends.map((trend, index) => (
          <RecipeCard
            key={index}
            size={index === 0 ? "large" : "medium"}
            data={trend}
          />
        ))}
      </TrendList>
    </TrendsBase>
  );
}
