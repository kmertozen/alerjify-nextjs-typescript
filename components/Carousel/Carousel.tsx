import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CarouselContainer, HeroCard, HeroSlider } from "./Carousel.style";
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa";

import CategoryTitle from "../Titles/CategoryTitle/CategoryTitle";
import Head from "next/head";
import LayoutSectionContainer from "../LayoutSectionContainer/LayoutSectionContainer";
import Rating from "../Rating/Rating";
import React from "react";
import RecipeMetas from "../RecipeMetas/RecipeMetas";
import RecipeTitle from "../Titles/RecipeTitle/RecipeTitle";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    className: "SliderContainer",
    useTransform: false,
  };

  function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
      <div className="navigator-left" onClick={onClick}>
        <FaAngleLeft />
      </div>
    );
  }
  function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
      <div className="navigator-right" onClick={onClick}>
        <FaAngleRight />
      </div>
    );
  }
  return (
    <>
      <LayoutSectionContainer>
        <CarouselContainer>
          <Slider {...settings}>
            <HeroSlider>
              <img
                src={`https://www.alerjify.com/images/recipes/resim2.jpg`}
                alt={"recipe.yemek_ad"}
              />
              <HeroCard>
                <CategoryTitle href="/">Tatlı</CategoryTitle>
                <RecipeTitle href="/">Tarif Adı</RecipeTitle>
                <Rating value={5} />
                <p>
                  Folyo ile çerçeveli bir fırın tepsisini hizalayın. (Kırışıklık
                  olmamasına dikkat edin.)&nbsp;Orta boy bir kapta eritilmiş
                  çikolata ve fı...
                </p>
                <RecipeMetas author="mert" time="20 dk" likes="20" />
              </HeroCard>
            </HeroSlider>
          </Slider>
        </CarouselContainer>
      </LayoutSectionContainer>
    </>
  );
};

export default Carousel;
