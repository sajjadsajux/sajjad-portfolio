import { createBrowserRouter } from "react-router";
import MainLayOut from "../layouts/MainLayOut";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    children: [{ index: true, Component: Home }],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
