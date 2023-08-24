import main_page_logo from "../../assets/main_page_logo.png";

import SearchForm from "../../components/SearchForm";

import "./style.scss";

const RootPage = () => {
  return (
    <main>
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
                <h1 className="mb-3">
                  База даних римування українських виконавців
                </h1>

                <SearchForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="text-center description">
          <h2 id="subtitle">Ласкаво просимо до UA RhymeDB</h2>
          <p>
            Відкрийте для себе красу українських рим через пісні та реп.
            Досліджуйте колекцію рим, які використовуються у різних музичних
            жанрах.
          </p>
        </div>
      </section>
    </main>
  );
};

export default RootPage;
