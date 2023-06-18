import { User } from '@/types/user';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Define a service using API routes
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, mode: 'cors' }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    registerUser: builder.mutation<User, Partial<User>>({
      query: (user) => ({
        url: '/users/register',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
    loginUser: builder.mutation<User, Partial<User>>({
      query: (user) => ({
        url: '/users/login',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

// Export hooks for usage
export const { useRegisterUserMutation, useLoginUserMutation } = userApi;
