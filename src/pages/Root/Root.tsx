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
                <h1 id="title">The Best App to Increase Your Productivity</h1>
                <p id="description">
                  A mobile app is a computer program designed to run on a mobile
                  device such as a phone/tablet or watch.
                </p>
                <div className="social-btn">
                  <a className="app-btn" href="https://apple.com">
                    <i className="fab fa-apple" />
                    <p>
                      Available on the <br />{" "}
                      <span className="big-txt">App Store</span>
                    </p>
                  </a>
                  <a className="app-btn" href="https://google.com">
                    <i className="fab fa-google-play" />
                    <p>
                      Get it on <br />{" "}
                      <span className="big-txt">Google Play</span>
                    </p>
                  </a>
                </div>
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
        Відкрийте для себе красу українських рим через пісні та реп. Досліджуйте колекцію рим, які використовуються у різних музичних жанрах.
      </p>
    </div>
    <div className="about-list">
      <div className="about-card">
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="94.853"
            height="94.853"
            viewBox="0 0 94.853 94.853"
          >
            {/* SVG Шлях для іконки Підтримки */}
          </svg>
        </div>
        <h3>Підтримка 24/7</h3>
        <p>
          Наша команда завжди готова допомогти вам. Чи це питання про нашу базу даних або допомога з орієнтуванням у додатку – ми підтримуємо вас.
        </p>
      </div>
      <div className="about-card">
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="94.853"
            height="94.853"
            viewBox="0 0 94.853 94.853"
          >
            {/* SVG Шлях для іконки Захисту Даних */}
          </svg>
        </div>
        <h3>Конфіденційність Даних</h3>
        <p>
          Ваша конфіденційність має важливе значення. Ми серйозно ставимося до безпеки даних, забезпечуючи захист вашої особистої інформації та використання додатку.
        </p>
      </div>
      <div className="about-card">
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="94.853"
            height="94.853"
            viewBox="0 0 94.853 94.853"
          >
            {/* SVG Шлях для іконки Легкого Завантаження */}
          </svg>
        </div>
        <h3>Просте Завантаження</h3>
        <p>
          Зручний доступ до UA RhymeDB. Завантажте наш додаток з надійних магазинів додатків і розпочніть дослідження світу українських рим прямо зараз.
        </p>
      </div>
    </div>
  </div>
</section>




      <section id="contact" className="contact">
        <div className="container">
          <div className="text-center description">
            <h2 id="subtitle">Wait for launch</h2>
            <p>Fill your email to receive more information</p>
          </div>
          <form
            id="form"
            className="form text-center"
            method="POST"
            action="https://www.freecodecamp.com/email-submit"
          >
            <div className="input-group">
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter your email address"
              />
              <button type="submit" id="submit" className="submit-button">
                Get Started
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default RootPage;
