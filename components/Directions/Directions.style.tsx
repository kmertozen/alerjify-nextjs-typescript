import { styled } from "styled-components";

export const DirectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const DirectionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
export const StepWrapper = styled.div`
  width: 10%;
  @media (max-width: 768px) {
    width: 18%;
  }
`;
export const Step = styled.div`
  position: relative;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #47c757;
  color: #ffffff;
  font-weight: 600;
  border-radius: 3px 0 0 3px;
  &::after {
    content: "";
    position: absolute;
    right: -40px;
    width: 0;
    top: 0px;
    height: 0;
    border-left: 20px solid #47c757;
    border-right: 20px solid transparent;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
`;
export const Description = styled.div`
  width: 90%;
  line-height: 24px;
`;
export const StepImage = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  margin-bottom: 16px;
  img {
    width: 100%;
    max-height: 100%;
    border-radius: 8px;
  }
`;
