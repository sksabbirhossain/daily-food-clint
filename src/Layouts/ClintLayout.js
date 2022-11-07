import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const ClintLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default ClintLayout;
