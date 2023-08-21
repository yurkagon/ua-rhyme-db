import A from "../../assets/3.png";

import "./style.scss";

const Header = () => (
  <header className="header d-flex justify-content-between align-items-center p-3 px-md-4 border-bottom shadow-md">
    <div className="logo d-flex align-items-center">
      <img
        src={A}
        alt="logo"
        className="logo mr-3"
      />
      <h5 className="text my-0 mr-md-auto font-weight-bold">UA RhymeDB</h5>
    </div>

    <nav className="my-2 my-md-0 mr-md-3">
      <a className="p-2 text-dark" href="#">
        Виконавці
      </a>
      <a className="p-2 text-dark" href="#">
        Пісні
      </a>
      <a className="p-2 text-dark" href="#">
        Рими
      </a>
      <a className="p-2 text-dark" href="#">
        Pricing
      </a>
    </nav>
    <a className="btn btn-outline-primary" href="#">
      Sign up
    </a>
  </header>
);

export default Header;
