import { gql } from "@apollo/client";
import client from "../apolloClient";

import {
  GetSimilarRecipesByCategoryDocument,
  GetSimilarRecipesByCategoryQuery,
  Maybe,
  Recipe,
} from "./getSimilarRecipesByCategory.generated";

export const getSimilarRecipesByCategoryData = async (
  recipeSlug: string,
  categorySlug?: string,
  limit?: number
) => {
  const { data } = await client.query<GetSimilarRecipesByCategoryQuery>({
    query: gql`
      ${GetSimilarRecipesByCategoryDocument}
    `,
    variables: { recipeSlug, categorySlug, limit },
  });
  const parseData = (
    data: GetSimilarRecipesByCategoryQuery
  ): Maybe<Recipe[]> | undefined => {
    if (data.recipes && data.recipes?.data.length > 0) {
      return data.recipes.data.map((r) => r.attributes) as Recipe[];
    }
    return null;
  };
  return parseData(data);
};
