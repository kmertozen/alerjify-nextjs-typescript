import { styled } from "styled-components";

export const LayoutSectionContainerBase = styled.div<{ flex: boolean }>`
  display: ${(props) => (props.flex ? "flex" : "block")};
  background-color: #fff;
  box-shadow: 0 20px 25px rgb(0 0 0 / 15%);
  padding: 24px;
  margin-bottom: 30px;
  border-radius: 8px;
`;
