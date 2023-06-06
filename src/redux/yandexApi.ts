import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { API_KEY } from "../API_KEY";

export const yandexAPI = createApi({
  reducerPath: "yandexAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${API_KEY}&`,
  }),
  endpoints: (build) => ({
    fetachTranslate: build.query({
      query: (text) => ({
        url: `&lang=${text}&ui=ru`,
      }),
    }),
  }),
});
