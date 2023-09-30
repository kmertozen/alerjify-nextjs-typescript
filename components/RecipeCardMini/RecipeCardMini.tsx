import { FiClock, FiHeart } from "react-icons/fi";
import {
  RecipeCardMiniBase,
  RecipeCardMiniImage,
  RecipeCardMiniInfo,
  RecipeCardMiniInfoCategory,
  RecipeCardMiniInfoStats,
  RecipeCardMiniInfoTitle,
} from "./RecipeCardMini.style";
import dayjs from "dayjs";
import React from "react";
import { Recipe } from "@/generated/graphql";
import { getCategoryUrl, getRecipeDetailUrl } from "@/utils/url";
import { prepareImageUrl } from "@/utils/image";

export default function RecipeCardMini({ data }: { data: Recipe }) {
  const { slug, recipeTitle, categories, recipeImages, updatedAt, likeCount } =
    data;
  return (
    <RecipeCardMiniBase>
      <RecipeCardMiniImage>
        <a href={getRecipeDetailUrl(slug)}>
          <img src={prepareImageUrl(recipeImages?.data?.attributes?.url)} />
        </a>
      </RecipeCardMiniImage>
      <RecipeCardMiniInfo>
        <RecipeCardMiniInfoCategory
          href={getCategoryUrl(categories?.data[0].attributes?.categorySlug)}
        >
          {categories?.data[0].attributes?.categoryTitle}
        </RecipeCardMiniInfoCategory>
        <RecipeCardMiniInfoTitle>
          <a href={getRecipeDetailUrl(slug)}>{recipeTitle}</a>
        </RecipeCardMiniInfoTitle>
        <RecipeCardMiniInfoStats>
          <div>
            <FiClock color="#43c757" />
            {dayjs(updatedAt).format("DD MMMM YYYY")}
          </div>
          <div>
            <FiHeart color="#43c757" />
            {likeCount} Beğeni
          </div>
        </RecipeCardMiniInfoStats>
      </RecipeCardMiniInfo>
    </RecipeCardMiniBase>
  );
}
