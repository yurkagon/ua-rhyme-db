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
}

export enum RhymeInfoType {
  r = "r",
}
