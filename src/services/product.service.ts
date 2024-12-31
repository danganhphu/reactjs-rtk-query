import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { authHeader } from '@apis/header.api';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery(authHeader()),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products',
      keepUnusedDataFor: 5
    })
  })
});

export const { useGetProductsQuery } = productApi;
