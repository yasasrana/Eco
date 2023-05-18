import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Screens/Dashboard";
import Authentication from "./Screens/Authentication";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },

  {
    path: "/authentication",
    element: <Authentication/>,
  },
 
]);
