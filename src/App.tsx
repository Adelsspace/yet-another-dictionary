import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLaoyut";
import "./scss/App.scss";
import NotFound from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";
import { searchLoggedUser } from "./utils/searchLoggedUser";
import { useDispatch } from "react-redux";
import { setLoginAndIsLoggedField } from "./redux/user/slice";

function App() {
  const dispatch = useDispatch();
  if (!localStorage.getItem("users"))
    localStorage.setItem("users", JSON.stringify([]));

  const loggedUser = searchLoggedUser();

  if (loggedUser) {
    dispatch(setLoginAndIsLoggedField(loggedUser));
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
