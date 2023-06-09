import { configureStore } from "@reduxjs/toolkit";
import translateDirection from "./translateDirection/slice";
import userSlice from "./user/slice";
import { useDispatch } from "react-redux";
import { yandexAPI } from "./yandexApi";
import { loggerMiddleware } from "./loggerMiddleware";

export const store = configureStore({
  reducer: {
    translateDirection,
    userSlice,
    [yandexAPI.reducerPath]: yandexAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(yandexAPI.middleware, loggerMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
