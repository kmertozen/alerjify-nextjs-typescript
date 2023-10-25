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
import { GoogleAdsenseContainer } from "@/components/GoogleAdsenseContainer/GoogleAdsenseContainer";

export default function Home({
  interests,
  slider,
  recipeCards,
  trends,
  latest,
}: {
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
      <GoogleAdsenseContainer
        client="ca-pub-5361129984468141"
        slot="5481143302"
      />
      <LayoutSectionContainer>
        <SectionTitle title="Son Eklenen Tarifler" />
        <LatestRecipes initialRecipes={latest} />
      </LayoutSectionContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  ctx.res.setHeader("Cache-Control", "max-age=0, public, s-maxage=86400");

  const [slider, recipeCards, trends, latest] = await Promise.all([
    getHomepageSlidersData(),
    getHomepageRecipeCardsData(),
    getTrendsData(5),
    getLatestRecipesData(6),
  ]);
  const interests = latest?.filter((recipe, index) => index < 5);
  return {
    props: {
      interests,
      slider,
      recipeCards,
      trends,
      latest,
      meta: defaultMeta,
    },
  };
};
