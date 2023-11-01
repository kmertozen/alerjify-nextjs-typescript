import InfiniteScroll from "@/components/InfiniteScroll/InfiniteScroll";
import LayoutSectionContainer from "@/components/LayoutSectionContainer/LayoutSectionContainer";
import SectionCard from "@/components/SectionCard/SectionCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Category, Recipe } from "@/generated/graphql";
import { getCategoryInfoData } from "@/service/internal/getCategoryInfo/getCategoryInfo";
import { getLatestRecipesData } from "@/service/internal/getLatestRecipes/getLatestRecipes";
import { defaultMeta } from "@/utils/default";
import { GetServerSideProps } from "next";
import React from "react";

const Tarifler = ({
  recipes,
  categoryInfo,
}: {
  recipes: Recipe[];
  categoryInfo: Category;
}) => {
  return (
    <LayoutSectionContainer>
      <SectionTitle
        title={`${categoryInfo.categoryTitle} Tarifleri`}
        level="1"
      />
      {categoryInfo?.categoryDescription && (
        <SectionCard>
          <p>{categoryInfo?.categoryDescription}</p>
        </SectionCard>
      )}
      <InfiniteScroll
        initialRecipes={recipes}
        category={categoryInfo.categorySlug}
      />
    </LayoutSectionContainer>
  );
};

export default Tarifler;

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  ctx.res.setHeader("Cache-Control", "max-age=0, public, s-maxage=86400");

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
        categoryInfo: categoryInfo,
        meta: {
          title: `Sağlıklı, Pratik ve Lezzetli ${categoryInfo?.categoryTitle} Tarifleri`,
          description: `Alerji ve Gıda Hassasiyetlerine uygun bulabileceğiniz pratik, lezzetli, nefis ${categoryInfo?.categoryTitle} tarifleri.`,
        },
      },
    };
  return {
    notFound: true,
  };
};
