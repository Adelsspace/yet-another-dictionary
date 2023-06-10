import { Middleware } from "redux";
export const loggerMiddleware: Middleware = () => (next) => (action) => {
  if (action.type === "user/setUserData") {
    console.log(`Пользователь ${action.payload.login} вошел в систему`);
  }
  if (action.type === "user/addToFavorites") {
    const actionPayload = JSON.parse(action.payload);
    console.log(`слово "${actionPayload.text}" добавлено в избранное`);
  }
  if (action.type === "user/removeFromFavorites") {
    const actionPayload = JSON.parse(action.payload);
    console.log(`слово "${actionPayload.text}" удалили из избранного`);
  }
  return next(action);
};
