import { gql } from "@apollo/client";
import client from "../apolloClient";
import {
  GetTrendsDocument,
  GetTrendsQuery,
  Maybe,
  Recipe,
} from "./getTrends.generated";

export const getTrendsData = async (limit?: number) => {
  const { data } = await client.query<GetTrendsQuery>({
    query: gql`
      ${GetTrendsDocument}
    `,
    variables: { limit },
  });
  const parseData = (data: GetTrendsQuery): Maybe<Recipe[]> | undefined => {
    if (data?.recipes && data?.recipes?.data.length > 0) {
      return data?.recipes?.data?.map((r) => r.attributes) as Recipe[];
    }
    return null;
  };
  return parseData(data);
};
