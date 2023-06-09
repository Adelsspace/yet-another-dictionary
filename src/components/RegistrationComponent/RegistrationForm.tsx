import { useForm, SubmitHandler } from "react-hook-form";
import style from "./Registration.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { isUserInDatabase } from "../../utils/isUserInDatabase";
import { Inputs, UserData } from "../../@types/types";
import { setUserData } from "../../redux/user/slice";
import { useAppDispatch } from "../../redux/store";
import { addNewUserInDatabase } from "../../utils/addNewUserInDatabase";

export const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: "onBlur",
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { login, password } = data;

    const newUser: UserData = {
      login,
      password,
      history: [],
      favorites: [],
      isLogged: true,
    };

    addNewUserInDatabase(newUser);
    dispatch(setUserData(newUser));
    reset();
    navigate("/");
  };

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <h1>Регистрация</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.formControl}>
            <label>
              Логин:
              <input
                type="text"
                {...register("login", {
                  required: "Введите логин",
                  minLength: {
                    value: 3,
                    message: "Минимум 3 символа",
                  },
                  validate: (value) =>
                    !isUserInDatabase(value) ||
                    "этот логин уже занят дургим пользователем",
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
                })}
              />
            </label>
          </div>
          <div className={style.error}>
            {errors?.password && (
              <p> {errors?.password?.message || "Error!"}</p>
            )}
          </div>
          <input
            type="submit"
            disabled={!isValid}
            className={style.btn}
            value={"Зарегистрироваться"}
          />
        </form>
        <p className={style.text}>
          Уже есть акаунт? <Link to="/sigin"> Войти</Link>
        </p>
      </div>
    </div>
  );
};
