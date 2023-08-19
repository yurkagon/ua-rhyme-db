import { RouterProvider } from "react-router-dom";

import a from "../store";

import router from "./router";

import "../style.scss";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
