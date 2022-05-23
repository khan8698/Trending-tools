// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const textBody = `
    id,fruit_name,color,code
    1,Apple,RED,#D62433
    2,Orange,ORANDE,#FEB635
    3,Banana,YELLOW,#FEE492
    4,Grapes,VIOLET,#B370AD
    5,KIWI,GREEN,#9BA207
    6,Dates,BROWN,#922E2F`;

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dev.api.tredingtools.com'
  }),
  endpoints: builder => ({
    getJsonData: builder.mutation({
      query: ({ text }) => {
        debugger;
        return {
          url: '/api/csv/json/text',
          method: 'POST',
          // headers: {
          //   'Content-Type': 'multipart/form-data',
          //   Accept: 'application/json'
          // },
          body: text
        };
      }
    })
  })
});

export const { useGetJsonDataMutation } = postApi;
