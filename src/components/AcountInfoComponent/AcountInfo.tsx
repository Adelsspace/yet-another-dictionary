import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLogin } from "../../redux/user/selectors";
import { setIsLogged, setLogin } from "../../redux/user/slice";
import { useNavigate } from "react-router-dom";
import { changeLogged } from "../../utils/chageLogged";

export const AcountInfo = () => {
  const dispatch = useDispatch();
  const login = useSelector(selectLogin);
  const navigate = useNavigate();

  const loggOut = () => {
    dispatch(setLogin(""));
    dispatch(setIsLogged(false));
    changeLogged(login, false);
    navigate("/");
  };
  return (
    <div>
      <span>{login}</span>
      <button>Закладки</button>
      <button>История</button>
      <button onClick={loggOut}>Выход</button>
    </div>
  );
};
