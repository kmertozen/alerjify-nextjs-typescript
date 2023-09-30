import Image from "next/image";
import React from "react";
import {
  Description,
  DirectionWrapper,
  Step,
  StepImage,
  StepWrapper,
} from "./Directions.style";
import { ComponentRecipeDirection, Maybe } from "@/generated/graphql";

const Direction = ({
  direction,
  index,
}: {
  direction: Maybe<ComponentRecipeDirection>;
  index: number;
}) => {
  return (
    <DirectionWrapper>
      <StepWrapper>
        <Step>{index}. adım</Step>
      </StepWrapper>
      <Description>
        <StepImage>
          <Image
            src="https://www.alerjify.com/images/recipes/resim4.jpg"
            alt="recipe"
            fill
            style={{ objectFit: "cover" }}
          />
        </StepImage>
        <p>{direction?.text}</p>
      </Description>
    </DirectionWrapper>
  );
};

export default Direction;
