import { styled } from "styled-components";

export const LayoutSectionContainerBase = styled.div<{
  flex: boolean;
  headline: boolean;
  bgcolor?: string;
}>`
  display: ${(props) => (props.flex ? "flex" : "block")};
  flex-wrap: wrap;
  background-color: ${(props) => props.bgcolor || "#fff"};
  box-shadow: ${(props) =>
    props.headline ? "none" : "0 20px 25px rgb(0 0 0 / 15%)"};
  padding: 24px;
  border-radius: ${(props) => (props.headline ? "0" : "8px")};
  max-width: ${(props) => (props.headline ? "100%" : "1240px")};
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const TitleWrapper = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  color: #fff;
  letter-spacing: 1px;
`;
