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
  password?: string;
  history: string[];
  favorites: string[];
  isLogged: boolean;
};

export type Inputs = {
  login: string;
  password: string;
};

export type History = {
  text: string;
  firstLangCode: string;
  secondLangCode: string;
  translate?: string;
};

export type LanguageCodeToName = {
  ru: string;
  en: string;
  es: string;
  de: string;
  fr: string;
  tr: string;
  it: string;
};

export type CodeObj = {
  firstLangCode: string;
  secondLangCode: string;
};

export type SearchInfoProps = {
  firstLangCode: string;
  secondLangCode: string;
  searchValue: string;
};

export type Location = {
  reloadDocument?: boolean;
  replace?: boolean;
  state: State;
  preventScrollReset?: boolean;
  relative?: string;
  to?: string;
};

type State = {
  searchValue: string;
  firstLangCode: string;
  secondLangCode: string;
};
