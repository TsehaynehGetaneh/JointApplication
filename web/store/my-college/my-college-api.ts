import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { University } from '@/types/university';


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Define a service using API routes
export const myCollegesApi = createApi({
  reducerPath: 'myCollegesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    // mode: 'cors',
    prepareHeaders: (headers, { getState }) => {
      // const token = (getState() as RootState).auth.token
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTJiMzg3NmVkMmM0YWZmOTY2MjY0ZCIsImlhdCI6MTY4NzI5OTc1NiwiZXhwIjoxNjg3OTA0NTU2fQ.iQJoyKrnFFO0f97nNwwyiMsrSisO34CqSDSIlI0SxK4'
      // pass the token to the header
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    },
  }),
  tagTypes: ['UserCollege'],
  endpoints: (builder) => ({
    getMyColleges: builder.query<University[], void>({
      query: () => '/myColleges/getColleges',
      providesTags: ['UserCollege'],
    }),
    addCollege: builder.mutation<void, { collegeId: string }>({
      query: ({ collegeId }) => ({
        url: `/myColleges/addColleges/${collegeId}`,
        method: 'POST',
      }),
      invalidatesTags: ['UserCollege'],
    }),
    removeCollege: builder.mutation<void, { collegeId: string }>({
      query: ({ collegeId }) => ({
        url: `/myColleges/removeCollege/${collegeId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['UserCollege'],
    }),
  }),
});

// Export hooks for usage
export const { useGetMyCollegesQuery, useAddCollegeMutation, useRemoveCollegeMutation } = myCollegesApi;
