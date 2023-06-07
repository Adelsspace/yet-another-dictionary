import styles from "./ShowResualt.module.scss";
import { NotFoundComponent } from "../NotFoundComponent/NotFound";
import { SearchResualt } from "../SearchResualtComponent/SearchResualt";
import { useSelector } from "react-redux";
import { selectSearchValue } from "../../redux/translateDirection/selectors";

export const ShowResults = () => {
  const searchValue = useSelector(selectSearchValue);
  return (
    <div className={styles.wrapper}>
      {searchValue ? <SearchResualt /> : <NotFoundComponent />}
    </div>
  );
};
