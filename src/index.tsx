import { createRoot } from "react-dom/client";

import App from "./bootstrap";

const root = createRoot(document.getElementById("root")!);

root.render(<App />);
