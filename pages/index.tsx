import CardList from "@/components/CardList/CardList";
import Carousel from "@/components/Carousel/Carousel";
import Interests from "@/components/Interests/Interests";
import LatestRecipes from "@/components/InfiniteScroll/InfiniteScroll";
import LayoutSectionContainer from "@/components/LayoutSectionContainer/LayoutSectionContainer";
import RecipeCard from "@/components/RecipeCard/RecipeCard";
import RecipeCardMini from "@/components/RecipeCardMini/RecipeCardMini";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Trends from "@/components/Trends/Trends";
import Trio from "@/components/Trio/Trio";
import { Recipe } from "@/generated/graphql";
import client from "@/service/internal/apolloClient";
import { getHomepageRecipeCardsData } from "@/service/internal/getHomepageRecipeCards/getHomepageRecipeCards";
import { getHomepageSlidersData } from "@/service/internal/getHomepageSliders/getHomepageSliders";
import { getLatestRecipesData } from "@/service/internal/getLatestRecipes/getLatestRecipes";
import { getRecipesData } from "@/service/internal/getRecipes/getRecipes";
import { getTrendsData } from "@/service/internal/getTrends/getTrends";
import { defaultMeta } from "@/utils/default";
import { GetServerSideProps } from "next";
import { useEffect } from "react";

export default function Home({
  recipes,
  interests,
  slider,
  recipeCards,
  trends,
  latest,
}: {
  recipes: Recipe[];
  interests: Recipe[];
  slider: Recipe[];
  recipeCards: Recipe[];
  trends: Recipe[];
  latest: Recipe[];
}) {
  return (
    <>
      {/* <LayoutSectionContainer
        title="Alerjine Uygun Yemek Tarifleri"
        headline
        bgcolor="#47c757"
      >
        <CardList />
      </LayoutSectionContainer> */}
      {slider && <Carousel slides={slider} />}
      {recipeCards && <Trio cards={recipeCards} />}
      <LayoutSectionContainer flex>
        {trends && <Trends trends={trends} />}

        <Interests interests={interests} />
      </LayoutSectionContainer>
      <LayoutSectionContainer>
        <SectionTitle title="Son Eklenen Tarifler" />
        <LatestRecipes initialRecipes={latest} />
      </LayoutSectionContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const [recipes, interests, slider, recipeCards, trends, latest] =
    await Promise.all([
      getRecipesData(),
      getLatestRecipesData(5),
      getHomepageSlidersData(),
      getHomepageRecipeCardsData(),
      getTrendsData(5),
      getLatestRecipesData(6),
    ]);
  return {
    props: {
      recipes,
      interests,
      slider,
      recipeCards,
      trends,
      latest,
      meta: defaultMeta,
    },
  };
};
