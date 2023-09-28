import { gql } from "@apollo/client";
import client from "../apolloClient";
import { GetRecipesDocument, GetRecipesQuery } from "./getRecipes.generated";

export const getRecipesData = async () => {
  const { data } = await client.query<GetRecipesQuery>({
    query: gql`
      ${GetRecipesDocument}
    `,
  });
  return data;
};
