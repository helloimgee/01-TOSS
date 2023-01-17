/* eslint-disable import/no-unresolved */
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Routes/Root";
import Home from "./Routes/01-Home/Home";
import TeamPage from "./Routes/02-TeamPage/TeamPage";
import SupportPage from "./Routes/03-SupportPage/SupportPage";
import SupportFaqPage from "./Routes/04-SupportFaqPage/SupportFaqPage";
import TossCertPage from "./Routes/05-TossCertPage/TossCertPage";
import CareerPage from "./Routes/06-CareerPage/CareerPage";
import ErrorPage from "./ErrorPage";
import "./reset.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
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
