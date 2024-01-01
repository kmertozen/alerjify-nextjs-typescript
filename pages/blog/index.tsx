import LayoutSectionContainer from "@/components/LayoutSectionContainer/LayoutSectionContainer";
import PostCard from "@/components/PostCard/PostCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import React from "react";
import { GetServerSideProps } from "next";
import { getPostsData } from "@/service/internal/getPosts/getPosts";
import { Post, Recipe } from "@/generated/graphql";
import PostCardsSection from "@/components/PostCardsSection/PostCardsSection";
import Interests from "@/components/Interests/Interests";
import { getLatestRecipesData } from "@/service/internal/getLatestRecipes/getLatestRecipes";

const Blog = ({ posts, interests }: { posts: Post[]; interests: Recipe[] }) => {
  return (
    <LayoutSectionContainer flex>
      <PostCardsSection posts={posts} />
      <Interests interests={interests} />
    </LayoutSectionContainer>
  );
};

export default Blog;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const [posts, latest] = await Promise.all([
    getPostsData(),
    getLatestRecipesData(6),
  ]);
  const interests = latest?.filter((recipe, index) => index < 5);

  return {
    props: { posts, interests },
  };
};
