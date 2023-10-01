import { gql } from "@apollo/client";
import client from "../apolloClient";
import {
  GetTagInfoDocument,
  GetTagInfoQuery,
  Maybe,
  Tag,
} from "./getTagInfo.generated";

export const getTagInfoData = async (slug?: string) => {
  const { data } = await client.query<GetTagInfoQuery>({
    query: gql`
      ${GetTagInfoDocument}
    `,
    variables: { slug },
  });
  const parseData = (data: GetTagInfoQuery): Maybe<Tag> | undefined => {
    if (data.tags?.data && data.tags?.data.length > 0) {
      return data?.tags?.data?.map((r) => r.attributes)[0] as Tag;
    }
  };
  return parseData(data);
};
