import { styled } from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  background-color: #fff;
  margin: 0 auto;
  padding: 16px;
  justify-content: center;
  border-bottom: 1px solid #eeeeee;
`;

export const Navbar = styled.nav`
  display: flex;
  max-width: 1240px;
  margin: 0 auto -5px;
  background-color: #fff;
  padding: 0 16px;
  a {
    display: block;
    padding: 21px 16px;
    font-weight: 600;
  }
`;
