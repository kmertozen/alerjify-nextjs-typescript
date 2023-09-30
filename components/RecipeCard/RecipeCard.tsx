import {
  RecipeCardBase,
  RecipeCardImage,
  RecipeCardInfo,
  RecipeCardInfoCategory,
  RecipeCardInfoDescription,
  RecipeCardInfoTitle,
  SaveButton,
} from "./RecipeCard.style";

import { BsSave } from "react-icons/bs";
import React from "react";
import RecipeMetas from "../RecipeMetas/RecipeMetas";
import { FaHeart } from "react-icons/fa";
import { Recipe } from "@/generated/graphql";
import { getCategoryUrl, getRecipeDetailUrl } from "@/utils/url";
import { prepareImageUrl } from "@/utils/image";

export default function RecipeCard({
  size = "small",
  data,
}: {
  size?: string;
  data: Recipe;
}) {
  const {
    slug,
    recipeTitle,
    recipeDescription,
    recipeImages,
    preparationTime,
    likeCount,
    categories,
  } = data;
  return (
    <RecipeCardBase size={size}>
      <SaveButton onClick={() => console.log("asd")}>
        <FaHeart size={18} />
      </SaveButton>
      <RecipeCardImage size={size}>
        <a href={getRecipeDetailUrl(slug)}>
          <img src={prepareImageUrl(recipeImages?.data?.attributes?.url)} />
        </a>
      </RecipeCardImage>
      <RecipeCardInfo>
        <RecipeCardInfoCategory
          href={getCategoryUrl(categories?.data[0].attributes?.categorySlug)}
        >
          {categories?.data[0].attributes?.categoryTitle}
        </RecipeCardInfoCategory>
        <RecipeCardInfoTitle>
          <a href={getRecipeDetailUrl(slug)}>{recipeTitle}</a>
        </RecipeCardInfoTitle>
        <RecipeCardInfoDescription>
          {recipeDescription?.substring(0, 100)}...
        </RecipeCardInfoDescription>
        <RecipeMetas
          author="Mert"
          time={`${preparationTime} dk`}
          likes={likeCount?.toString() ?? "0"}
        />
      </RecipeCardInfo>
    </RecipeCardBase>
  );
}
