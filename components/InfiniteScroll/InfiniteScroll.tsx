import { Recipe } from "@/generated/graphql";
import React, { useEffect, useRef, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import axios from "axios";
import { InfiniteScrollBase } from "./InfiniteScroll.style";

const InfiniteScroll = ({
  initialRecipes,
  tag,
  category,
}: {
  initialRecipes: Recipe[];
  tag?: string;
  category?: string;
}) => {
  const [recipes, setRecipes] = useState(initialRecipes);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const elementRef = useRef(null);

  const onIntersect = async (entries: any) => {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting && hasMore) {
      const more = (
        await axios.get("/api/recent/", {
          params: { page, pageSize: 6, tag, category },
        })
      ).data;

      if (!more) setHasMore(false);
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
    <InfiniteScrollBase>
      {initialRecipes &&
        recipes.map((recipe, index) => (
          <RecipeCard key={index} size="small" data={recipe} />
        ))}
      <div ref={elementRef} />
    </InfiniteScrollBase>
  );
};

export default InfiniteScroll;
