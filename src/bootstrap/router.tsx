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
      ],
    },
  ],
  {
    basename,
  }
);

export default router;
