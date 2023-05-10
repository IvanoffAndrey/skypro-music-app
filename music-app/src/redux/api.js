import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://painassasin.online/user/" }),
  endpoints: (build) => ({
    regUser: build.mutation({
      query: (body) => ({
        url: "signup/",
        method: "POST",
        body,
      }),
    }),
    logUser: build.mutation({
      query: (body) => ({
        url: "login/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegUserMutation, useLogUserMutation } = api;
