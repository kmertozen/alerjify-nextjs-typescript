import { gql } from "@apollo/client";
import client from "../apolloClient";
import {
  GetLatestRecipesDocument,
  GetLatestRecipesQuery,
  Maybe,
  Recipe,
} from "./getLatestRecipes.generated";

export const getLatestRecipesData = async (
  limit?: number,
  page?: number,
  pageSize?: number
) => {
  const { data } = await client.query<GetLatestRecipesQuery>({
    query: gql`
      ${GetLatestRecipesDocument}
    `,
    variables: { limit, page, pageSize },
  });
  const parseData = (
    data: GetLatestRecipesQuery
  ): Maybe<Recipe[]> | undefined => {
    if (data.recipes && data.recipes?.data.length > 0) {
      return data.recipes.data.map((r) => r.attributes) as Recipe[];
    }
  };
  return parseData(data);
};
