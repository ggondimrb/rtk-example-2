import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type PostType = {
    id: number;
    title: string;
    author: string;
    checked: boolean;
  }

  export const serverApi = createApi({
    reducerPath: 'serverApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({}),
})
