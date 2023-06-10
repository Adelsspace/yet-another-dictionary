import { HistoryComponent } from "../components/HistoryComponent/HistoryComponent";
import { useSelector } from "react-redux";
import { selectIsLogged } from "../redux/user/selectors";
import { Navigate } from "react-router-dom";

export const History = () => {
  const isLogged = useSelector(selectIsLogged);

  return <>{isLogged ? <HistoryComponent /> : <Navigate to="/" />}</>;
};
