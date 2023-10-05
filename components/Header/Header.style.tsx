import { styled } from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  background-color: #fff;
  padding: 16px;
  border-bottom: 1px solid #eeeeee;
`;

export const HeaderBase = styled.div`
  width: 100%;
  max-width: 1240px;
  padding: 0 32px;
  margin: 0 auto;
  display: flex;
  gap: 20%;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    padding: 0 16px;
  }
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
    &.active {
      color: #47c757;
    }
  }
`;
