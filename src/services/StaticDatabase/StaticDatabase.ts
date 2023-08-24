import _ from "lodash";

import { formatWord } from "../../utils";

import RawFileExtractor from "./RawFileExtractor";

class StaticDatabase {
  private static rhymeData: RhymeBlock[];

  public static loadRhymeData()  {
    const rawFileData = RawFileExtractor.loadRhymeFolder();

    this.rhymeData = _.chain(rawFileData)
      .map((value: string, key: string) => {
        const rhymesRaw = value.split("\n");

        const rhymes = rhymesRaw.filter(Boolean).map((rhyme: string) => ({
          label: rhyme.trim(),
          value: formatWord(rhyme),
        }));

        return { key, rhymes };
      })
      .value() as RhymeBlock[];
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
}

StaticDatabase.loadRhymeData();

export default StaticDatabase;
