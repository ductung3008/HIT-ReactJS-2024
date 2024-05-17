import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
