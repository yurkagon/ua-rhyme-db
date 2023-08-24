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
}

export default RawFileExtractor;
