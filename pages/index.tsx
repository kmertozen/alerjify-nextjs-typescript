import Carousel from "@/components/Carousel/Carousel";
import LayoutSectionContainer from "@/components/LayoutSectionContainer/LayoutSectionContainer";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Trio from "@/components/Trio/Trio";
import { Recipe } from "@/generated/graphql";
import { getHomepageRecipeCardsData } from "@/service/internal/getHomepageRecipeCards/getHomepageRecipeCards";
import { getHomepageSlidersData } from "@/service/internal/getHomepageSliders/getHomepageSliders";
import { getLatestRecipesData } from "@/service/internal/getLatestRecipes/getLatestRecipes";
import { getTrendsData } from "@/service/internal/getTrends/getTrends";
import { defaultMeta } from "@/utils/default";
import { GetServerSideProps } from "next";
import { GoogleAdsenseContainer } from "@/components/GoogleAdsenseContainer/GoogleAdsenseContainer";
import lazyHydrate from "next-lazy-hydrate";

const Trends = lazyHydrate(() => import("@/components/Trends/Trends"), {
  on: ["delay"],
});
const Interests = lazyHydrate(
  () => import("@/components/Interests/Interests"),
  {
    on: ["delay"],
  }
);
const LatestRecipes = lazyHydrate(
  () => import("@/components/InfiniteScroll/InfiniteScroll"),
  {
    on: ["delay"],
  }
);

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
