import { useMemo } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import StaticDatabase, { Song } from "../../services/StaticDatabase";
import { splitByWords, isWordSearchable } from "../../utils";

import "./style.scss";

export const Component = () => {
  const navigate = useNavigate();
  const songData = useLoaderData() as Song;

  const textElement = useMemo(() => {
    return songData.data.text.split("\n").map((line, index) => {
      if (line === "") return <br key={index} />;

      const isDescription = line.includes("[") || line.includes("]");
      if (isDescription) {
        return (
          <p className="text-primary-italic" key={index}>
            {line}
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
                className="clickable"
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
    <main className="song-page container p-3">
      <section className="row">
        <div className="col-md-6">
          <h1 className="text-primary">{songData.data.info.name}</h1>
          <p className="text-primary-italic">{songData.data.info.author}</p>
        </div>
        {songData.data.info.youtube && (
          <div className="col-md-6">
            <iframe
              className="youtube-embed"
              src={songData.data.info.youtube.replace("watch?v=", "embed/")}
              allowFullScreen
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        )}
      </section>
      <hr />
      <h2 className="text-primary mb-3">Слова: </h2>

      <section className="lyrics">{textElement}</section>
      <hr />
    </main>
  );
};

export const loader = ({ params }) => {
  return StaticDatabase.loadFullSongData(params.id);
};
