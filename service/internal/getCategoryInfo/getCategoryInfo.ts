import { gql } from "@apollo/client";
import client from "../apolloClient";
import {
  Category,
  GetCategoryInfoDocument,
  GetCategoryInfoQuery,
  Maybe,
} from "./getCategoryInfo.generated";

export const getCategoryInfoData = async (slug?: string) => {
  const { data } = await client.query<GetCategoryInfoQuery>({
    query: gql`
      ${GetCategoryInfoDocument}
    `,
    variables: { slug },
  });
  const parseData = (
    data: GetCategoryInfoQuery
  ): Maybe<Category> | undefined => {
    if (data.categories?.data && data.categories?.data.length > 0) {
      return data?.categories?.data?.map((r) => r.attributes)[0] as Category;
    }
    return null;
  };
  return parseData(data);
};
