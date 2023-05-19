import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Screens/Dashboard";
import Authentication from "./Screens/Authentication";
import SignIn from "./Screens/SignIn";
import AdminSignUp from "./Screens/AdminSignUp";
import Productlist from "./Screens/Productpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },

  {
    path: "/authentication",
    element: <Authentication/>,
  },
  {
    path: "/AdminSignIn",
    element: <SignIn/>,
  },
  {
    path: "/Productlist",
    element: <Productlist/>,
  },
]);
