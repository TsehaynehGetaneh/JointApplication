import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { University } from '@/types/university';
import { parseCookies } from 'nookies';


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

function isValidJSON(jsonString:any) {
  try {
    JSON.parse(jsonString);
  } catch (e) {
    return false;
  }
  return true;
}
const cookies = parseCookies();
const userData = cookies.user ? JSON.parse(cookies.user) : null;  //  && typeof cookies.user === 'string' && isValidJSON(cookies.user)
const data = userData ? userData.data : null;


// Define a service using API routes
export const myCollegesApi = createApi({
  reducerPath: 'myCollegesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    // mode: 'cors',
    prepareHeaders: (headers, { getState }) => {
    
      // pass the token to the header
      if (data.token) {
        headers.set('authorization', `Bearer ${data.token}`)
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
