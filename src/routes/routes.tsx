import { lazy } from 'react';
import { PrivateRoute, PublicRoute } from './index';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

const LoginPageLazy = lazy(() => import('@pages/Login/Login'));
const RegisterPageLazy = lazy(() => import('@pages/Register/Register'));
const HomePageLazy = lazy(() => import('@pages/Home/Home'));
const ProductPageLazy = lazy(() => import('@pages/Product/Product'));
const NotFoundPageLazy = lazy(() => import('@pages/NotFound/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <PublicRoute />,
    children: [
      {
        path: '/login',
        element: <LoginPageLazy />
      },
      {
        path: '/register',
        element: <RegisterPageLazy />
      }
    ]
  },
  {
    path: '/',
    element: <PrivateRoute />,
    children: [
      {
        index: true,
        element: <HomePageLazy />
      },
      {
        path: '/product',
        element: <ProductPageLazy />
      }
      // {
      //   path: '/quote/:quoteId/categories',
      //   element: <CategoriesPageLazy />
      // },
      // {
      //   path: '/quote/:quoteId/employees',
      //   element: <MemberPageLazy />
      // }
    ]
  },

  {
    path: '*',
    element: <NotFoundPageLazy />
  }
];

const router = createBrowserRouter(routes);

export default router;
