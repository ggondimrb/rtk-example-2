import { serverApi } from "./api";

export type PostType = {
  id: number;
  title: string;
  author: string;
  checked: boolean;
}

  export const postsApi = serverApi.injectEndpoints({
    endpoints: (builder) => ({
      getPosts: builder.query<PostType[], string>({
          query: (title_like) => (
            {
              url: 'posts',
              method: 'GET',
              params: {title_like}
            }
          ),
          providesTags: () => [{type:"Posts", code:'1'}],
          transformResponse: (response: PostType[]) => {
            response.sort((a, b) => {
              if (a.title < b.title) return -1;
              if (a.title > b.title) return 1;
              return 0;
            })
            return response;
          }
        }),
        addPost: builder.mutation<PostType, PostType>({
          query: (body) => (
            {
              url: 'posts',
              method: 'POST',
              body
            }
          ),
          invalidatesTags: () => [{type:"Posts", code: '1'}]          
        }),        
    })
  })

  export const { useGetPostsQuery, useAddPostMutation } = postsApi;