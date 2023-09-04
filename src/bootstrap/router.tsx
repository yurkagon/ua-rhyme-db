import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout";

import { basename } from "../constants";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          lazy: () => import("../pages/Root")
        },
        {
          path: "/search/:phrase",
          lazy: () => import("../pages/Search")
        },
        // {
        //   path: "/artists",
        //   element: <h1>artists</h1>,
        // },
        // {
        //   path: "/rhymes",
        //   element: <h1>rhymes</h1>,
        // },
        {
          path: "/songs",
          lazy: () => import("../pages/Songs"),
        },
        {
          path: "/songs/:id",
          element:  <h1>rhymes</h1>,
          lazy: () => import("../pages/Song")
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
