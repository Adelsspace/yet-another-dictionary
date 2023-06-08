import React from "react";
import { Link } from "react-router-dom";

export const Authentication = () => {
  return (
    <div>
      <Link to="/sigin">
        <button>Вход</button>
      </Link>
      <Link to="signup">
        <button>Регистрация</button>
      </Link>
    </div>
  );
};
