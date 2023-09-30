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
        {direction?.image?.data && (
          <StepImage>
            <img
              src={direction?.image?.data?.attributes?.url}
              alt={`${index}. adım fotoğrafı`}
              style={{ objectFit: "cover" }}
            />
          </StepImage>
        )}
        <p>{direction?.text}</p>
      </Description>
    </DirectionWrapper>
  );
};

export default Direction;
