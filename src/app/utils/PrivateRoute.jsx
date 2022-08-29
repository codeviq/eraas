import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Header from "../components/admin_components/Header/Header";
import Sidebar from "../components/admin_components/Sidebar/Sidebar";

const PrivateRoute = () => {
  let auth = { token: true };
  return auth.token ? (
    <div className=" w-full flex bg-main-bg">
      <div className="">
        <Sidebar />
      </div>

      <div className="flex flex-col w-full ">
        <Header />
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
