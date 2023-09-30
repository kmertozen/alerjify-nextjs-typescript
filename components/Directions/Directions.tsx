import React from "react";
import Direction from "./Direction";
import { DirectionsWrapper } from "./Directions.style";
import { Maybe } from "@/generated/graphql";
import { ComponentRecipeDirection } from "@/service/internal/getRecipeBySlug/getRecipeBySlug.generated";

const Directions = ({
  directions,
}: {
  directions?: Maybe<ComponentRecipeDirection>[];
}) => {
  return (
    <DirectionsWrapper>
      {directions &&
        directions.map((direction, index) => (
          <Direction key={index} index={index + 1} direction={direction} />
        ))}
    </DirectionsWrapper>
  );
};

export default Directions;
