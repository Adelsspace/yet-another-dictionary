import { Link, useNavigate } from "react-router-dom";
import style from "./WordCardComponent.module.scss";
import { SearchedInfo } from "../SearchedInfoComponent/SearchedInfo";
import { ErrorBoundaries } from "../ErrorBoundariesComponent/ErrorBoundaries";
export const WordCardComponent = () => {
  let searchValue = "";
  let firstLangCode = "";
  let secondLangCode = "";
  const navigate = useNavigate();
  let params = window.location.search.substring(1);
  if (params) {
    let paramsArray = params.split("-");
    firstLangCode = paramsArray[0];
    secondLangCode = paramsArray[1];
    searchValue = window.decodeURIComponent(paramsArray[2]);

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
            fullCard={true}
          />
        </div>
      </div>
    );
  } else return <ErrorBoundaries />;
};
