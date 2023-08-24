import _ from "lodash";

import { formatWord } from "./utils";

import StaticDatabase, { Rhyme } from "./services/StaticDatabase";

class Application {
  public static findRhymes(phrase: string): Rhyme[] {
    const correctedPhrase = formatWord(phrase);

    const result = this.find(correctedPhrase).filter(
      (rhyme) => rhyme.value !== correctedPhrase
    );

    return result;
  }

  private static find(phrase: string, inputRhymes: Rhyme[] = []): Rhyme[] {
    const rhymeData = StaticDatabase.getRhymeData();

    const selectedRhymes = _.chain(rhymeData)
      .filter((rhymeBlock) =>
        rhymeBlock.rhymes.some((rhyme) => {
          return (
            rhyme.value === phrase
            // phrase.endsWith(rhyme.value) ||
            // rhyme.value.endsWith(phrase)
          );
        })
      )
      .map("rhymes")
      .flatten()
      .value();

    const allSelectedRhymes = [...inputRhymes, ...selectedRhymes];

    const isMultiWord = phrase.includes(" ");
    if (isMultiWord) {
      const newPhrase = this.removeFirstWord(phrase);

      return this.find(newPhrase, allSelectedRhymes);
    }
    {
      return _.uniqBy(allSelectedRhymes, "value");
    }
  }

  private static removeFirstWord(phrase: string): string {
    const words = phrase.split(" ");
    words.shift();
    return words.join(" ");
  }
}

export default Application;
