import React from "react";
import { Link } from "react-router-dom";
import style from "./Authentication.module.scss";

export const Authentication = () => {
  return (
    <div>
      <Link to="sigin">
        <div className={style.btn}>Вход</div>
      </Link>
      <Link to="signup">
        <div className={style.btn}>Регистрация</div>
      </Link>
    </div>
  );
};
