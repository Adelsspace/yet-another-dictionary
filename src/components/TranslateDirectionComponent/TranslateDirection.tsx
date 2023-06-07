import React, { useState } from "react";
import { Select, Space } from "antd";
import styles from "./TranslateDirection.module.scss";
import { useDispatch } from "react-redux";
import {
  setFirstLang,
  setSecondLang,
} from "../../redux/translateDirection/slice";
import {
  languageNameToCodePair,
  languagesKeys,
  langueagePairs,
} from "../../assets/languageStore";

type LanguageNames = keyof typeof langueagePairs;

export const TranslateDirection: React.FC = () => {
  const dispatch = useDispatch();
  const [listOfLanguages, setListOfLanguages] = useState(
    langueagePairs[languagesKeys[0] as LanguageNames]
  );
  const [langueageSecond, setLangueageSecond] = useState(
    langueagePairs[languagesKeys[0] as LanguageNames][0]
  );

  const handleProvinceChange = (value: LanguageNames) => {
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
        defaultValue={languagesKeys[0] as any}
        className={styles.select}
        onChange={handleProvinceChange}
        options={languagesKeys.map((lang) => ({
          label: lang,
          value: lang,
        }))}
      />
      <Select
        className={styles.select}
        value={langueageSecond as any}
        onChange={onSecondLangChange}
        options={listOfLanguages.map((lang) => ({ label: lang, value: lang }))}
      />
    </Space>
  );
};
