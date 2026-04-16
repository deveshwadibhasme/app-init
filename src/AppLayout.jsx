import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <main className="max-w-screen min-h-screen">
      <Header />
      <Outlet />
    </main>
  );
};

export default AppLayout;
