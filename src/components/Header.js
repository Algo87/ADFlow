import React from "react";
import { useDispatch, useSelector } from "react-redux";

import SidebarToggleImg from "../assets/img/componentImg/sidebarToggleImg";
import { toggleSidebar } from "../redux/actions/sideToogleActions";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="bg-white">
      <div className="d-flex justify-content-between align-items-center py-3 px-4">
        <button
          className="bg-white border-0 btn-secondary"
          onClick={() => dispatch(toggleSidebar())}
        >
          <SidebarToggleImg />
        </button>

        <div className="header-logo">ADFlow</div>
        <div className="text-muted header-user-name">Клиент: ООО “Патио”</div>
        {/* <button className="btn-warning btn">Выйти</button> */}
      </div>
    </header>
  );
};

export default Header;
