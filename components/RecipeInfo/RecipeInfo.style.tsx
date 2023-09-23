import { styled } from "styled-components";

export const RecipeContainer = styled.div`
  max-width: 70%;
  padding: 16px;
`;
export const RecipeMetas = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
`;
export const RecipeMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const TitleWrapper = styled.div`
  h1 {
    font-size: 1.75rem;
    font-weight: 500;
    margin-bottom: 12px;
  }
`;

export const RecipeImageWrapper = styled.div`
  img {
    width: 100%;
    border-radius: 8px;
  }
`;

export const RecipeInfos = styled.div`
  display: flex;
  gap: 2px;
  border-radius: 0 0 8px 8px;
  overflow: hidden;
  margin-bottom: 24px;
`;
export const Info = styled.div`
  width: 25%;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  gap: 12px;
`;
export const InfoIcon = styled.div``;

export const InfoText = styled.div`
  line-height: 28px;
`;
export const InfoTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
`;
export const InfoDescription = styled.div`
  font-size: 16px;
`;

export const IngredientsWrapper = styled.div`
  width: 50%;
  background-color: #f2f2f2;
  padding: 24px;
  border-radius: 5px;
`;
export const Ingredients = styled.div`
  background: #fff;
  padding: 20px 18px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const IngredientCheck = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  font-size: 18px;
  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    margin: 0;
    &::before {
      content: "";
      display: inline-block;
      height: 20px;
      left: 0;
      position: absolute;
      width: 20px;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 2px;
      transition: border 0.15s ease-in-out, color 0.15s ease-in-out;
    }
    &:checked::before {
      background-color: #47c757;
      border-color: #47c757;
      box-shadow: 0 4px 10px 0 rgb(44 218 57 / 35%);
    }
    &:after {
      content: "✓";
      position: absolute;
      width: 20px;
      height: 20px;
      color: #fff;
      text-align: center;
      font-weight: bold;
    }
  }
`;

export const DirectionSection = styled.div`
  margin-top: 24px;
`;

export const Tags = styled.p`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 0;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  span {
    margin-right: 32px;
    padding: 1em;
    text-transform: uppercase;
    transform: rotate(180deg);
    writing-mode: vertical-rl;
    border-left: 3px solid #47c575;
    color: #47c575;
    cursor: default;
  }
  a {
    display: block;
    padding: 8px 16px;
    margin: 0.5em;
    text-transform: uppercase;
    border-radius: 3px;
    background-color: #f2f2f2;
    color: #919191;
    transition: transform 0.2s;
    transition-timing-function: cubic-bezier(0.45, -0.85, 0.55, -0.45);
  }
`;
