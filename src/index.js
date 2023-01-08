import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import CareerPage from "./routes/06-CareerPage/CareerPage";
import Home from "./routes/01-Home/Home";
import Root from "./routes/Root";
import SupportFaqPage from "./routes/04-SupportFaqPage/SupportFaqPage";
import SupportPage from "./routes/03-SupportPage/SupportPage";
import TeamPage from "./routes/02-TeamPage/TeamPage";
import TossCertPage from "./routes/05-TossCertPage/TossCertPage";
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
