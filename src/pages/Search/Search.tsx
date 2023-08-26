import { useMemo } from "react";
import { useParams } from "react-router-dom";

import SearchForm from "../../components/SearchForm";

import Application from "../../App";

export function Component() {
  const { phrase } = useParams();

  const { target, rhymes, targetMentions } = useMemo(() => Application.findRhymes(phrase), [phrase]);


  console.log({ targetMentions })


  return (
    <main className="p-3">


      <SearchForm />


      <div>
        <h2>Можна римувати з:</h2>
        <ul>
          {rhymes.map((rhyme) => (
            <li key={rhyme.value}>{rhyme.label}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
