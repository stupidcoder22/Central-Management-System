import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "naturaldisasterapi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
  endpoints: (builder) => ({
    createIncident: builder.mutation({
      query: (incidentData) => ({
        url: "/incident",
        method: "POST",
        body: incidentData,
      }),
    }),

    getAllIncidents: builder.query({
      query: () => ({
        url: "/incident",
        method: "GET",
      }),
    }),

    registerUser: builder.mutation({
      query: (registerData) => ({
        url: "auth/register",
        method: "POST",
        body: registerData,
      }),
    }),

    loginUser: builder.mutation({
      query: (loginData) => ({
        url: "auth/login",
        method: "POST",
        body: loginData,
      }),
    }),
  }),
});

export const {
  useCreateIncidentMutation,
  useGetAllIncidentsQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
} = apiSlice;
