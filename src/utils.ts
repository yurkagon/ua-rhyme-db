export const formatWord = (word: string) => {
  return word
    .trim()
    .toLowerCase()
    .replace("'", "")
    .replace("’", "")
    .replace('"', "")
    .replace("`", "")
    .replace("'", "")
    .replace("-", " ");
};

export const splitBySquareBrackets = (inputString: string) =>
  inputString.split(/\s*\[([^\]]*)\]\s*/).filter(Boolean);

export const capitalize = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);
