import { InterestsBase } from "./Interests.style";
import React from "react";
import RecipeCardMini from "../RecipeCardMini/RecipeCardMini";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Recipe } from "@/generated/graphql";
import { GoogleAdsenseContainer } from "../GoogleAdsenseContainer/GoogleAdsenseContainer";

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
        <GoogleAdsenseContainer
          client="ca-pub-5361129984468141"
          slot="7748229908"
        />
      </InterestsBase>
    </>
  );
}
