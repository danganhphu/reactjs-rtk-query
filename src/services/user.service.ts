import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { authHeader } from '@apis/header.api';

export const userApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery(authHeader()),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => ({
        url: 'users',
        method: 'GET'
      }),
      providesTags: ['Users'],
      transformResponse: (users: User[]) =>
        users.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    }),
    addUser: builder.mutation<User, Omit<User, 'id'>>({
      query: (user) => ({
        url: 'users',
        method: 'POST',
        body: user
      }),
      invalidatesTags: ['Users']
    }),
    updateUser: builder.mutation<User, User>({
      query: (user) => ({
        url: `users/${user.id}`,
        method: 'PUT',
        body: user
      }),
      invalidatesTags: ['Users']
    }),
    deleteUser: builder.mutation<void, User>({
      query: (user) => ({
        url: `users/${user.id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Users']
    })
  })
});

export const { useGetUsersQuery, useAddUserMutation, useUpdateUserMutation, useDeleteUserMutation } = userApi;
