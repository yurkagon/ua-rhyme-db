import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import StaticDatabase from "../../services/StaticDatabase";

import "./style.scss";

export const Component = () => {
  const navigate = useNavigate();

  const songData = useMemo(
    () => StaticDatabase.generateAuthorDataBasedOnSongs(),
    [],
  );

  return (
    <main className="songs container mt-3">
      <h1 className="text-center mb-3">Пісні</h1>

      <section className="row">
        {songData.map((artist) => (
          <div className="artist-song-list col-md-4" key={artist.id}>
            <div className="mb-3">
              <div className="card-body">
                <h5 className="card-title text-primary-italic">{artist.name}</h5>
                <ul className="song-list list-group list-group-flush">
                  {artist.songs.map((song) => (
                    <li
                      className="list-group-item"
                      onClick={() => navigate(`/songs/${song.id}`)}
                      key={song.id}
                    >
                      {song.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};
