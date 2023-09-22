import { CategoryTitleBase } from "../Titles.style";
import React from "react";

const CategoryTitle = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return <CategoryTitleBase href={href}>{children}</CategoryTitleBase>;
};

export default CategoryTitle;
