import { minWordLength } from "./constants";

export const formatWord = (word: string) => {
  return word
    .trim()
    .toLowerCase()
    .replace("'", "")
    .replace("’", "")
    .replace('"', "")
    .replace("`", "")
    .replace("'", "")
    .replace("»", "")
    .replace("«", "")
    .replace("-", " ");
};

export const splitBySquareBrackets = (inputString: string) =>
  inputString.split(/\s*\[([^\]]*)\]\s*/).filter(Boolean);

export const splitByWords = (inputString: string) =>
  inputString.split(/(\s+|[.,;?!():"]+)/).filter(Boolean);

export const capitalize = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);

export const isSpecialCharacter = (char: string) =>
  char === "..." ||
  char === "—" ||
  char === "." ||
  char === "," ||
  char === "!" ||
  char === "?" ||
  char === ":" ||
  char === ";" ||
  char === "(" ||
  char === ")" ||
  char === "«" ||
  char === "»" ||
  char === "–" ||
  char === " " ||
  char === "'" ||
  char === '"';

  export const isWordSearchable = (word: string) => {
    return word.length >= minWordLength &&
      !isSpecialCharacter(word);
  };
