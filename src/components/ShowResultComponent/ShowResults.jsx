import styles from "./ShowResualt.module.scss";
import { SearchResualt } from "../SearchResualtComponent/SearchResualt";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchValue } from "../../redux/translateDirection/selectors";
import { useEffect } from "react";
import { setResetQueryParams } from "../../redux/translateDirection/slice";

export const ShowResults = () => {
  const searchValue = useSelector(selectSearchValue);
  const dispatch = useDispatch();

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
