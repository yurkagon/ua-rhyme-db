export interface RhymeBlock {
  key: string;
  rhymes: Rhyme[];
}

export interface Rhyme {
  label: string;
  value: string;
  alternatives?: string[];
}
