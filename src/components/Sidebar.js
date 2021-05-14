import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import SidebarToggleImg from "../assets/img/componentImg/sidebarToggleImg";
import { toggleSidebar } from "../redux/actions/sideToogleActions";
import appUrl from "../common/constants/appUrl";
import settings from "../assets/img/settings.svg";

const Sidebar = () => {
  const isOpen = useSelector((state) => state.sidebarToggle.isOpen);
  const dispatch = useDispatch();
  return (
    <div className={`sidebar ${isOpen ? "show" : ""}`}>
      <div className="d-flex align-items-center justify-content-between px-4 py-3 border-bottom border-secondary">
        <div className="sidebar-logo">ADFlow</div>
        <button
          className="btn-secondary close-sidebar-btn"
          onClick={() => dispatch(toggleSidebar())}
        >
          <SidebarToggleImg />
        </button>
      </div>
      <div className="p-4 border-bottom border-secondary">
        <Link to={appUrl.FLOW_CONTROL} className="text-white block-with-img">
          <img
            src={settings}
            alt="navigation menu icon flow control"
            className="mr-3"
          />
          Управление потоками
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
