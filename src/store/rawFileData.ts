// @ts-ignore
const importDataFunction = require.context("../../database/rhymes", true, /.*/);

const keys: string[] = importDataFunction.keys();
const values: string[] = keys.map(importDataFunction);

const fileData: { [key: string]: string } = keys.reduce(
  (data, key, index) => ({
    [key.replace("./", "")]: values[index],
    ...data,
  }),
  {}
);

export default fileData;
