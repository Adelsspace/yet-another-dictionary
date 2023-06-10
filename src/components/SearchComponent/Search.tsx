import React, { useRef, useState, useCallback } from "react";
import styles from "./Search.module.scss";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";
import { setSearchValue } from "../../redux/translateDirection/slice";
import clearIcon from "../../assets/images/clearIcon.svg";

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
  const onClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const searchValue = inputRef.current?.value || "";
    dispatch(setSearchValue(searchValue));
  };

  const onClickClear = () => {
    setValue("");
    inputRef.current?.focus();
    dispatch(setSearchValue(""));
  };

  return (
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
            <img
              src={clearIcon}
              onClick={onClickClear}
              className={styles.clearIcon}
              alt="clear icon"
            />
          )}
        </span>
        <button onClick={onClickButton} className={styles.button}>
          Найти
        </button>
      </form>
    </div>
  );
};
