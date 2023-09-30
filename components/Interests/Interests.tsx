import { InterestsBase } from "./Interests.style";
import React from "react";
import RecipeCardMini from "../RecipeCardMini/RecipeCardMini";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Recipe } from "@/generated/graphql";

export default function Interests({ interests }: { interests: Recipe[] }) {
  return (
    <>
      <InterestsBase>
        <SectionTitle title="İlginizi Çekebilir" />
        {interests &&
          interests.length > 0 &&
          interests.map((interest, index) => (
            <RecipeCardMini key={index} data={interest} />
          ))}
      </InterestsBase>
    </>
  );
}
