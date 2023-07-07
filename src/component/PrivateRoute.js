import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
//import LoginHook from './LoginHook';

function PrivateRoute() {
  const isAuth = useSelector((state) => state.LoginState.isAuth);
  // const { userName, Id, isAuth } = LoginHook()
  // console.log("Route:",userName, Id, isAuth)

  console.log(isAuth);
  return !!isAuth ? <Outlet /> : <Navigate to="/unauth" />;
}

export default PrivateRoute;
