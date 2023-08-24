import _ from "lodash";

import { formatWord } from "../../utils";

import RawFileExtractor from "./RawFileExtractor";

import { Rhyme, RhymeBlock, Song } from "./types";

class StaticDatabase {
  private static rhymeData: RhymeBlock[];
  private static songList: Song[];

  public static load() {
    this.loadRhymeData();
    this.loadSongList();
  }

  public static loadSongList() {
    this.songList = RawFileExtractor.loadSongList().map((song: string) => {
      const [id, authorId, author, name] = song.split("_");
      const url = require(`../../../database/lazy/songs/${song}`);

      return {
        id,
        authorId,
        author,
        name,
        url,
      };
    });
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
      alternatives: alternatives.map((el) => formatWord(el)),
    };
  }

  public static getRhymeData() {
    return this.rhymeData;
  }
  public static getSongList() {
    return this.songList;
  }
}

StaticDatabase.load();

export default StaticDatabase;
