import React, { useRef, useState, useEffect } from "react";
import styles from "./Search.module.scss";
import { setSearchValue } from "../../redux/translateDirection/slice";
import clearIcon from "../../assets/images/clearIcon.svg";
import { useAppDispatch } from "../../redux/store";
import { useDebounce } from "../hooks/useDebounce";

export const Search = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const debouncedValue = useDebounce(value, 1000);

  useEffect(() => {
    if (debouncedValue !== "") {
      dispatch(setSearchValue(debouncedValue));
    }
  }, [debouncedValue, dispatch]);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
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
