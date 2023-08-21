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
          path: "/search",
          element: <h1>Search</h1>,
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
