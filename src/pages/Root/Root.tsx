import main_page_logo from "../../assets/main_page_logo.png";

import SearchForm from "../../components/SearchForm";

import StaticDatabase from "../../services/StaticDatabase";

import "./style.scss";

export const Component = () => {
  const stats = StaticDatabase.getStats();

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

      <section className="about mb-5">
        <div className="text-center description">
          <h2 id="subtitle">Ласкаво просимо до UA RhymeDB</h2>

          <p>
            Відкрийте для себе красу українських рим через пісні та реп.
            Досліджуйте колекцію рим, які використовуються у різних музичних
            жанрах.
          </p>
        </div>
      </section>

      <section className="counter-stats mb-4">
        <div className="container">
          <div className="row justify-content-center align-items-center flex-md-row flex-column">
            <div className="col-2 stats">
            <i className="fa fa-solid fa-users" />
              <div className="counting">
                {stats.authors}
              </div>
              <h5>Виконавців</h5>
            </div>

            <div className="col-2 stats">
            <i className="fa fa-solid fa-music" />
              <div className="counting">
                {stats.songs}
              </div>
              <h5>Пісень</h5>
            </div>

            <div className="col-2 stats">
            <i className="fa fa-solid fa-book" />
              <div className="counting">
                {stats.rhymes}
              </div>
              <h5>Рим</h5>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
