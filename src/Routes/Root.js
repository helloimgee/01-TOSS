/* eslint-disable import/no-unresolved */
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Root.scss";
import { useTheme } from "../context/ThemeProvider";

export default function Root() {
  const { isDarkMode } = useTheme();

  return (
    <>
      <Header mode={isDarkMode ? "darkMode" : "lightMode"} />
      <Outlet />
      <Footer />
    </>
  );
}
