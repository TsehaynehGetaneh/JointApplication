import { University } from '@/types/university';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Define a service using API routes
export const collegeApi = createApi({
  reducerPath: 'collegeApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, mode: 'cors' }),
  endpoints: (builder) => ({
    getColleges: builder.query<University[], void>({
      query: () => '/universities',
    }),
  }),
});

// Export hooks for usage
export const { useGetCollegesQuery } = collegeApi;
