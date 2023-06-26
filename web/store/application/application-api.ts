import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
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
export const applicationApi = createApi({
  reducerPath: 'applicationApi',
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
  tagTypes: ['application'],
  endpoints: (builder) => ({
   
    addApplication: builder.mutation({
      query: (file) => ({
        url: `/application`,
        method: 'POST',
        body: file,

      }),
      invalidatesTags: ['application'],
    }),
 
  }),
});

// Export hooks for usage
export const {  useAddApplicationMutation } = applicationApi;
