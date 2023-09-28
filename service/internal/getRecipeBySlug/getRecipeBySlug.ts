import { gql } from "@apollo/client";
import client from "../apolloClient";
import {
  GetRecipeBySlugDocument,
  GetRecipeBySlugQuery,
  Maybe,
  Recipe,
} from "./getRecipeBySlug.generated";

export const getRecipesBySlugData = async (slug?: string) => {
  const { data } = await client.query<GetRecipeBySlugQuery>({
    query: gql`
      ${GetRecipeBySlugDocument}
    `,
    variables: { slug: slug },
  });
  const parseData = (data: GetRecipeBySlugQuery): Maybe<Recipe> | undefined => {
    if (data.recipes && data.recipes?.data.length > 0) {
      return data.recipes.data.map((r) => r.attributes)[0] as Recipe;
    }
  };
  return parseData(data);
};
