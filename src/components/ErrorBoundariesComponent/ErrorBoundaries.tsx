import { Link } from "react-router-dom";
import style from "./ErrorBoundaries.module.scss";

export const ErrorBoundaries = () => {
  return (
    <div className={style.wrapper}>
      <h1>Что-то пошло не так 😔</h1>
      <Link to="/" className={style.btn}>
        Вернуться на главную страницу
      </Link>
    </div>
  );
};
