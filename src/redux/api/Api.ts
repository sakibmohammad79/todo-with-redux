import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://level2-assignment4.vercel.app/api",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: "/courses",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTodosQuery } = baseApi;
