import { useSelector } from "react-redux";
import { selectHistory } from "../../redux/user/selectors";
import { History } from "../../@types/types";
import { Link } from "react-router-dom";
import style from "./HistoryComponent.module.scss";
import { useContext } from "react";
import { SubmittingRequirementsContext } from "../../App";

export const HistoryComponent = () => {
  const history: string[] = useSelector(selectHistory);
  const historyReadyToUse: History[] = history.map((word) => JSON.parse(word));
  const dataFromUseContext = useContext(SubmittingRequirementsContext);
  return (
    <div className={style.wrapper}>
      <div className={style.card}>
        <h4 className={style.dataFromUseContext}>{dataFromUseContext}</h4>
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
                    to={`/wordCard?${word.firstLangCode}-${word.secondLangCode}-${word.text}`}
                  >
                    <button className={style.btn}> Подробнее</button>
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <h3 className={style.noHistory}>У вас нет истории поиска 💡</h3>
        )}

        <Link className={style.btn} to={"/"}>
          <button className={style.btn}> Продолжить поиск</button>
        </Link>
      </div>
    </div>
  );
};
