import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import clsx from "clsx";

import SearchForm from "../../components/SearchForm";

import Application from "../../App";

import MentionCard from "./MentionCard";

export function Component() {
  const { phrase } = useParams();
  const navigate = useNavigate();

  const { rhymes, targetMentions } = useMemo(
    () => Application.findRhymes(phrase),
    [phrase]
  );

  return (
    <main className="flex flex-col md:flex-row justify-between p-8 gap-8">
      <div className="md:flex-[6]">
        <div className="max-w-[50%] mb-10">
          <h5 className="text-base font-semibold mb-2">Рифмопошук</h5>
          <SearchForm className="w-[300px]" key={phrase} />
        </div>

        <div className="flex flex-wrap">
          {rhymes.map((rhyme, index) => (
            <button
              onClick={() => navigate(`/search/${encodeURIComponent(rhyme.label)}`)}
              className={clsx(
                "self-end mr-2.5 mb-2.5 px-3 py-2 border rounded transition first-letter:uppercase focus:outline-none focus:shadow-none",
                rhyme.algorithmic
                  ? "text-[orangered] border-[orangered] hover:bg-[orangered]/80 hover:text-white"
                  : "text-primary border-primary hover:bg-primary/80 hover:text-white"
              )}
              key={index}
            >
              {rhyme.label}
            </button>
          ))}
        </div>
      </div>

      <div className="md:flex-[4] flex flex-col gap-3">
        {targetMentions.map((mention, index) => (
          <MentionCard
            onClick={() => navigate(`/songs/${mention.songId}`)}
            key={index}
            data={mention}
          />
        ))}
      </div>
    </main>
  );
}
