import { gql } from "@apollo/client";
import client from "../apolloClient";

import {
  GetPostsDocument,
  GetPostsQuery,
  Post,
  PostFiltersInput,
} from "./getPosts.generated";

export const getPostsData = async (
  filters?: PostFiltersInput,
  limit?: number,
  page?: number,
  pageSize?: number,
  sort?: string
) => {
  const { data } = await client.query<GetPostsQuery>({
    query: gql`
      ${GetPostsDocument}
    `,
    variables: {
      filters,
      limit,
      page,
      pageSize,
      sort,
    },
  });
  const parseData = (data: GetPostsQuery) => {
    if (data.posts && data.posts?.data.length > 0) {
      return data.posts.data.map((r) => r.attributes) as Post[];
    }
    return null;
  };
  return parseData(data);
};
