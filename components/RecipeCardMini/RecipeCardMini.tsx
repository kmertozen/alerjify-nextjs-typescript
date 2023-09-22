import { FiClock, FiHeart } from "react-icons/fi";
import {
  RecipeCardMiniBase,
  RecipeCardMiniImage,
  RecipeCardMiniInfo,
  RecipeCardMiniInfoCategory,
  RecipeCardMiniInfoStats,
  RecipeCardMiniInfoTitle,
} from "./RecipeCardMini.style";

import React from "react";

export default function RecipeCardMini() {
  return (
    <RecipeCardMiniBase>
      <RecipeCardMiniImage>
        <img src="https://www.alerjify.com/images/recipes/patates-puresi.jpg" />
      </RecipeCardMiniImage>
      <RecipeCardMiniInfo>
        <RecipeCardMiniInfoCategory href="#">
          Kahvaltılık
        </RecipeCardMiniInfoCategory>
        <RecipeCardMiniInfoTitle>Pratik Patates Püresi</RecipeCardMiniInfoTitle>
        <RecipeCardMiniInfoStats>
          <div>
            <FiClock color="#43c757" />
            30 Aralık, 2019
          </div>
          <div>
            <FiHeart color="#43c757" />
            20 Beğeni
          </div>
        </RecipeCardMiniInfoStats>
      </RecipeCardMiniInfo>
    </RecipeCardMiniBase>
  );
}
