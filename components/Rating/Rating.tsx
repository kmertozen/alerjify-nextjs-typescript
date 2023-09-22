import {
  RatingBase,
  RatingStarsWrapper,
  Score,
  StarWrapper,
} from "./Rating.style";

import { FaStar } from "react-icons/fa";
import React from "react";

const Rating = ({
  count = 5,
  value = 0,
}: {
  count?: number;
  value: number;
}) => {
  return (
    <RatingBase>
      <RatingStarsWrapper>
        {Array.from({ length: count }, (_, i) => {
          return (
            <StarWrapper isEmpty={!(value > i)}>
              <FaStar size={22} />
            </StarWrapper>
          );
        })}
      </RatingStarsWrapper>
      <Score>
        {value}
        <span> / {count}</span>
      </Score>
    </RatingBase>
  );
};

export default Rating;
