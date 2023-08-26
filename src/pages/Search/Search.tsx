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
    <main className="search-page p-4">
      <div className="form-wrapper">
        <h5 className="">Рифмопошук</h5>
        <SearchForm className="search-page-form" />
      </div>

      {targetMentions.map((mention, index) => <MentionCard key={index} data={mention} />)}

      {rhymes.map((rhyme) => (
        <div className="rhyme-element" key={rhyme.value}>{rhyme.label}</div>
      ))}
    </main>
  );
}
