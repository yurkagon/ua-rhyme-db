import _ from "lodash";

import { formatWord, splitBySquareBrackets } from "../../utils";

import RawFileExtractor from "./RawFileExtractor";

import { Rhyme, RhymeBlock, Song, RhymeInfoType } from "./types";

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

    this.rhymeData = _.map(rawFileData, (value: string, key: string) => {
      const rhymesRaw = value.split("\n");

      const rhymes = rhymesRaw
        .filter(Boolean)
        .map((rhyme: string) => this.formatRawRhyme(rhyme));

      return { key, rhymes };
    }) as RhymeBlock[];
  }

  private static formatRawRhyme(rawRhymeData: string): Rhyme {
    const [rawRhyme, ...rhymeInfoRaw] = rawRhymeData.split("#");
    const [word, ...alternatives] = rawRhyme.split("/");

    const extra = this.parseRhymeInfoRaw(rhymeInfoRaw);

    return {
      label: word.trim(),
      value: formatWord(word),
      alternatives: alternatives.map((el) => formatWord(el)),
      extra,
    };
  }

  private static parseRhymeInfoRaw(rhymeInfoRaw: string[]) {
    const data = {};

    rhymeInfoRaw.forEach((rawInfoElement) => {
      const [type, infoRaw] = rawInfoElement.split(":");

      if (type === RhymeInfoType.r) {
        const mentions = infoRaw.split(",").map((el) => {
          const [songId, rangeRaw] = splitBySquareBrackets(el);
          const [from, to] = rangeRaw.split("-");

          return { songId, range: { from: Number(from), to: Number(to) } };
        });

        Object.assign(data, { mentions });
      }
    });

    return data;
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
