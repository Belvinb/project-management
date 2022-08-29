import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { userInfo } = useSelector((state) => state.user);
    const navigate = useNavigate();
  if (!userInfo) {
    return (
     navigate("/login")
    );
  }

  // returns child route elements
  return <Outlet />;
};

export default ProtectedRoute;
