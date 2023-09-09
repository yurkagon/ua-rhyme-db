import _ from "lodash";

import { formatWord, splitBySquareBrackets, capitalize } from "../../utils";

import RawFileExtractor from "./RawFileExtractor";

import { Rhyme, RhymeBlock, Song, RhymeInfoType } from "./types";

class StaticDatabase {
  private static rhymeData: RhymeBlock[];
  private static rhymeWords: Rhyme[];
  private static songList: Song[];

  public static load() {
    this.loadRhymeData();
    this.loadSongList();
    this.loadAllRhymeWords();
  }

  public static getSong(songId: string) {
    const song = _.find(this.songList, { id: songId });

    return song;
  }

  public static async loadFullSongData(songId: string) {
    const song = this.getSong(songId);
    if (song.data) return song;

    const result = await RawFileExtractor.loadSongByUrl(song.url);
    song.data = result;

    return song;
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
      label: capitalize(word.trim()),
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

          return {
            songId,
            range: {
              from: Number(from),
              to: _.isUndefined(to) ? Number(from) : Number(to),
            },
          };
        });

        Object.assign(data, { mentions });
      }
    });

    return data;
  }

  public static loadAllRhymeWords() {
    this.rhymeWords = _.chain(this.rhymeData)
      .map((rhymeBlock) => {
        const wordArray = rhymeBlock.rhymes.map((rhyme) => {
          const alternatives = rhyme.alternatives.map((alternative) => ({
            ...rhyme,
            label: alternative,
            value: undefined,
            extra: undefined,
          }));

          return [
            {
              ...rhyme,
              extra: undefined,
              value: undefined,
            },
            ...alternatives,
          ];
        });

        return _.flatten(wordArray);
      })
      .flatten()
      .uniqBy("label")
      .value();
  }

  public static getRhymeData() {
    return this.rhymeData;
  }
  public static getSongList() {
    return this.songList;
  }

  public static getRhymeWords() {
    return this.rhymeWords;
  }

  public static getStats() {
    return {
      songs: this.songList.length,
      rhymes: this.rhymeWords.length,
      authors: _.chain(this.songList).map("author").uniq().value().length,
    };
  }

  public static generateAuthorDataBasedOnSongs() {
    const groups = _.groupBy(this.songList, "authorId");

    return _.map(groups, (songs, authorId) => {
      const author = _.find(this.songList, { authorId });

      return {
        id: authorId,
        name: author.author,
        songs: songs.map((song) => ({
          id: song.id,
          name: song.name,
        })),
      };
    }).sort((a, b) => a.name.localeCompare(b.name));
  }
}

StaticDatabase.load();

export default StaticDatabase;
