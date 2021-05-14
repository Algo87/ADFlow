import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Sidebar from "./Sidebar";
import Header from "./Header";

// import SidebarToggle from "assets/images/imgComponent/SidebarToggle";

const Dashboard = ({ children, ...props }) => {
  const dispatch = useDispatch();
  // const { isOpen } = useSelector((state) => state.sidebar);
  // const width = window.innerWidth;

  return (
    <>
      <Header />

      <Sidebar />
      {/* <div
        style={{ marginLeft: isOpen ? (width > 992 ? "280px" : "auto") : 0 }}
        className="main"
      > */}
      {/*<div className="navbar pl-3 pt-3 pb-3 py-lg-4 bg-white position-relative">
         <SidebarToggle
          className="toggle-sitebar-icon mx-2"
          onClick={() => {
            dispatch(toggleSidebar());
          }}
        /> 
      </div>*/}
      {children}
      {/* </div> */}
    </>
  );
};

export default Dashboard;
