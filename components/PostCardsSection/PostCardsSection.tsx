import { Post } from "@/generated/graphql";
import React from "react";
import PostCard from "../PostCard/PostCard";
import dayjs from "dayjs";
import SectionTitle from "../SectionTitle/SectionTitle";
import { PostCardsWrapper } from "./PostCardsSection.style";

const PostCardsSection = ({ posts }: { posts: Post[] }) => {
  const parsedPosts = posts.map((post) => ({
    url: `/blog/${post.slug}`,
    title: post.title,
    description: post.description ?? "",
    author: post.author?.data?.attributes?.name,
    date: dayjs(post.createdAt).format("MMM D, YYYY"),
    imageUrl: post.image.data?.attributes?.url ?? "",
  }));

  return (
    <PostCardsWrapper>
      <SectionTitle title="Lezzetli Yazılar" level="1" />
      <div style={{ display: "flex", flexWrap: "wrap", rowGap: "26px" }}>
        {parsedPosts.map(({ url, title, description, date, imageUrl }, i) => (
          <PostCard
            key={i}
            url={url}
            imageUrl={imageUrl}
            title={title}
            description={description}
            author="Mert"
            date={date}
          />
        ))}
      </div>
    </PostCardsWrapper>
  );
};

export default PostCardsSection;
