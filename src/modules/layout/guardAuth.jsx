import React from "react";
import { Navigate } from "react-router";

export const GuardAuth = ({ children }) => {
  let isAuthenticated = sessionStorage.getItem("isAuthenticated");
  if (isAuthenticated) {
    return children;
  } else {
    return <Navigate to={"/auth/login"} />;
  }
};
