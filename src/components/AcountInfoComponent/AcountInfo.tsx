import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLogin } from "../../redux/user/selectors";
import { setToInitialState } from "../../redux/user/slice";
import { Link, useNavigate } from "react-router-dom";
import { changeLoggedInDatabase } from "../../utils/changeLoggedInDatabase";
import { setSearchValue } from "../../redux/translateDirection/slice";
import sytle from "./AcountInfo.module.scss";

export const AcountInfo = () => {
  const dispatch = useDispatch();
  const login = useSelector(selectLogin);
  const navigate = useNavigate();

  const loggOut = () => {
    dispatch(setToInitialState(false));
    changeLoggedInDatabase(login, false);
    dispatch(setSearchValue(""));
    navigate("/");
  };
  return (
    <div>
      <span className={sytle.login}>😎 {login} </span>
      <Link to="favorites">
        <div className={sytle.btn}>Избранное </div>
      </Link>
      <Link to="history">
        <div className={sytle.btn}>История</div>
      </Link>
      <div onClick={loggOut} className={sytle.btn}>
        Выход
      </div>
    </div>
  );
};
