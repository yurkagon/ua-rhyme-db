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
}

export default RawFileExtractor;
