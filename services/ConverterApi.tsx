// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const convertApi = createApi({
  reducerPath: 'convertApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dev.api.tredingtools.com/api'
  }),
  endpoints: builder => ({
    getJsonData: builder.mutation({
      query: ({ body, endpoint }) => {
        // debugger;
        return {
          url: endpoint,
          method: 'POST',
          body: body
        };
      }
    })
  })
});

export const { useGetJsonDataMutation } = convertApi;
