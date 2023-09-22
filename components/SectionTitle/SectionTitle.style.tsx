import { styled } from "styled-components";

export const SectionTitleBase = styled.div`
  border-bottom: 1px solid #d7d7d7;
  margin-bottom: 50px;
  padding-bottom: 15px;
  position: relative;

  h2 {
    font-family: "Source Sans Pro";
    font-size: 26px;
    font-weight: 700;
    line-height: 36px;
    margin-bottom: 1rem;
  }
  ::before {
    background-color: #47c757;
    bottom: -2px;
    content: "";
    height: 3px;
    left: 0;
    position: absolute;
    width: 50px;
  }
`;
