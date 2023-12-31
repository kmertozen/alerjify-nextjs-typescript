import LayoutSectionContainer from "@/components/LayoutSectionContainer/LayoutSectionContainer";
import PostCard from "@/components/PostCard/PostCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import React from "react";
import { GetServerSideProps } from "next";
import { getPostsData } from "@/service/internal/getPosts/getPosts";
import { Post } from "@/generated/graphql";
import PostCardsSection from "@/components/PostCardsSection/PostCardsSection";

const Blog = ({ posts }: { posts: Post[] }) => {
  return (
    <LayoutSectionContainer>
      <SectionTitle title="Lezzetli Yazılar" level="1" />
      <div
        style={{
          maxWidth: 768,
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
        }}>
        <PostCardsSection posts={posts} />
      </div>
    </LayoutSectionContainer>
  );
};

export default Blog;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const posts = await getPostsData();
  console.log(posts);

  return {
    props: { posts },
  };
};
