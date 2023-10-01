import InfiniteScroll from "@/components/InfiniteScroll/InfiniteScroll";
import LayoutSectionContainer from "@/components/LayoutSectionContainer/LayoutSectionContainer";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Recipe } from "@/generated/graphql";
import { getLatestRecipesData } from "@/service/internal/getLatestRecipes/getLatestRecipes";
import { getTagInfoData } from "@/service/internal/getTagInfo/getTagInfo";
import { defaultMeta } from "@/utils/default";
import { GetServerSideProps } from "next";
import React from "react";

const Tarifler = ({
  recipes,
  tagSlug,
  tagName,
}: {
  recipes: Recipe[];
  tagSlug: string;
  tagName: string;
}) => {
  return (
    <LayoutSectionContainer>
      <SectionTitle title={`${tagName} Tarifler`} level="1" />
      <InfiniteScroll initialRecipes={recipes} tag={tagSlug} />
    </LayoutSectionContainer>
  );
};

export default Tarifler;

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const { slug } = ctx.query;
  const tagSlug = slug[0];
  const [tagInfo, recipes] = await Promise.all([
    getTagInfoData(tagSlug),
    getLatestRecipesData(6, undefined, undefined, undefined, tagSlug),
  ]);
  if (recipes && tagInfo)
    return {
      props: {
        recipes,
        tagSlug,
        tagName: tagInfo.tag_name,
        meta: defaultMeta,
      },
    };
  return {
    notFound: true,
  };
};
