import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { AcountInfo, Authentication } from "../index";
import { useSelector } from "react-redux";
import { selectIsLogged } from "../../redux/user/selectors";

export const Header = () => {
  const isLogged = useSelector(selectIsLogged);
  return (
    <>
      <div className="header">
        <div className="container">
          <Link to="/">
            <div className="header__logo">
              <img width="50" src={logo} alt="YaD logo"></img>
              <div>
                <h1>Yet another Dictionary</h1>
                <p>ОНЛАЙН СЛОВАРЬ</p>
              </div>
            </div>
          </Link>
          {isLogged ? <AcountInfo /> : <Authentication />}
        </div>
      </div>
    </>
  );
};
