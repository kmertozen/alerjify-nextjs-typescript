import InfiniteScroll from "@/components/InfiniteScroll/InfiniteScroll";
import LayoutSectionContainer from "@/components/LayoutSectionContainer/LayoutSectionContainer";
import SectionCard from "@/components/SectionCard/SectionCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Recipe, Tag } from "@/generated/graphql";
import { getLatestRecipesData } from "@/service/internal/getLatestRecipes/getLatestRecipes";
import { getTagInfoData } from "@/service/internal/getTagInfo/getTagInfo";
import { defaultMeta } from "@/utils/default";
import { GetServerSideProps } from "next";
import React from "react";

const Tarifler = ({
  recipes,
  tagInfo,
}: {
  recipes: Recipe[];
  tagInfo: Tag;
}) => {
  return (
    <>
      <LayoutSectionContainer>
        <SectionTitle title={`${tagInfo?.tag_name} Tarifler`} level="2" />
        {tagInfo?.tagDescription && (
          <SectionCard>
            <p>{tagInfo?.tagDescription}</p>
          </SectionCard>
        )}
        <InfiniteScroll initialRecipes={recipes} tag={tagInfo?.slug} />
      </LayoutSectionContainer>
    </>
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
  console.log(tagInfo);
  if (recipes && tagInfo)
    return {
      props: {
        recipes,
        tagInfo,
        meta: defaultMeta,
      },
    };
  return {
    notFound: true,
  };
};
