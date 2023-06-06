import React, { useRef, useState, useCallback } from "react";
import styles from "./Search.module.scss";
import { TranslateDirection } from "../TranslateDirectionComponent/TranslateDirection";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";
import { setSearchValue } from "../../redux/translateDirection/slice";
import { SearchResualt } from "../SearchResualtComponent/SearchResualt";

export const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const updateSearchValue = useCallback(
    debounce((str) => dispatch(setSearchValue(str)), 1000),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const onClickClear = () => {
    setValue("");
    inputRef.current?.focus();
    dispatch(setSearchValue(""));
  };

  return (
    <>
      <TranslateDirection />
      <div className={styles.search}>
        <form className={styles.form}>
          <span className={styles.inputBox}>
            <input
              ref={inputRef}
              value={value}
              onChange={onChangeInput}
              className={styles.input}
              type="text"
              placeholder="найдется всё, что есть в api"
            ></input>
            {value && (
              <svg
                onClick={onClickClear}
                className={styles.clearIcon}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="info" />
                <g id="icons">
                  <path
                    d="M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6   C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z"
                    id="exit"
                  />
                </g>
              </svg>
            )}
          </span>
          <button className={styles.button}>Найти</button>
        </form>
      </div>
      <SearchResualt />
    </>
  );
};
