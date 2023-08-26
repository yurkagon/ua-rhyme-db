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
