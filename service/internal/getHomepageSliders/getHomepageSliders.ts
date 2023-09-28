import { gql } from "@apollo/client";
import client from "../apolloClient";
import {
  GetHomepageSlidersDocument,
  GetHomepageSlidersQuery,
  Maybe,
  Recipe,
} from "./getHomepageSliders.generated";

export const getHomepageSlidersData = async () => {
  const { data } = await client.query<GetHomepageSlidersQuery>({
    query: gql`
      ${GetHomepageSlidersDocument}
    `,
  });
  const parseData = (
    data: GetHomepageSlidersQuery
  ): Maybe<Recipe[]> | undefined => {
    if (
      data?.homepage?.data?.attributes?.slider?.recipes &&
      data?.homepage?.data?.attributes?.slider?.recipes.data.length > 0
    ) {
      return data?.homepage?.data?.attributes?.slider?.recipes?.data.map(
        (r) => r.attributes
      ) as Recipe[];
    }
    return null;
  };
  return parseData(data);
};
