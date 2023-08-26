import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

import SearchForm from "../../components/SearchForm";

import Application from "../../App";

import MentionCard from "./MentionCard";

import "./style.scss";

export function Component() {
  const { phrase } = useParams();
  const navigate = useNavigate();

  const { rhymes, targetMentions } = useMemo(
    () => Application.findRhymes(phrase),
    [phrase]
  );

  return (
    <main className="search-page flex-column flex-md-row">
      <div className="left">
        <div className="form-wrapper">
          <h5 className="">Рифмопошук</h5>
          <SearchForm className="search-page-form" key={phrase} />
        </div>

        <div className="rhymes">
          {rhymes.map((rhyme, index) => (
            <button
              onClick={() => navigate(`/search/${rhyme.value}`)}
              className="rhyme-element btn btn-outline-primary"
              key={index}
            >
              {rhyme.label}
            </button>
          ))}
        </div>
      </div>

      <div className="right">
        {targetMentions.map((mention, index) => (
          <MentionCard key={index} data={mention} />
        ))}
      </div>
    </main>
  );
}
