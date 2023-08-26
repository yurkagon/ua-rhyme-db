import { FC, useEffect, useMemo, useState } from "react";

import StaticDatabase, {
  RhymeMention,
  Song,
} from "../../services/StaticDatabase";

const MentionCard: FC<{
  data: RhymeMention;
}> = ({ data }) => {
  const [song, setSong] = useState<Song>(() =>
    StaticDatabase.getSong(data.songId)
  );

  useEffect(() => {
    StaticDatabase.loadFullSongData(data.songId).then((fullSongData) => {
      setSong({ ...fullSongData });
    });
  }, [data]);

  const isLoaded = Boolean(song.data);

  const textData = useMemo(() => {
    if (!isLoaded) {
      return null;
    }

    const text = song.data.text
      .split("\n")
      .slice(data.range.from - 1, data.range.to);

    return text;
  }, [isLoaded, data]);

  return (
    <div className="mention-card card mb-3">
      <div className="card-header">
        {song.author} - {song.name}
      </div>
      <div className="card-body">
        {isLoaded &&
          textData.map((line, index) => (
            <p className="card-text" key={index}>
              {line}
            </p>
          ))}

        {!isLoaded && (
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentionCard;
