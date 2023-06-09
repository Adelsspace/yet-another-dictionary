import { useState } from "react";
import { Select, Space } from "antd";
import styles from "./TranslateDirection.module.scss";
import {
  setFirstLang,
  setSecondLang,
} from "../../redux/translateDirection/slice";
import {
  languageNameToCodePair,
  languagesKeys,
  langueagePairs,
} from "../../assets/languageStore";
import { useAppDispatch } from "../../redux/store";

type LanguageNames = keyof typeof langueagePairs;

export const TranslateDirection = () => {
  const dispatch = useAppDispatch();
  const [listOfLanguages, setListOfLanguages] = useState(
    langueagePairs[languagesKeys[0] as LanguageNames]
  );
  const [langueageSecond, setLangueageSecond] = useState(
    langueagePairs[languagesKeys[0] as LanguageNames][0]
  );

  const handleFirstLangChange = (value: LanguageNames) => {
    setListOfLanguages(langueagePairs[value]);
    setLangueageSecond(langueagePairs[value][0]);

    const typedValue: LanguageNames = value;
    dispatch(setFirstLang(languageNameToCodePair[typedValue]));
    dispatch(setSecondLang(["Русский", "ru"]));
  };

  const onSecondLangChange = (value: LanguageNames) => {
    setLangueageSecond(value);
    dispatch(setSecondLang(languageNameToCodePair[value]));
  };

  return (
    <Space wrap className={styles.container}>
      <Select
        defaultValue={languagesKeys[0] as LanguageNames}
        className={styles.select}
        onChange={handleFirstLangChange}
        options={languagesKeys.map((lang) => ({
          label: lang,
          value: lang,
        }))}
      />
      <Select
        className={styles.select}
        value={langueageSecond as LanguageNames}
        onChange={onSecondLangChange}
        options={listOfLanguages.map((lang) => ({ label: lang, value: lang }))}
      />
    </Space>
  );
};
