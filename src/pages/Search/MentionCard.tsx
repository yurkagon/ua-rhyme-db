import { FC, useEffect, useMemo, useState } from "react";
import clsx from "clsx";

import StaticDatabase, {
  RhymeMention,
  Song,
} from "../../services/StaticDatabase";

const MentionCard: FC<{
  data: RhymeMention;
  onClick?: () => void;
}> = ({ data, onClick }) => {
  const [song, setSong] = useState<Song>(() =>
    StaticDatabase.getSong(data.songId)
  );

  useEffect(() => {
    StaticDatabase.loadFullSongData(data.songId).then((fullSongData) => {
      setSong({ ...fullSongData });
    });
  }, [data]);

  const isLoaded = Boolean(song?.data);

  const textData = useMemo(() => {
    if (!isLoaded) {
      return null;
    }

    const text = song.data.text
      .split("\n")
      .slice(data.range.from - 1, data.range.to);

    return text;
  }, [isLoaded, data]);

  if(!isLoaded) return null;

  return (
    <div className="mention-card card mb-3" onClick={onClick}>
      <div className="card-header">
        {song.author} - {song.name}
      </div>
      <div className="card-body">
        {isLoaded &&
          textData.map((line, index) => (
            <p
              className={clsx(
                "card-text",
                line.includes("[") && "text-primary-italic"
              )}
              key={index}
            >
              {line}
            </p>
          ))}
      </div>
    </div>
  );
};

export default MentionCard;
