import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Screens/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },

//   {
//     path: "/profilereg",
//     element: <Profilereg/>,
//   },
 
]);
