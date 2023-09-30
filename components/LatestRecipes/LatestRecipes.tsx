import { Recipe } from "@/generated/graphql";
import React, { useEffect, useRef, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import { getLatestRecipesData } from "@/service/internal/getLatestRecipes/getLatestRecipes";
import axios from "axios";
import { LatestRecipesBase } from "./LatestRecipes.style";

const LatestRecipes = ({ initialRecipes }: { initialRecipes: Recipe[] }) => {
  const [recipes, setRecipes] = useState(initialRecipes);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const elementRef = useRef(null);

  const onIntersect = async (entries: any) => {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting && hasMore) {
      const more = (
        await axios.get("http://localhost:3000/api/recent/", {
          params: { page, pageSize: 6 },
        })
      ).data;

      if (more.length === 0) setHasMore(false);
      else {
        setPage((prev) => prev + 1);
        setRecipes((prev) => [...prev, ...more]);
      }
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect);
    if (observer && elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [recipes]);

  return (
    <LatestRecipesBase>
      {initialRecipes &&
        recipes.map((recipe, index) => (
          <RecipeCard key={index} size="small" data={recipe} />
        ))}
      <div ref={elementRef} />
    </LatestRecipesBase>
  );
};

export default LatestRecipes;
