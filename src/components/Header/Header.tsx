import { Link, useMatches } from "react-router-dom";
import _ from "lodash";

import SearchForm from "../SearchForm";

// @ts-ignore
import header_logo from "../../assets/header_logo.png?width=100&height=100";

import "./style.scss";

const Header = () => {
  const matches = useMatches();
  const lastRoute = _.last(matches);

  const isSearchEnabled = !["root", "search"].includes(lastRoute.id);

  return (
    <header className="header d-flex flex-start flex-md-row flex-column align-items-center p-3 px-md-4 border-bottom shadow-md">
      <Link to="/" className="logo d-flex align-items-center">
        <img src={header_logo} alt="logo" className="logo" />
        <h5 className="text my-0 mr-md-auto font-weight-bold">UA RhymeDB</h5>
      </Link>

      <nav className="navigation my-2 my-md-0 mr-md-3">
        <Link to="/songs" className="nav-button p-2">
          Пісні
        </Link>
      </nav>

      {isSearchEnabled && (
        <nav className="navigation my-2 my-md-0 mr-md-3 ml-auto">
          <SearchForm className="header-form" placeholder="" />
        </nav>
      )}
    </header>
  );
};

export default Header;
