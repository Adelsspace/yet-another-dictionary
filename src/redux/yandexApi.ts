import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { API_KEY } from "../API_KEY";

export const yandexAPI = createApi({
  reducerPath: "yandexAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://dictionary.yandex.net/api/v1/dicservice.json/lookup`,
  }),
  endpoints: (build) => ({
    fetachTranslate: build.query({
      query: ({ firstLang, secondLang, searchValue }) => ({
        url: "",
        params: {
          key: API_KEY,
          lang: `${firstLang}-${secondLang}`,
          text: searchValue,
          ui: "ru",
        },
      }),
      transformResponse: (response: any) => {
        const { def: data } = response;
        return data;
      },
    }),
  }),
});
