export interface RhymeBlock {
  key: string;
  rhymes: Rhyme[];
}

export interface Rhyme {
  label: string;
  value: string;
  alternatives?: string[];
  extra?: {
    mentions?: RhymeMention[];
  };
}

export interface RhymeMention {
  songId: string;
  range: { from: number; to: number };
}

export interface Song {
  id: string;
  authorId: string;
  author: string;
  name: string;
  url: string;
  data?: SongData;
}

export interface SongData {
  text: string;
  info: {
    id: string;
    author_id: string;
    author: string;
    name: string;
    youtube?: string;
  };
}

export enum RhymeInfoType {
  r = "r",
}
