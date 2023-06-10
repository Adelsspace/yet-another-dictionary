import { useDispatch, useSelector } from "react-redux";
import style from "./FavoritesIndicator.module.scss";
import { selectFavorites } from "../../redux/user/selectors";
import { addToFavorites, removeFromFavorites } from "../../redux/user/slice";

export const FavoritesIndicator = (queryParam: {
  text: string;
  firstLangCode: string;
  secondLangCode: string;
}) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const stringifyedQueryParams = JSON.stringify(queryParam);

  const checkboxChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(addToFavorites(stringifyedQueryParams));
    } else {
      dispatch(removeFromFavorites(stringifyedQueryParams));
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
