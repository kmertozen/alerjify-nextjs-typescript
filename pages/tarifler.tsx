import LatestRecipes from "@/components/InfiniteScroll/InfiniteScroll";
import LayoutSectionContainer from "@/components/LayoutSectionContainer/LayoutSectionContainer";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Recipe } from "@/generated/graphql";
import { getLatestRecipesData } from "@/service/internal/getLatestRecipes/getLatestRecipes";
import { defaultMeta } from "@/utils/default";
import { GetServerSideProps } from "next";
import React from "react";

const Tarifler = ({ latest }: { latest: Recipe[] }) => {
  return (
    <LayoutSectionContainer>
      <SectionTitle title="Tarifler" level="1" />
      <LatestRecipes initialRecipes={latest} />
    </LayoutSectionContainer>
  );
};

export default Tarifler;

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const [latest] = await Promise.all([getLatestRecipesData(6)]);

  return {
    props: {
      latest,
      meta: defaultMeta,
    },
  };
};
