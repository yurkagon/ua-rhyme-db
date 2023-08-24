export interface RhymeBlock {
  key: string;
  rhymes: Rhyme[];
}

export interface Rhyme {
  label: string;
  value: string;
  alternatives?: string[];
}

export interface Song {
  id: string;
  authorId: string;
  author: string;
  name: string;
  url: string;
}
