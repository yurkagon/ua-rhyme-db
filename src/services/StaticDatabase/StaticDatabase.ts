import _ from "lodash";

import { formatWord } from "../../utils";

import RawFileExtractor from "./RawFileExtractor";

class StaticDatabase {
  private static rhymeData: RhymeBlock[];

  public static loadRhymeData() {
    const rawFileData = RawFileExtractor.loadRhymeFolder();

    this.rhymeData = _.chain(rawFileData)
      .map((value: string, key: string) => {
        const rhymesRaw = value.split("\n");

        const rhymes = rhymesRaw
          .filter(Boolean)
          .map((rhyme: string) => this.formatRawRhyme(rhyme));

        return { key, rhymes };
      })
      .value() as RhymeBlock[];
  }

  private static formatRawRhyme(rawRhyme: string): Rhyme {
    const [word, ...alternatives] = rawRhyme.split("/");

    return {
      label: word.trim(),
      value: formatWord(word),
      alternatives: alternatives.map(el => formatWord(el)),
    };
  }

  public static getRhymeData() {
    return this.rhymeData;
  }
}

export interface RhymeBlock {
  key: string;
  rhymes: Rhyme[];
}

export interface Rhyme {
  label: string;
  value: string;
  alternatives?: string[];
}

StaticDatabase.loadRhymeData();

console.log(StaticDatabase.getRhymeData());

export default StaticDatabase;
