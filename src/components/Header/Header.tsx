import A from "../../assets/5.png";

const Header = () => (
  <header id="header" className="header">
    <div className="container flex header-menu">
      <nav>
        <ul>
          <li className="d-flex align-items-center">
            <span id="header-img">
            <img
                  className=""
                  src={A}
                  width={60}
                  height={60}
                  alt="device-image"
                />

              <span>U</span>
              <span>A</span> RhymeDB
            </span>
          </li>
          <li  className="d-flex align-items-center">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li  className="d-flex align-items-center">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li  className="d-flex align-items-center">
            <a className="nav-link" href="#video">
              Showcase
            </a>
          </li>
          <li  className="d-flex align-items-center">
            <a className="nav-link" href="#contact">
              KEK
            </a>
          </li>
        </ul>
      </nav>
      {/* <a className="header-cta" href="#">
        Try For Free
      </a> */}
    </div>
  </header>
);

export default Header;
