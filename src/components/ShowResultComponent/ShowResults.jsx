import styles from "./ShowResualt.module.scss";
import { SearchResualt } from "../SearchResualtComponent/SearchResualt";
import { useSelector } from "react-redux";
import { selectSearchValue } from "../../redux/translateDirection/selectors";
import { useEffect } from "react";
import { setResetQueryParams } from "../../redux/translateDirection/slice";
import { useAppDispatch } from "../../redux/store";

export const ShowResults = () => {
  const searchValue = useSelector(selectSearchValue);
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(setResetQueryParams());
    };
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      {searchValue ? <SearchResualt /> : <></>}
    </div>
  );
};
