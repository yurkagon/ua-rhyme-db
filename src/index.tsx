import { createRoot } from "react-dom/client";

import a from "./store";

import "./style.scss";

import RootPage from "./pages/Root";

console.log(a);

const App = () => {
  return <RootPage />;
};

const root = createRoot(document.getElementById("root")!);

root.render(<App />);
