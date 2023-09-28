import { gql } from "@apollo/client";
import client from "../apolloClient";
import {
  GetHomepageRecipeCardsDocument,
  GetHomepageRecipeCardsQuery,
  Maybe,
  Recipe,
} from "./getHomepageRecipeCards.generated";

export const getHomepageRecipeCardsData = async () => {
  const { data } = await client.query<GetHomepageRecipeCardsQuery>({
    query: gql`
      ${GetHomepageRecipeCardsDocument}
    `,
  });
  const parseData = (
    data: GetHomepageRecipeCardsQuery
  ): Maybe<Recipe[]> | undefined => {
    if (
      data?.homepage?.data?.attributes?.recipeCards?.recipes &&
      data?.homepage?.data?.attributes?.recipeCards?.recipes.data.length > 0
    ) {
      return data?.homepage?.data?.attributes?.recipeCards?.recipes?.data.map(
        (r) => r.attributes
      ) as Recipe[];
    }
    return null;
  };
  return parseData(data);
};
