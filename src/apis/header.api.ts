import { RootState } from '@store/index';

const baseUrl = import.meta.env.VITE_BASE_URL;

export const authHeader = (): any => {
  return {
    baseUrl: baseUrl,
    credentials: 'omit', //it will bypass CORS
    prepareHeaders: (headers: Headers, { getState }: any) => {
      const token = (getState() as RootState).auth.access_token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }
  };
};
