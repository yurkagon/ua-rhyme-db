import _ from "lodash";

import { formatWord } from "./utils";

import StaticDatabase, { Rhyme } from "./services/StaticDatabase";

class Application {
  public static findRhymes(phrase: string) {
    const correctedPhrase = formatWord(phrase);

    const rhymes = this.find(correctedPhrase);

    const grouped = _.groupBy(rhymes, (value) => {
      if (value.value === correctedPhrase) {
        return "target";
      }

      return "rhymes";
    }) as { target: Rhyme[]; rhymes: Rhyme[] };

    grouped.rhymes = _.uniqBy(grouped.rhymes, "value");

    return grouped;
  }

  private static find(phrase: string, inputRhymes: Rhyme[] = []): Rhyme[] {
    const rhymeData = StaticDatabase.getRhymeData();

    const selectedRhymes = _.chain(rhymeData)
      .filter((rhymeBlock) =>
        rhymeBlock.rhymes.some((rhyme) => this.compareRhymes(rhyme, phrase))
      )
      .map("rhymes")
      .flatten()
      .value();

    const allSelectedRhymes = [...inputRhymes, ...selectedRhymes];

    const isMultiWord = phrase.includes(" ");
    if (isMultiWord) {
      const newPhrase = this.removeFirstWord(phrase);

      return this.find(newPhrase, allSelectedRhymes);
    } else {
      return allSelectedRhymes;
    }
  }

  private static compareRhymes(rhyme: Rhyme, phrase: string): boolean {
    if (rhyme.value === phrase) return true;
    if (rhyme.alternatives.includes(phrase)) return true;

    return false;
  }

  private static removeFirstWord(phrase: string): string {
    const words = phrase.split(" ");
    words.shift();
    return words.join(" ");
  }
}

export default Application;
