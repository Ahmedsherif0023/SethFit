import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Measurements from "./Pages/Measurements/Measurements";
import Contact from "./Pages/Contact/Contact";
import Workout from "./Pages/Workout/Workout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>SORROY.........</h1>,
  },

  {
    path: "/measurements",
    element: <Measurements />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/workout",
    element: <Workout />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);