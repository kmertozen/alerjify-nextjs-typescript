import { InterestsBase } from "./Interests.style";
import React from "react";
import RecipeCardMini from "../RecipeCardMini/RecipeCardMini";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function Interests() {
  return (
    <>
      <InterestsBase>
        <SectionTitle title="İlginizi Çekebilir" />
        <RecipeCardMini />
        <RecipeCardMini />
        <RecipeCardMini />
        <RecipeCardMini />
        <RecipeCardMini />
      </InterestsBase>
    </>
  );
}
