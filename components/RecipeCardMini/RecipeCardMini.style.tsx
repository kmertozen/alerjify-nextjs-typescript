import { styled } from "styled-components";

export const RecipeCardMiniBase = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 12px;
`;
export const RecipeCardMiniImage = styled.div`
  display: flex;
  a {
    display: inline-flex;
  }
  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
  }
`;
export const RecipeCardMiniInfo = styled.div``;

export const RecipeCardMiniInfoCategory = styled.a`
  font-weight: 600;
  color: #47c757;
`;
export const RecipeCardMiniInfoTitle = styled.div`
  color: #000;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
`;

export const RecipeCardMiniInfoStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 8px;
  div {
    display: flex;
    gap: 4px;
    align-items: center;
  }
`;
