import { useForm, SubmitHandler } from "react-hook-form";
import style from "../RegistrationComponent/Registration.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { isUserInDatabase } from "../../utils/isUserInDatabase";
import { isPasswordCoorect } from "../../utils/isPasswordCorrect";
import { changeLogged } from "../../utils/chageLogged";
import { Inputs } from "../../@types/types";
import { useDispatch } from "react-redux";
import { setIsLogged, setLogin } from "../../redux/user/slice";

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: "all",
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { login } = data;
    dispatch(setIsLogged(true));
    dispatch(setLogin(login));
    changeLogged(login, true);
    reset();
    navigate("/");
  };

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <h1>Вход</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.formControl}>
            <label>
              Логин:
              <input
                type="text"
                {...register("login", {
                  required: "Введите логин",
                  validate: (value) =>
                    isUserInDatabase(value) ||
                    "пользователь с таким логином не найден",
                })}
              />
            </label>
            <div className={style.error}>
              {errors?.login && <p> {errors?.login?.message || "Error!"}</p>}
            </div>
          </div>
          <div className={style.formControl}>
            <label>
              Пароль:
              <input
                type="text"
                {...register("password", {
                  required: "Введите пароль",
                  minLength: {
                    value: 3,
                    message: "Минимум 3 символа",
                  },
                  validate: (value) =>
                    isPasswordCoorect(getValues("login"), value) ||
                    "пароль неправильный",
                })}
              />
            </label>
          </div>
          <div className={style.error}>
            {errors?.password && (
              <p> {errors?.password?.message || "Error!"}</p>
            )}
          </div>
          <input type="submit" disabled={!isValid} className={style.btn} />
        </form>
        <p className={style.text}>
          Ещё нет акаунта? <Link to="/sigin"> Регистрация</Link>
        </p>
      </div>
    </div>
  );
};
