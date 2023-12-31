import React from "react";
import {
  PostCardBase,
  PostCardButton,
  PostCardDescription,
  PostCardImageWrapper,
  PostCardMetas,
  PostCardTitle,
} from "./PostCard.style";
import { BsChevronRight } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { FaRegCalendar } from "react-icons/fa";

const PostCard = ({
  url,
  author,
  date,
  title,
  description,
  imageUrl,
}: {
  url: string;
  author: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}) => {
  return (
    <PostCardBase>
      <PostCardImageWrapper>
        <a href={url}>
          <img src="https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/09/blog11-630x650.jpg" />
        </a>
      </PostCardImageWrapper>
      <PostCardMetas>
        <div>
          <FiUser size={20} color="#43c757" /> {author}
        </div>
        <div>
          <FaRegCalendar size={20} color="#43c757" /> {date}
        </div>
      </PostCardMetas>
      <PostCardTitle as={"h2"}>{title}</PostCardTitle>
      <PostCardDescription>{description}</PostCardDescription>
      <PostCardButton href={url}>
        Devamını Oku <BsChevronRight />
      </PostCardButton>
    </PostCardBase>
  );
};

export default PostCard;
