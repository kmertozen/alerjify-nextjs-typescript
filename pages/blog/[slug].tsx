import { GetServerSideProps } from "next";
import LayoutSectionContainer from "@/components/LayoutSectionContainer/LayoutSectionContainer";
import React from "react";
import { getPostsData } from "@/service/internal/getPosts/getPosts";
import {
  RecipeMeta,
  RecipeMetas,
  TitleWrapper,
} from "@/components/RecipeInfo/RecipeInfo.style";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import Rating from "@/components/Rating/Rating";
import dayjs from "dayjs";
import { Post } from "@/generated/graphql";

const BlogPost = ({ post }: { post: Post }) => {
  const { title, createdAt } = post;
  console.log(post);
  return (
    <LayoutSectionContainer>
      <TitleWrapper>
        <h1>{title}</h1>
      </TitleWrapper>
      <RecipeMetas>
        <RecipeMeta>
          <FaCalendarAlt color="#47c757" />{" "}
          {dayjs.tz(createdAt).format("DD MMMM YYYY")}
        </RecipeMeta>
        <RecipeMeta>
          <FaUser color="#47c757" /> Mert
        </RecipeMeta>
        <RecipeMeta>
          <FiHeart color="#47c757" /> Beğen
        </RecipeMeta>
        <Rating value={0} />
      </RecipeMetas>
    </LayoutSectionContainer>
  );
};

export default BlogPost;

export const getServerSideProps = async (ctx: any) => {
  const { slug } = ctx.query;
  const filter = { slug: { eq: slug } };
  const post = await getPostsData(filter); // your fetch function here
  return {
    props: { post: post?.[0] },
  };
};
