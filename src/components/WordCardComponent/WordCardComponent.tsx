import { Link, useLocation } from "react-router-dom";
import { Location } from "../../@types/types";
import style from "./WordCardComponent.module.scss";
import { SearchedInfo } from "../SearchedInfoComponent/SearchedInfo";
export const WordCardComponent = () => {
  const { state } = useLocation() as Location;
  let searchValue = "";
  let firstLangCode = "";
  let secondLangCode = "";
  if (state) {
    ({ searchValue, firstLangCode, secondLangCode } = state);

    return (
      <div className={style.wrapper}>
        <div className={style.card}>
          <div className={style.navigation}>
            <Link to="/history">
              <div className={style.btn}>Назад</div>
            </Link>
            <Link to="/">
              <div className={style.btn}>Продолжить поиск</div>
            </Link>
          </div>
          <SearchedInfo
            searchValue={searchValue}
            firstLangCode={firstLangCode}
            secondLangCode={secondLangCode}
          />
        </div>
      </div>
    );
  } else return <></>;
};
