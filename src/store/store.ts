import { configureStore } from '@reduxjs/toolkit';
import { authApi, userApi, productApi } from '@services/index';
import authSlice from '@redux/auth.slice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer
  },
  //Registering custom middleware along with default/existing middleware
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware, productApi.middleware)
});
