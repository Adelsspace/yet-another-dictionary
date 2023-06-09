import { LanguageCodeToName } from "../@types/types";

export const languageNameToCodePair = {
  Русский: ["Русский", "ru"],
  Английский: ["Английский", "en"],
  Испанский: ["Испанский", "es"],
  Немецкий: ["Немецкий", "de"],
  Французкий: ["Французкий", "fr"],
  Турецкий: ["Турецкий", "tr"],
  Итальянский: ["Итальянский", "it"],
};

export const languagesKeys = Object.keys(languageNameToCodePair);

export const langueagePairs = {
  Русский: [
    "Английский",
    "Испанский",
    "Немецкий",
    "Французкий",
    "Турецкий",
    "Итальянский",
    "Русский",
  ],
  Английский: [
    "Русский",
    "Испанский",
    "Немецкий",
    "Французкий",
    "Турецкий",
    "Итальянский",
    "Английский",
  ],
  Немецкий: ["Русский", "Английский"],
  Французкий: ["Русский", "Английский"],
  Испанский: ["Русский", "Английский"],
  Турецкий: ["Русский", "Английский"],
  Итальянский: ["Русский", "Английский"],
};

export const languageCodeToName: LanguageCodeToName = {
  ru: "Русский",
  en: "Английский",
  es: "Испанский",
  de: "Немецкий",
  fr: "Французкий",
  tr: "Турецкий",
  it: "Итальянский",
};
