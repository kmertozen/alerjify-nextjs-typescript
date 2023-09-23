import client from "../apolloClient";
import { GetRecipesQuery } from "./getRecipes.generated";
import { getRecipes } from "./getRecipes.graphql";

export const getRecipesData = async () => {
  const { data } = await client.query<GetRecipesQuery>({
    query: getRecipes,
  });
  return data;
};
