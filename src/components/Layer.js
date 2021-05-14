import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleSidebar } from "../redux/actions/sideToogleActions";

const Layer = () => {
  const isOpen = useSelector((state) => state.sidebarToggle.isOpen);
  const dispatch = useDispatch();
  return (
    <>
      {isOpen && (
        <div className="layer" onClick={() => dispatch(toggleSidebar())}></div>
      )}
    </>
  );
};

export default Layer;
