import React from "react";
import { Outlet } from "react-router-dom";
import SearchHeader from "./SearchHeader";

export default function SearchCate() {
  return (
    <div className="supportFaqPage main-faq">
      {/* <RouterProvider router={router} /> */}
      <SearchHeader />
      <Outlet /> {/* Transfer 등 답변 파트 */}
    </div>
  );
}
