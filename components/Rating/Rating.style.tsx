import { styled } from "styled-components";

export const RatingBase = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const RatingStarsWrapper = styled.div`
  display: flex;
  font-size: 0;
`;

export const StarWrapper = styled.div<{ isEmpty: boolean }>`
  color: ${({ isEmpty }) => (isEmpty ? "#d9d9d9" : "#ffcc00")};
`;
export const Score = styled.div`
  line-height: 22px;
  span {
    color: #b3b3b3;
    font-size: 12px;
  }
`;
