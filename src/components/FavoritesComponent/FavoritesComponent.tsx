import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/user/selectors";
import { History } from "../../@types/types";
import { Link } from "react-router-dom";
import style from "./FavoritesComponent.module.scss";
import { FavoritesIndicator } from "../FavoritesIndicatorComponent/FavoritesIndicator";

export const FavoritesComponent = () => {
  const favorites: string[] = useSelector(selectFavorites);
  const favoritesReadyToUse: History[] = favorites.map((word) =>
    JSON.parse(word)
  );

  return (
    <div className={style.wrapper}>
      <div className={style.card}>
        <h1>Избранные слова</h1>

        {favorites.length ? (
          <ul>
            {favoritesReadyToUse.map((word, i: number) => {
              return (
                <li className={style.listElement} key={i}>
                  <span>
                    Значение слова "{word.text}" ({word.firstLangCode} /
                    {word.secondLangCode}) : {word.translate}
                  </span>
                  <Link
                    className={style.btn}
                    to="/wordCard"
                    state={{
                      searchValue: word.text,
                      firstLangCode: word.firstLangCode,
                      secondLangCode: word.secondLangCode,
                    }}
                  >
                    Подробнее
                  </Link>
                  <FavoritesIndicator
                    text={word.text}
                    firstLangCode={word.firstLangCode}
                    secondLangCode={word.secondLangCode}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <h3 className={style.noHistory}>У вас нет избранных слов 💡</h3>
        )}

        <Link className={style.btn} to={"/"}>
          Продолжить поиск
        </Link>
      </div>
    </div>
  );
};
