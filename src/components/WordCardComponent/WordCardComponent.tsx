import { Link, useLocation, useNavigate } from "react-router-dom";
import { Location } from "../../@types/types";
import style from "./WordCardComponent.module.scss";
import { SearchedInfo } from "../SearchedInfoComponent/SearchedInfo";
import { ErrorBoundaries } from "../ErrorBoundariesComponent/ErrorBoundaries";
export const WordCardComponent = () => {
  const { state } = useLocation() as Location;
  const navigate = useNavigate();
  let searchValue = "";
  let firstLangCode = "";
  let secondLangCode = "";
  if (state) {
    ({ searchValue, firstLangCode, secondLangCode } = state);

    return (
      <div className={style.wrapper}>
        <div className={style.card}>
          <div className={style.navigation}>
            <button className={style.btn} onClick={() => navigate(-1)}>
              Назад
            </button>
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
  } else return <ErrorBoundaries />;
};
