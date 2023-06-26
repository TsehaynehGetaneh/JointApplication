import { Credentials, LoginResponse } from '@/types/auth';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Define a service using API routes
export const adminApi = createApi({
  reducerPath: 'AdminApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders:(headers, { getState }) => {
        const token = (getState() as RootState).auth.token
        if (token){
            headers.set('Authorization', `Bearer ${token}`)
        }
        return headers
    }
  }),
  endpoints: (builder) => ({
    adminLogin: builder.mutation<LoginResponse, Credentials>({
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