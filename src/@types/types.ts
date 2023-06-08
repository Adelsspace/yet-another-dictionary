export type fetchedDataType = {
  head: object;
  def: itemData[];
};

type itemData = {
  text: string;
  pos: string;
  tr: translateArrayType[];
  ts?: string;
  gen?: string;
  anm?: string;
};

type translateArrayType = {
  text: string;
  pos: string;
  fr: number;
  get: string;
  syn: arrayOfSyn[];
  mean: arrayOfObject[];
  ex: arrayOfExamples[];
};

type arrayOfObject = {
  text: string;
};
type arrayOfExamples = {
  text: string;
  tr: arrayOfObject;
};
type arrayOfSyn = {
  text: string;
  pos: string;
  gen?: string;
  fr: number;
};

export type userData = {
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
