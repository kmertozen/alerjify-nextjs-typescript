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
import { Recipe } from "@/generated/graphql";
import { getCategoryUrl, getRecipeDetailUrl } from "@/utils/url";
import { prepareImageUrl } from "@/utils/image";

const Carousel = ({ slides }: { slides: Recipe[] }) => {
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
            {slides.map(
              (
                {
                  slug,
                  recipeTitle,
                  recipeDescription,
                  recipeImages,
                  preparationTime,
                  likeCount,
                  categories,
                },
                index
              ) => (
                <HeroSlider key={index}>
                  <a href={getRecipeDetailUrl(slug)}>
                    <img
                      src={prepareImageUrl(recipeImages?.data?.attributes?.url)}
                      alt={recipeTitle}
                    />
                  </a>
                  <HeroCard>
                    <CategoryTitle
                      href={getCategoryUrl(
                        categories?.data[0].attributes?.categorySlug
                      )}
                    >
                      {categories?.data[0].attributes?.categoryTitle}
                    </CategoryTitle>
                    <RecipeTitle href={getRecipeDetailUrl(slug)}>
                      {recipeTitle}
                    </RecipeTitle>
                    <Rating value={5} />
                    <p>{recipeDescription?.substring(0, 100)}...</p>
                    <RecipeMetas
                      author="mert"
                      time={`${preparationTime} dk`}
                      likes={likeCount?.toString() ?? "0"}
                    />
                  </HeroCard>
                </HeroSlider>
              )
            )}
          </Slider>
        </CarouselContainer>
      </LayoutSectionContainer>
    </>
  );
};

export default Carousel;
