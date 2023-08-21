import { RouterProvider } from "react-router-dom";

import router from "./router";

// TODO: wait for fix
// import "bootstrap/dist/css/bootstrap.min.css";
import "../style/index.scss";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
