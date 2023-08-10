import _ from 'lodash';

import rawFileData from './rawFileData';


const data = _.chain(rawFileData).map((value: string, key: string) => {
  const rhymesRaw = [key, ...value.split('\n')];

  const rhymes = rhymesRaw.map((rhyme: string) => ({ value: rhyme }));

  return { key, rhymes }
}).value();


console.log(data)


export default rawFileData;