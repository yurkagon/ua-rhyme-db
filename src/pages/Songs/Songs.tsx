import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import StaticDatabase from "../../services/StaticDatabase";

export const Component = () => {
  const navigate = useNavigate();

  const songData = useMemo(
    () => StaticDatabase.generateAuthorDataBasedOnSongs(),
    [],
  );

  return (
    <main className="mx-auto max-w-screen-xl px-4 mt-3">
      <h1 className="text-center text-3xl leading-snug mb-3">Пісні</h1>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {songData.map((artist) => (
          <div key={artist.id}>
            <div className="mb-3">
              <div className="p-4">
                <h5 className="text-primary italic opacity-80 text-lg font-semibold mb-2">
                  {artist.name}
                </h5>
                <ul className="divide-y">
                  {artist.songs.map((song) => (
                    <li
                      className="cursor-pointer py-2 px-3 transition duration-200 hover:-translate-y-1 hover:shadow-sm"
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
