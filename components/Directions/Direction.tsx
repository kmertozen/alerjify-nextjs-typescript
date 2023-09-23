import Image from "next/image";
import React from "react";
import {
  Description,
  DirectionWrapper,
  Step,
  StepImage,
  StepWrapper,
} from "./Directions.style";

const Direction = () => {
  return (
    <DirectionWrapper>
      <StepWrapper>
        <Step>1.</Step>
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
        <p>
          Butter three 9-inch-diameter cake pans with 1 1/2-inch-high sides.
          Line bottom of pans with parchment paper. Combine 1/3 cup flour and
          next 3 ingredients in processor. Process until nuts are finely
          chopped. Whisk remaining 2 cups flour, cinnamon, baking powder, salt,
          and baking soda in medium bowl to blend.
        </p>
      </Description>
    </DirectionWrapper>
  );
};

export default Direction;
