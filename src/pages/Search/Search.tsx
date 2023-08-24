import { useMemo } from "react";
import { useParams } from "react-router-dom";

import SearchForm from "../../components/SearchForm";

import Application from "../../App";

export function Component() {
  const { phrase } = useParams();

  const rhymes = useMemo(() => Application.findRhymes(phrase), [phrase]);


  return (
    <main className="p-3">
      <h1>{phrase}</h1>

      <SearchForm />


      <div>
        <h2>Results</h2>
        <ul>
          {rhymes.map((rhyme) => (
            <li key={rhyme.value}>{rhyme.label}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
