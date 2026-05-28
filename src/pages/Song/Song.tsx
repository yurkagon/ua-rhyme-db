import { useMemo } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import StaticDatabase, { Song } from "../../services/StaticDatabase";
import { splitByWords, isWordSearchable } from "../../utils";

export const Component = () => {
  const navigate = useNavigate();
  const songData = useLoaderData() as Song;

  const textElement = useMemo(() => {
    return songData.data.text.split("\n").map((line, index) => {
      if (line === "") return <br key={index} />;

      const isDescription = line.includes("[") || line.includes("]");
      if (isDescription) {
        return (
          <p className="text-primary italic opacity-80" key={index}>
            {line.replace("[", "").replace("]", "")}
          </p>
        );
      }

      const words = splitByWords(line);

      return (
        <p key={index}>
          {words.map((word, wordIndex) => {
            if (!isWordSearchable(word)) {
              return <span key={wordIndex}>{word}</span>;
            }

            return (
              <span
                onClick={() => navigate(`/search/${encodeURIComponent(word)}`)}
                key={wordIndex}
                className="cursor-pointer rounded-sm transition-colors duration-100 hover:bg-primary hover:text-brand-white"
              >
                {word}
              </span>
            );
          })}
        </p>
      );
    });
  }, [songData.data.text]);

  return (
    <main className="mx-auto max-w-screen-xl p-3">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h1 className="text-primary text-3xl leading-snug">
            {songData.data.info.name}
          </h1>
          <p className="text-primary italic opacity-80">
            {songData.data.info.author}
          </p>
        </div>
        {songData.data.info.youtube && (
          <div>
            <iframe
              className="w-full h-full min-h-[300px]"
              src={songData.data.info.youtube.replace("watch?v=", "embed/")}
              allowFullScreen
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        )}
      </section>
      <hr className="my-4" />
      <h2 className="text-primary text-2xl mb-3">Слова: </h2>

      <section className="mx-auto">{textElement}</section>
      <hr className="my-4" />
    </main>
  );
};

export const loader = ({ params }) => {
  return StaticDatabase.loadFullSongData(params.id);
};
