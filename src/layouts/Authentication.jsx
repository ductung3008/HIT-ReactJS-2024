import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/Header/Header";

const Authentication = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Authentication;
