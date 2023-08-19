import { Outlet } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";

const RootPage = () => (
  <>
    <Header />

    <main>
      <Outlet />
    </main>

    <Footer />
  </>
);

export default RootPage;
