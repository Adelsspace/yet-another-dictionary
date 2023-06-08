export type FetchedDataType = {
  head: object;
  def: ItemData[];
};

type ItemData = {
  text: string;
  pos: string;
  tr: TranslateArrayType[];
  ts?: string;
  gen?: string;
  anm?: string;
};

type TranslateArrayType = {
  text: string;
  pos: string;
  fr: number;
  get: string;
  syn: ArrayOfSyn[];
  mean: ArrayOfObject[];
  ex: ArrayOfExamples[];
};

type ArrayOfObject = {
  text: string;
};
type ArrayOfExamples = {
  text: string;
  tr: ArrayOfObject;
};
type ArrayOfSyn = {
  text: string;
  pos: string;
  gen?: string;
  fr: number;
};

export type UserData = {
  login: string;
  password: string;
  history: string[];
  favorites: string[];
  isLogged: boolean;
};

export type Inputs = {
  login: string;
  password: string;
};
