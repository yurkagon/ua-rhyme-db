import _ from "lodash";

import { formatWord } from "./utils";

import StaticDatabase, { Rhyme } from "./services/StaticDatabase";
import Rhymer from "./lib/rhymer";

class Application {
  public static findRhymes(phrase: string) {
    const foundByAlgorithm = Rhymer.findRhymes(phrase);

    const correctedPhrase = formatWord(phrase);
    const rhymes = this.find(correctedPhrase);

    const grouped = _.isEmpty(rhymes)
      ? {
          target: [],
          rhymes: [],
        }
      : (_.groupBy(rhymes, (value) => {
          if (value.value === correctedPhrase) {
            return "target";
          }
          if (value.alternatives.includes(correctedPhrase)) {
            return "target";
          }

          return "rhymes";
        }) as { target: Rhyme[]; rhymes: Rhyme[] });

    return {
      target: grouped.target,
      targetMentions: _.chain(grouped.target)
        .map((rhyme) => rhyme.extra?.mentions)
        .compact()
        .flatten()
        .uniqBy((el) => `${el.songId}-${el.range.from}-${el.range.to}`)
        .value(),
      rhymes: _.uniqBy([...grouped.rhymes, ...foundByAlgorithm], "label"),
    };
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
