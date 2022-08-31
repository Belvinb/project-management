import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { userToken } = useSelector((state) => state.user);
    const navigate = useNavigate();
  if (!userToken) {
    return <h2>unauthorized</h2>;
  }

  // returns child route elements
  return <Outlet />;
};

export default ProtectedRoute;
