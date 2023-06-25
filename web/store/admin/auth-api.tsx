// import { Credentials, LoginResponse } from '@/types/auth';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Define a service using API routes
export const adminApi = createApi({
  reducerPath: 'AdminApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, mode: 'cors' }),
  tagTypes: ['Admin'],
  endpoints: (builder) => ({
    adminLogin: builder.mutation({
        query: (credentials) => ({
          url: '/admin/login',
          method: 'POST',
          body: credentials,
        }),
      }),
  }),
});

// Export hooks for usage
export const { useAdminLoginMutation } = adminApi;