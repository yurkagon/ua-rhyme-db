import main_page_logo from "../../assets/main_page_logo.png";

import "./style.scss";

const RootPage = () => {
  return (
    <>
      <section className="masthead">
        <div className="content">
          <div className="container d-flex content-container">
            <div className="left-column">
              <div className="hero-img">
                <img
                  className="img-fluid img-device"
                  src={main_page_logo}
                  alt="device-image"
                />
              </div>
            </div>
            <div className="right-column">
              <div className="hero-content">
                <h1 id="title">База даних римування українських виконавців</h1>
                <form id="form" className="form text-center">
                  <div className="input-group">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Enter your email address"
                    />
                    <button type="submit" id="submit" className="submit-button">
                      Знайти
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="text-center description">
            <h2 id="subtitle">Ласкаво просимо до UA RhymeDB</h2>
            <p>
              Відкрийте для себе красу українських рим через пісні та реп.
              Досліджуйте колекцію рим, які використовуються у різних музичних
              жанрах.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default RootPage;
