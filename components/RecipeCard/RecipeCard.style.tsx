import { styled } from "styled-components";

const cardSizeMap = {
  small: "33.333333%;",
  medium: "50%",
  large: "100%",
};
const imageHeightMap = {
  small: "250px",
  medium: "250px",
  large: "400px",
};

export const SaveButton = styled.div`
  color: #47c757;
  position: absolute;
  z-index: 99;
  right: 32px;
  top: 16px;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  border-radius: 50%;
  background-color: #fff;
  padding: 5px;
  display: inline-flex;
`;

export const RecipeCardBase = styled.div<{ size: string }>`
  position: relative;
  width: ${(props) => cardSizeMap[props.size as keyof typeof cardSizeMap]};
  max-width: ${(props) => cardSizeMap[props.size as keyof typeof cardSizeMap]};
  padding: 0 16px;
  &:hover {
    img {
      transform: scale(1.1);
    }
    ${SaveButton} {
      opacity: 1;
    }
  }
`;

export const RecipeCardImage = styled.div<{ size: string }>`
  overflow: hidden;
  border-radius: 8px;

  img {
    transition: all 0.3s ease-in-out;
    width: 100%;
    height: ${(props) =>
      imageHeightMap[props.size as keyof typeof imageHeightMap]};
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const RecipeCardInfo = styled.div`
  text-align: center;
  padding: 16px;
`;
export const RecipeCardInfoCategory = styled.a`
  font-weight: 600;
  color: #47c757;
`;
export const RecipeCardInfoTitle = styled.h2``;
export const RecipeCardInfoDescription = styled.p`
  margin: 8px 0 24px;
  color: #646464;
`;
