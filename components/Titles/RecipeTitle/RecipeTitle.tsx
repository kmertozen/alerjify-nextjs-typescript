import React from "react";
import { RecipeTitleBase } from "../Titles.style";

const RecipeTitle = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <RecipeTitleBase>
      <a href={href}>{children}</a>
    </RecipeTitleBase>
  );
};

export default RecipeTitle;
