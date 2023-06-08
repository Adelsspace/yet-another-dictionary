import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLaoyut";
import "./scss/App.scss";
import NotFound from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";
import { searchLoggedUser } from "./utils/searchLoggedUser";
import { useDispatch, useSelector } from "react-redux";
import { setIsLogged, setLogin } from "./redux/user/slice";
import { selectIsLogged, selectLogin } from "./redux/user/selectors";
function App() {
  const dispatch = useDispatch();
  if (!localStorage.getItem("users"))
    localStorage.setItem("users", JSON.stringify([]));

  const loggedUser = searchLoggedUser();

  if (loggedUser) {
    dispatch(setIsLogged(true));
    dispatch(setLogin(loggedUser));
  }
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="sigin" element={<Login />} />
        <Route path="signup" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
