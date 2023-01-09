/* eslint-disable import/no-unresolved */
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@components/Header";

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}