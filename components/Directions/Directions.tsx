import React from "react";
import Direction from "./Direction";
import { DirectionsWrapper } from "./Directions.style";

const Directions = () => {
  return (
    <DirectionsWrapper>
      <Direction />
      <Direction />
      <Direction />
      <Direction />
    </DirectionsWrapper>
  );
};

export default Directions;
