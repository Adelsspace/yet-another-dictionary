import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLaoyut";
import "./scss/App.scss";
import NotFound from "./pages/NotFound";
import { Home } from "./pages/Home";
import { searchLoggedUser } from "./utils/searchLoggedUser";
import { setUserData } from "./redux/user/slice";
import { WordCard } from "./pages/WordCard";
import { getUserDataFromDatabase } from "./utils/getUserDataFromDatabase";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorBoundaries } from "./components/ErrorBoundariesComponent/ErrorBoundaries";
import { useAppDispatch } from "./redux/store";

const Registration = React.lazy(() =>
  import(/* webpackChunkName: "RegistrationPage"*/ "./pages/Registration").then(
    (m) => ({ default: m.Registration })
  )
);
const Favorites = React.lazy(() =>
  import(/* webpackChunkName: "Favorites"*/ "./pages/Favorites").then((m) => ({
    default: m.Favorites,
  }))
);
const Login = React.lazy(() =>
  import(/* webpackChunkName: "Login"*/ "./pages/Login").then((m) => ({
    default: m.Login,
  }))
);
const History = React.lazy(() =>
  import(/* webpackChunkName: "History"*/ "./pages/History").then((m) => ({
    default: m.History,
  }))
);
export const SubmittingRequirementsContext = React.createContext("");

function App() {
  const dispatch = useAppDispatch();
  if (!localStorage.getItem("users"))
    localStorage.setItem("users", JSON.stringify([]));

  const loggedUser = searchLoggedUser();

  if (loggedUser) {
    const userData = getUserDataFromDatabase(loggedUser);
    userData.isLogged = true;
    dispatch(setUserData(userData));
  }
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="sigin"
          element={
            <Suspense fallback={<div>загрузка страницы входа</div>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="signup"
          element={
            <Suspense fallback={<div>загрузка страницы регистрации</div>}>
              <Registration />
            </Suspense>
          }
        />
        <Route
          path="favorites"
          element={
            <Suspense fallback={<div>загрузка избранного</div>}>
              <Favorites />
            </Suspense>
          }
        />
        <Route
          path="history"
          element={
            <Suspense fallback={<div>загрузка истории</div>}>
              <SubmittingRequirementsContext.Provider
                value={"Я воспользовался Контекст API 🎉"}
              >
                <History />
              </SubmittingRequirementsContext.Provider>
            </Suspense>
          }
        />

        <Route
          path="wordCard"
          element={
            <ErrorBoundary fallback={<ErrorBoundaries />}>
              <WordCard />{" "}
            </ErrorBoundary>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
