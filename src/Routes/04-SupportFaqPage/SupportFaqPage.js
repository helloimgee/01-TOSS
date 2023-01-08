import React from "react";
import "./SupportFaqPage.scss";
import { Outlet } from "react-router-dom";
import Search from "../../components/Search";
import SearchCate from "../../components/SearchCate";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <SearchCate />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "/"
//         element: <Transfer />
//       }
//     ]
//   },
// ]);

export default function SupportFaqPage() {
  return (
    <div className="supportFaqPage">
      <div className="supportFaqPage main">
        <h1>자주 묻는 질문</h1>
        <Search />
        <div className="supportFaqPage main-faq">
          {/* <RouterProvider router={router} /> */}
          <SearchCate />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
