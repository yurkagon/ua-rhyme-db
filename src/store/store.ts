const allFiles = ((ctx) => {
  let keys = ctx.keys();
  let values = keys.map(ctx);
  return keys.reduce((o, k, i) => {
    o[k] = values[i];
    return o;
  }, {});
  // @ts-ignore
})(require.context("../../database/", true, /.*/));

console.log(allFiles);

export default allFiles;
