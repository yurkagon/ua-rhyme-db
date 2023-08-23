import { useParams } from "react-router-dom";

import SearchForm from "./SearchForm";

export function Component() {
  const { phrase } = useParams();

  console.log(phrase)

  return (
    <main className="p-3">
      <h1>{phrase}</h1>

      <SearchForm />
    </main>
  );
}
