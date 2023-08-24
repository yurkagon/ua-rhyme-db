import _ from "lodash";

import { formatWord } from "../../utils";

import RawFileExtractor from "./RawFileExtractor";

import { Rhyme, RhymeBlock } from "./types";

class StaticDatabase {
  private static rhymeData: RhymeBlock[];
  private static songList;

  public static load() {
    this.loadRhymeData();
    this.loadSongList();
  }

  public static loadSongList() {
    this.songList = RawFileExtractor.loadSongList().map((song: string) => {
      const [id, authorId, author, name] = song.split("_");

      return {
        id, authorId, author, name, data_file_name: song
      };
    }
    );

    console.log(this.songList.map(async ({data_file_name}) => {
      const a = require(`../../../database/lazy/songs/${data_file_name}`);
      const response = await fetch(a)
      console.log(await response.text())
      return a;
    }))
  }

  private static loadRhymeData() {
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

StaticDatabase.load();

export default StaticDatabase;
