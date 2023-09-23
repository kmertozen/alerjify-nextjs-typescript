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

export default function RecipeCard({ size = "small" }: { size?: string }) {
  return (
    <RecipeCardBase size={size}>
      <SaveButton onClick={() => console.log("asd")}>
        <FaHeart size={18} />
      </SaveButton>
      <RecipeCardImage size={size}>
        <a href="#">
          <img src="https://www.alerjify.com/images/recipes/resim4.jpg" />
        </a>
      </RecipeCardImage>
      <RecipeCardInfo>
        <RecipeCardInfoCategory>Tatlı</RecipeCardInfoCategory>
        <RecipeCardInfoTitle>
          <a href="#">Glutensiz Çikolatalı Brownie</a>
        </RecipeCardInfoTitle>
        <RecipeCardInfoDescription>
          Fırını önceden 200 ° C'ye ısıtın. Kare veya yuvarlak tavayı yağlayın;
          ya en az 2" derinlikte olmalıdır.Şeker, tereyağı ve tuzu mikroda...
        </RecipeCardInfoDescription>
        <RecipeMetas author="Mert" time="20 dk" likes="20" />
      </RecipeCardInfo>
    </RecipeCardBase>
  );
}
