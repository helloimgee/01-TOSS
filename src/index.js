/* eslint-disable import/no-unresolved */
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./routes/01-Home/Home";
import TeamPage from "./routes/02-TeamPage/TeamPage";
import SupportPage from "./routes/03-SupportPage/SupportPage";
import SupportFaqPage from "./routes/04-SupportFaqPage/SupportFaqPage";
import TossCertPage from "./routes/05-TossCertPage/TossCertPage";
import CareerPage from "./routes/06-CareerPage/CareerPage";
import ErrorPage from "./ErrorPage";
import "./reset.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // *처음 “/” 경로(index)일 때는 <Outlet>(children) 부분이 비어있기 때문에 그 부분에 띄워줄 컴포넌트를 지정해준다
        element: <Home />,
      },
      {
        path: "/team",
        element: <TeamPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/support",
        element: <SupportPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/support/faq",
        element: <SupportFaqPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/tosscert",
        element: <TossCertPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/career",
        element: <CareerPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
