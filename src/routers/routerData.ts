import React from "react";
import BlankLayout from "src/@core/layouts/BlankLayout";
import Home from "src/views/home/Home";
import Login from "src/views/login";
import Register from "src/views/register";
import ForgotPassword from "src/views/forgot-password";

export interface routerProps {
  path: string;
  name: string;
  layout?: React.FunctionComponent<any>;
  guard?: React.FunctionComponent;
  component: React.FunctionComponent;
  children?: routerProps[];
}
export const routerData: routerProps[] = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    layout: BlankLayout,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    layout: BlankLayout,
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: ForgotPassword,
    layout: BlankLayout,
  },
];
