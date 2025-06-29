import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./router/Router.jsx";
import { ToastContainer } from "react-toastify";
import SplashCursor from "./components/animations/SplashCursor/SplashCursor.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer />
    <SplashCursor />

    <RouterProvider router={router} />
  </StrictMode>
);
