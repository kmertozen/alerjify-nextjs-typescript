import InfiniteScroll from "@/components/InfiniteScroll/InfiniteScroll";
import LayoutSectionContainer from "@/components/LayoutSectionContainer/LayoutSectionContainer";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Recipe } from "@/generated/graphql";
import { getCategoryInfoData } from "@/service/internal/getCategoryInfo/getCategoryInfo";
import { getLatestRecipesData } from "@/service/internal/getLatestRecipes/getLatestRecipes";
import { defaultMeta } from "@/utils/default";
import { GetServerSideProps } from "next";
import React from "react";

const Tarifler = ({
  recipes,
  categoryTitle,
  categorySlug,
}: {
  recipes: Recipe[];
  categoryTitle: string;
  categorySlug: string;
}) => {
  return (
    <LayoutSectionContainer>
      <SectionTitle title={`${categoryTitle} Tarifleri`} level="1" />
      <InfiniteScroll initialRecipes={recipes} category={categorySlug} />
    </LayoutSectionContainer>
  );
};

export default Tarifler;

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const { slug } = ctx.query;
  const categorySlug = slug[0];
  const [categoryInfo, recipes] = await Promise.all([
    getCategoryInfoData(categorySlug),
    getLatestRecipesData(6, undefined, undefined, categorySlug),
  ]);

  if (recipes)
    return {
      props: {
        recipes,
        categoryTitle: categoryInfo?.categoryTitle,
        categorySlug,
        meta: defaultMeta,
      },
    };
  return {
    notFound: true,
  };
};
