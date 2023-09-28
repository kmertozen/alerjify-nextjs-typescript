import { RatingBase } from "../Rating/Rating.style";
import { RecipeTitleBase } from "../Titles/Titles.style";
import { styled } from "styled-components";

export const CarouselContainer = styled.div``;

export const SlideCard = styled.div`
  position: absolute;
  bottom: -85px;
  background-color: #fff;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 640px;
  transition: all 0.3s ease-in-out;
`;

export const NavigatorLeft = styled.div`
  width: 60px;
  height: 60px;
  color: #47c757;
  border: none;
  outline: none;
  background-color: #fff;
  border-radius: 50% !important;
  box-shadow: 0px 0px 8px 0px rgb(222 222 222 / 70%);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  transition: all 0.2s ease 0s;
  z-index: 20;
  cursor: pointer;
`;
export const NavigatorRight = styled.div`
  width: 60px;
  height: 60px;
  color: #47c757;
  border: none;
  outline: none;
  background-color: #fff;
  border-radius: 50% !important;
  box-shadow: 0px 0px 8px 0px rgb(222 222 222 / 70%);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  transition: all 0.2s ease 0s;
  z-index: 20;
  cursor: pointer;
`;

export const Slide = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
  &:hover {
    ${SlideCard} {
      bottom: 0;
    }
    ${NavigatorLeft} {
      opacity: 1;
    }
  }
`;

export const HeroCard = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 375px;
  background-color: #fff;
  padding: 24px 16px;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 640px;
  transition: all 0.3s ease-in-out;
  text-align: center;

  ${RecipeTitleBase} {
    font-size: 28px;
    margin-bottom: 12px;
  }
  ${RatingBase} {
    margin-bottom: 12px;
  }
  p {
    margin-bottom: 20px;
    line-height: 24px;
  }
`;

export const HeroSlider = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
`;
