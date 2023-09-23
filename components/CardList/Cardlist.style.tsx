import { styled } from "styled-components";

export const CardListWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  padding: 24px 0;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
`;

export const Card = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 175px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 20px 25px 0px rgb(0 0 0 / 15%);
  @media (max-width: 768px) {
    width: auto;
    height: 80px;
  }
`;
