import { Link, useMatches } from "react-router-dom";
import _ from "lodash";

import SearchForm from "../SearchForm";

// @ts-ignore
import header_logo from "../../assets/header_logo.png?width=100&height=100";

const Header = () => {
  const matches = useMatches();
  const lastRoute = _.last(matches);

  const isSearchEnabled = !["root", "search"].includes(lastRoute.id);

  return (
    <header className="flex flex-col items-center w-full bg-white p-3 md:flex-row md:px-4 shadow-md select-none">
      <Link
        to="/"
        className="flex items-center mr-[5%] text-primary hover:text-primary/80"
      >
        <img src={header_logo} alt="logo" className="w-[50px] h-[50px] mr-2.5" />
        <h5 className="my-0 font-bold">UA RhymeDB</h5>
      </Link>

      <nav className="my-2 md:my-0 md:mr-3">
        <Link
          to="/songs"
          className="p-2 mr-5 text-primary hover:text-primary/80"
        >
          Пісні
        </Link>
      </nav>

      {isSearchEnabled && (
        <nav className="my-2 md:my-0 md:mr-3 md:ml-auto">
          <SearchForm placeholder="" />
        </nav>
      )}
    </header>
  );
};

export default Header;
