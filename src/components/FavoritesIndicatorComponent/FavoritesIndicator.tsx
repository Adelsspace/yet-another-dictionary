import { useSelector } from "react-redux";
import style from "./FavoritesIndicator.module.scss";
import { selectFavorites, selectLogin } from "../../redux/user/selectors";
import { addToFavorites, removeFromFavorites } from "../../redux/user/slice";
import { addFavoritesInDaatabase } from "../../utils/addFavoritesInDaatabase";
import { removeFavoritesInDatabase } from "../../utils/removeFavoritesInDatabase";
import { useAppDispatch } from "../../redux/store";

export const FavoritesIndicator = (queryParam: {
  text: string;
  firstLangCode: string;
  secondLangCode: string;
}) => {
  const dispatch = useAppDispatch();
  const favorites = useSelector(selectFavorites);
  const login = useSelector(selectLogin);
  const stringifyedQueryParams = JSON.stringify(queryParam);

  const checkboxChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(addToFavorites(stringifyedQueryParams));
      addFavoritesInDaatabase(login, stringifyedQueryParams);
    } else {
      dispatch(removeFromFavorites(stringifyedQueryParams));
      removeFavoritesInDatabase(login, stringifyedQueryParams);
    }
  };
  return (
    <div className={style.indicator}>
      <input
        type="checkbox"
        checked={favorites.includes(stringifyedQueryParams)}
        id={`checkbox-${stringifyedQueryParams}`}
        onChange={checkboxChangeHandler}
      />
    </div>
  );
};
