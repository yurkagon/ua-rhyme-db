import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout";

import RootPage from "../pages/Root";

import { basename } from "../constants";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <RootPage />,
        },
        {
          path: "/search/:phrase",
          lazy: () => import("../pages/Search")
        },
        {
          path: "/artists",
          element: <h1>artists</h1>,
        },
        {
          path: "/rhymes",
          element: <h1>rhymes</h1>,
        },
        {
          path: "*",
          lazy: () => import("../pages/NotFound")
        }
      ],
    },
  ],
  {
    basename,
  }
);

export default router;
