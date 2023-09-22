import { FiClock, FiHeart, FiUser } from "react-icons/fi";

import React from "react";
import { RecipeMetasBase } from "./RecipeMetas.style";

const RecipeMetas = ({
  author,
  time,
  likes,
}: {
  author: string;
  time: string;
  likes: string;
}) => {
  return (
    <RecipeMetasBase>
      <div>
        <FiUser size={20} color="#43c757" /> {author}
      </div>
      <div>
        <FiClock size={20} color="#43c757" /> {time}
      </div>
      <div>
        <FiHeart size={20} color="#43c757" /> {likes}
      </div>
    </RecipeMetasBase>
  );
};

export default RecipeMetas;
