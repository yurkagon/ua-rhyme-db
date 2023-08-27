import { SongData } from "./types";

class RawFileExtractor {
  private static formatFolderData(importDataFunction: any): {
    [key: string]: string;
  } {
    const keys: string[] = importDataFunction.keys();
    const values: string[] = keys.map(importDataFunction);

    return keys.reduce(
      (data, key, index) => ({
        [key.replace("./", "")]: values[index],
        ...data,
      }),
      {}
    );
  }

  public static loadRhymeFolder(): { [key: string]: string } {
    // @ts-ignore
    const importDataFunction = require.context(
      "../../../database/bundled/rhymes",
      true,
      /.*/
    );

    return this.formatFolderData(importDataFunction);
  }

  public static loadSongList() {
    const songListRaw = require("../../../database/bundled/song_list");

    return songListRaw.split("\n");
  }

  public static async loadSongByUrl(songUrl: string): Promise<SongData> {
    const response = await fetch(songUrl);
    const textRaw = await response.text();

    const [songText, dataRaw] = textRaw.split("###");

    return {
      text: songText.trim(),
      info: dataRaw
        .trim()
        .split("\n")
        .reduce((acc, value) => {
          const [key, ...data] = value.split(":");

          return { ...acc, [key]: data.join(":").trim() };
        }, {} as any),
    };
  }
}

export default RawFileExtractor;
