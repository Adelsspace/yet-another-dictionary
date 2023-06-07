import React from "react";
import { Search, TranslateDirection, ShowResults } from "../components/index";

export const Home = () => {
  return (
    <div>
      <TranslateDirection />
      <Search />
      <ShowResults />
    </div>
  );
};
