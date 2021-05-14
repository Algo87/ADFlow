import React from "react";

export default function Modal({
  show,
  className = "",
  children,
  closeCallback,
  style,
}) {
  return (
    <div
      onClick={() => (closeCallback ? closeCallback() : null)}
      className={`simply-modal ${show ? "" : "d-none"}`}
    >
      <div
        style={style}
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-lg m-auto px-0 center-position-modal ${className}`}
      >
        {children}
      </div>
    </div>
  );
}