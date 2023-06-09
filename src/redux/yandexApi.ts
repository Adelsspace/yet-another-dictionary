import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { API_KEY } from "../API_KEY";
import { FetchedDataType } from "../@types/types";

export const yandexAPI = createApi({
  reducerPath: "yandexAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://dictionary.yandex.net/api/v1/dicservice.json/lookup`,
  }),
  endpoints: (build) => ({
    fetachTranslate: build.query({
      query: ({ firstLangCode, secondLangCode, searchValue }) => ({
        url: "",
        params: {
          key: API_KEY,
          lang: `${firstLangCode}-${secondLangCode}`,
          text: searchValue,
          ui: "ru",
        },
      }),
      transformResponse: (response: FetchedDataType) => {
        return response.def;
      },
    }),
  }),
});
