/* eslint-disable import/no-unresolved */
import React from "react";
import { Outlet, useResolvedPath } from "react-router-dom";
import Footer from "@components/Footer";
import HeaderLight from "@components/HeaderLight";
import HeaderDark from "@components/HeaderDark";
import "./Root.scss";

export default function Root() {
  const { pathname } = useResolvedPath();

  return (
    <>
      {pathname === "/" ||
      pathname === "/support" ||
      pathname === "/support/faq" ? (
        <HeaderLight />
      ) : (
        <HeaderDark />
      )}
      <Outlet />
      <Footer />
    </>
  );
}
