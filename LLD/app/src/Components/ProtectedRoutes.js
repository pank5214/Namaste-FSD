import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  // Write  your logic here to check if user is authenticated or not.
  const isAuthenticated = false;
  return isAuthenticated ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoutes;
