import { useMemo } from "react";
import { useParams } from "react-router-dom";

import SearchForm from "../../components/SearchForm";

import Application from "../../App";

import MentionCard from "./MentionCard";

import "./style.scss";

export function Component() {
  const { phrase } = useParams();

  const { target, rhymes, targetMentions } = useMemo(
    () => Application.findRhymes(phrase),
    [phrase]
  );

  return (
    <main className="search-page container">
      <div className="row">
        <div className="col">
          <div className="form-wrapper">
            <h5 className="">Рифмопошук</h5>
            <SearchForm className="search-page-form" />
          </div>

          <div className="rhymes">
            {rhymes.map((rhyme, index) => (
              <button className="rhyme-element btn btn-outline-primary" key={index}>{rhyme.label}</button>
            ))}
          </div>
        </div>

        <div className="col-5">
          {targetMentions.map((mention, index) => (
            <MentionCard key={index} data={mention} />
          ))}
        </div>
      </div>
    </main>
  );
}
