import { useSelector } from "react-redux";
import { selectIsLogged } from "../redux/user/selectors";
import { FavoritesComponent } from "../components/FavoritesComponent/FavoritesComponent";
import { Navigate } from "react-router-dom";

export const Favorites = () => {
  const isLogged = useSelector(selectIsLogged);

  return <>{isLogged ? <FavoritesComponent /> : <Navigate to="/" />}</>;
};
