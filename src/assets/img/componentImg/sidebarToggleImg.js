import React from "react";
const SidebarToggleImg = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="18"
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="18"
        height="3"
        fill={props.color ? props.color : "#C4C4C4"}
      />
      <rect
        y="8"
        width="24"
        height="3"
        fill={props.color ? props.color : "#C4C4C4"}
      />
      <rect
        y="15"
        width="14"
        height="3"
        fill={props.color ? props.color : "#C4C4C4"}
      />
    </svg>
  );
};

export default SidebarToggleImg;
