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
