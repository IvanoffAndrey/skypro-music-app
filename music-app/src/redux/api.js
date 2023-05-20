import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://painassasin.online/" }),
  endpoints: (build) => ({
    getTracks: build.query({
      query: () => "catalog/track/all/",
    }),
    regUser: build.mutation({
      query: (body) => ({
        url: "user/signup/",
        method: "POST",
        body,
      }),
    }),
    logUser: build.mutation({
      query: (body) => ({
        url: "user/login/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetTracksQuery, useRegUserMutation, useLogUserMutation } = api;
