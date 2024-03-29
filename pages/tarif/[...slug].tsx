import Interests from "@/components/Interests/Interests";
import LatestRecipes from "@/components/InfiniteScroll/InfiniteScroll";
import LayoutSectionContainer from "@/components/LayoutSectionContainer/LayoutSectionContainer";
import RecipeInfo from "@/components/RecipeInfo/RecipeInfo";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Recipe } from "@/generated/graphql";
import { getLatestRecipesData } from "@/service/internal/getLatestRecipes/getLatestRecipes";
import { getRecipesBySlugData } from "@/service/internal/getRecipeBySlug/getRecipeBySlug";
import { getSimilarRecipesByCategoryData } from "@/service/internal/getSimilarRecipesByCategory/getSimilarRecipesByCategory";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { getRecipeSchema } from "@/utils/schema";

function Tarif({
  recipe,
  similarRecipes,
  latest,
}: {
  recipe: Recipe;
  similarRecipes: Recipe[];
  latest: Recipe[];
}) {
  return (
    <>
      <LayoutSectionContainer flex>
        <RecipeInfo recipe={recipe} />
        <Interests interests={similarRecipes} />
      </LayoutSectionContainer>
      {latest && (
        <LayoutSectionContainer>
          <SectionTitle title="Diğer Lezzetli Tarifler" />
          <LatestRecipes initialRecipes={latest} />
        </LayoutSectionContainer>
      )}
    </>
  );
}

export default Tarif;

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  ctx.res.setHeader("Cache-Control", "max-age=0, public, s-maxage=86400");

  const { slug } = ctx.query;

  const [recipe, latest] = await Promise.all([
    getRecipesBySlugData(slug[0]),
    getLatestRecipesData(6),
  ]);
  const similarRecipes = await getSimilarRecipesByCategoryData(
    slug[0],
    recipe?.categories?.data[0].attributes?.categorySlug,
    5
  );

  const schema = getRecipeSchema(recipe);
  if (recipe)
    return {
      props: {
        recipe,
        similarRecipes,
        latest,
        meta: {
          title: `${recipe.recipeTitle} Tarifi Nasıl Yapılır? ${
            recipe.recipeDirections?.direction?.[0]?.image ? "(Resimli)" : ""
          } | Alerjify`,
          description: `${recipe.recipeDescription} tarifi, Gıda hassasiyetlerine uygun leziz tarifler, Alerjify'de!`,
          schema: schema,
        },
      },
    };

  return {
    notFound: true,
  };
};
