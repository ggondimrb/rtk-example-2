import { serverApi } from "./api";

export type PostType = {
  id: number;
  title: string;
  author: string;
  checked: boolean;
}

  export const postsApi = serverApi.injectEndpoints({
    endpoints: (builder) => ({
      getPosts: builder.query<PostType[], void>({
          query: () => (
            {
              url: 'posts',
              method: 'GET',
            }
          )
        }),
    })
  })

  export const { useGetPostsQuery } = postsApi;