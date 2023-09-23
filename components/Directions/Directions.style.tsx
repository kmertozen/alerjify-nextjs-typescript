import { styled } from "styled-components";

export const DirectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const DirectionWrapper = styled.div`
  display: flex;
  gap: 30px;
`;
export const StepWrapper = styled.div`
  width: 30%;
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
  line-height: 24px;
`;
export const StepImage = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  margin-bottom: 16px;
`;
