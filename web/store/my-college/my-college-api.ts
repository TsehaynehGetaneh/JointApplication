import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { University } from '@/types/university';
import { parseCookies } from 'nookies';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

function isValidJSON(jsonString: any) {
  try {
    JSON.parse(jsonString);
  } catch (e) {
    return false;
  }
  return true;
}

function getTokenFromCookies() {
  const cookies = parseCookies();
  const userData = cookies.user && typeof cookies.user === 'string' && isValidJSON(cookies.user) ? JSON.parse(cookies.user) : null;
  const data = userData ? userData.data : null;
  return data ? data.token : null;
}

// Define a service using API routes
export const myCollegesApi = createApi({
  reducerPath: 'myCollegesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // Get the token from cookies
      const token = getTokenFromCookies();

      // Pass the token to the header
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
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