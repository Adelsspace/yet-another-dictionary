import { useSelector } from "react-redux";
import { selectHistory } from "../../redux/user/selectors";
import { History } from "../../@types/types";
import { Link } from "react-router-dom";
import style from "./HistoryComponent.module.scss";

export const HistoryComponent = () => {
  const history: string[] = useSelector(selectHistory);
  const historyReadyToUse: History[] = history.map((word) => JSON.parse(word));

  return (
    <div className={style.wrapper}>
      <div className={style.card}>
        <h1>История запросов</h1>

        {history.length ? (
          <ul>
            {historyReadyToUse.map((word, i: number) => {
              return (
                <li key={i}>
                  <span>
                    Значение слова "{word.text}" {word.firstLangCode} /
                    {word.secondLangCode}
                  </span>
                  <Link
                    className={style.btn}
                    to="wordCard"
                    state={{
                      searchValue: word.text,
                      firstLangCode: word.firstLangCode,
                      secondLangCode: word.secondLangCode,
                    }}
                  >
                    Подробнее
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <h3 className={style.noHistory}>У вас нет истории поиска 💡</h3>
        )}

        <Link className={style.btn} to={"/"}>
          Продолжить поиск
        </Link>
      </div>
    </div>
  );
};
