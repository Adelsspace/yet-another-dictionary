import React from "react";
import { Header } from "../components";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <div className="ref">
        <a target="_blank" href=" http://api.yandex.ru/dictionary">
          «Реализовано с помощью сервиса «API «Яндекс.Словарь»{" "}
        </a>
      </div>
    </div>
  );
};

export default MainLayout;
