import LayoutSectionContainer from "@/components/LayoutSectionContainer/LayoutSectionContainer";
import React from "react";
import { GetServerSideProps } from "next";
import { getRecipesData } from "@/service/internal/getRecipes/getRecipes";
import InfiniteScroll from "@/components/InfiniteScroll/InfiniteScroll";
import { Recipe } from "@/generated/graphql";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const Ara = ({
  recipes,
  query,
  totalCount,
}: {
  recipes: Recipe[];
  query: string;
  totalCount: number;
}) => {
  return (
    <LayoutSectionContainer>
      <SectionTitle
        title={query ? `${query} araması için sonuçlar: ` : "Tarifler"}
      />
      <InfiniteScroll initialRecipes={recipes} />
    </LayoutSectionContainer>
  );
};

export default Ara;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const query = ctx.query?.q?.toString();
  console.log(query);
  const filter = {
    or: [
      { recipeTitle: { contains: query } },
      { recipeDescription: { contains: query } },
    ],
  };
  const recipes = await getRecipesData(
    filter,
    6,
    undefined,
    undefined,
    "likeCount:desc"
  );

  return {
    props: {
      recipes: recipes?.data,
      totalCount: recipes?.meta?.pagination.total,
      query,
    },
  };
};
