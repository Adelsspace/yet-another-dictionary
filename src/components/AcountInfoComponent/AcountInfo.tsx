import { useSelector } from "react-redux";
import { selectLogin } from "../../redux/user/selectors";
import { setToInitialState } from "../../redux/user/slice";
import { Link, useNavigate } from "react-router-dom";
import { changeLoggedInDatabase } from "../../utils/changeLoggedInDatabase";
import { setSearchValue } from "../../redux/translateDirection/slice";
import sytle from "./AcountInfo.module.scss";
import { AcountLogin } from "../AcountLoginComponent/AcountLogin";
import { useAppDispatch } from "../../redux/store";

export const AcountInfo = () => {
  const dispatch = useAppDispatch();
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
      <AcountLogin login={login} />
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
