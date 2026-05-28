import _ from "lodash";

import StaticDatabase from "../../services/StaticDatabase";

import SearchForm from "../../components/SearchForm";

import main_page_logo from "../../assets/main_page_logo.png";

import "./Root.css";

export const Component = () => {
  const stats = StaticDatabase.getStats();

  const { label: sampleWord } = _.sample(StaticDatabase.getRhymeWords());

  return (
    <main>
      <section className="masthead-wave relative bg-primary text-brand-white pb-32 mb-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex flex-col md:flex-row">
            <div className="relative md:w-1/2">
              <div>
                <img
                  className="max-w-full h-[30rem] object-contain"
                  src={main_page_logo}
                  alt="device-image"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="flex flex-col justify-center h-full max-w-[70%] mx-auto">
                <h1 className="mb-3 text-3xl leading-snug">
                  База даних римування українських виконавців
                </h1>

                <SearchForm
                  placeholder={sampleWord}
                  className="[&_input]:border-white [&_input]:bg-transparent [&_input]:text-white [&_input::placeholder]:text-white/70 [&_button]:text-white [&_button]:border-white [&_button]:hover:bg-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div className="flex flex-col items-center text-center px-4">
          <h2 className="text-2xl leading-tight">
            Ласкаво просимо до UA RhymeDB
          </h2>

          <p className="max-w-2xl my-4 leading-relaxed">
            Відкрийте для себе красу українських рим через пісні та реп.
            Досліджуйте колекцію рим, які використовуються у різних музичних
            жанрах.
          </p>
        </div>
      </section>

      <section className="mb-6">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
            <div className="text-center font-bold" style={{ fontSize: 35 }}>
              <i className="fa fa-solid fa-users text-primary text-6xl" />
              <div>{stats.authors}</div>
              <h5 className="text-base font-bold">Виконавців</h5>
            </div>

            <div className="text-center font-bold" style={{ fontSize: 35 }}>
              <i className="fa fa-solid fa-music text-primary text-6xl" />
              <div>{stats.songs}</div>
              <h5 className="text-base font-bold">Пісень</h5>
            </div>

            <div className="text-center font-bold" style={{ fontSize: 35 }}>
              <i className="fa fa-solid fa-book text-primary text-6xl" />
              <div>{stats.rhymes}</div>
              <h5 className="text-base font-bold">Рим</h5>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
