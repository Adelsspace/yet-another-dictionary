import React from "react";
import { Search, TranslateDirection, SearchResualt } from "../components/index";

export const Home = () => {
  return (
    <div>
      <TranslateDirection />
      <Search />
      <SearchResualt />
    </div>
  );
};
