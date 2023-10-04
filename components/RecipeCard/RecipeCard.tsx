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
import Image from "next/image";

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
        <a href={getRecipeDetailUrl(slug)} title={recipeTitle}>
          <div style={{ position: "relative" }}>
            <Image
              src={prepareImageUrl(recipeImages?.data?.attributes?.url)}
              alt={recipeTitle}
              width={360}
              height={250}
              quality={100}
            />
          </div>
        </a>
      </RecipeCardImage>
      <RecipeCardInfo>
        <RecipeCardInfoCategory
          title={categories?.data[0].attributes?.categoryTitle}
          href={getCategoryUrl(categories?.data[0].attributes?.categorySlug)}
        >
          {categories?.data[0].attributes?.categoryTitle}
        </RecipeCardInfoCategory>
        <RecipeCardInfoTitle>
          <a href={getRecipeDetailUrl(slug)} title={recipeTitle}>
            {recipeTitle}
          </a>
        </RecipeCardInfoTitle>
        <RecipeCardInfoDescription>
          {recipeDescription?.substring(0, 140)}...
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
