import { gql } from "@apollo/client";
import client from "../apolloClient";
import {
  GetRecipesDocument,
  GetRecipesQuery,
  Maybe,
  Recipe,
  RecipeEntityResponseCollection,
  RecipeFiltersInput,
} from "./getRecipes.generated";

export const getRecipesData = async (
  filters?: RecipeFiltersInput,
  limit?: number,
  page?: number,
  pageSize?: number,
  sort?: string
) => {
  const { data } = await client.query<GetRecipesQuery>({
    query: gql`
      ${GetRecipesDocument}
    `,
    variables: {
      filters,
      limit,
      page,
      pageSize,
      sort,
    },
  });
  const parseData = (data: GetRecipesQuery) => {
    if (data.recipes && data.recipes?.data.length > 0) {
      return {
        data: data.recipes.data.map((r) => r.attributes) as Recipe[],
        meta: data.recipes.meta,
      };
    }
    return null;
  };
  return parseData(data);
};
