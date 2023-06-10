import style from "./AcountLogin.module.scss";
import PropTypes from "prop-types";

export const AcountLogin = ({ login }: { login: string }) => {
  return <span className={style.login}>😎 {login} </span>;
};

AcountLogin.propTypes = {
  login: PropTypes.string.isRequired,
};
