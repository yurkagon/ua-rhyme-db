import { useMemo } from "react";
import clsx from "clsx";
import { useLoaderData } from "react-router-dom";
import StaticDatabase, { Song } from "../../services/StaticDatabase";

import "./style.scss";


export const Component = () => {
  const songData = useLoaderData() as Song;

  const textData = useMemo(() => songData.data.text.split("\n"), [songData.data.text])

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

      <section className="lyrics">
        {textData.map((line, index) => {
          if(line === "") return (<br key={index}/>);

          const isDescription = line.includes("[") || line.includes("]");

          return <p className={clsx(isDescription && "text-primary-italic")}key={index}>{line}</p>
        })}
      </section>
      <hr />
    </main>
  );
};

export const loader = ({ params }) => {
  return StaticDatabase.loadFullSongData(params.id);
};
