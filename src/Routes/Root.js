/* eslint-disable import/no-unresolved */
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "@components/Footer";
import HeaderWhite from "@components/HeaderWhite";

export default function Root() {
  return (
    <>
      <HeaderWhite />
      <Outlet />
      <Footer />
    </>
  );
}
