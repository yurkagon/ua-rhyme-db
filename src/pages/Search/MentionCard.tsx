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
    StaticDatabase.getSong(data.songId),
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

  if (!isLoaded) return null;

  return (
    <div
      className="border border-primary rounded text-primary bg-white cursor-pointer transition duration-200 hover:-translate-y-1 hover:shadow-md"
      onClick={onClick}
    >
      <div className="px-4 py-3 border-b border-primary/30 font-medium">
        {song.author} - {song.name}
      </div>
      <div className="px-4 py-3">
        {isLoaded &&
          textData.map((line, index) => (
            <p
              className={clsx(
                "text-sm",
                line.includes("[") && "italic opacity-80",
              )}
              key={index}
            >
              {line.includes("[")
                ? line.replace("[", "").replace("]", "")
                : line}
            </p>
          ))}
      </div>
    </div>
  );
};

export default MentionCard;
