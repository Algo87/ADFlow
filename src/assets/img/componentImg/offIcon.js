import React from "react";
const OffBtn = ({ color }) => {
  const fillColor = color || "#FF9800";
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0C3.58878 0 0 3.58878 0 8C0 12.4112 3.58878 16 8 16C12.4112 16 16 12.4112 16 8C16 3.58878 12.4112 0 8 0ZM7.53125 2.6875C7.53125 2.42863 7.74113 2.21875 8 2.21875C8.25887 2.21875 8.46875 2.42863 8.46875 2.6875V6.4375C8.46875 6.69637 8.25887 6.90625 8 6.90625C7.74113 6.90625 7.53125 6.69637 7.53125 6.4375V2.6875ZM8 13.1562C5.15684 13.1562 2.84375 10.8432 2.84375 8C2.84375 5.95175 4.058 4.09731 5.93722 3.27566C6.17441 3.17191 6.45078 3.28016 6.5545 3.51734C6.65822 3.75453 6.55 4.03091 6.31281 4.13462C4.77494 4.80706 3.78125 6.32428 3.78125 8C3.78125 10.3262 5.67378 12.2188 8 12.2188C10.3262 12.2188 12.2188 10.3262 12.2188 8C12.2188 6.32428 11.2251 4.80706 9.68722 4.13466C9.45003 4.03094 9.34181 3.75456 9.44553 3.51737C9.54922 3.28016 9.82559 3.17188 10.0628 3.27569C11.942 4.09731 13.1562 5.95175 13.1562 8C13.1562 10.8432 10.8432 13.1562 8 13.1562Z"
        fill={fillColor}
      />
    </svg>
  );
};
export default OffBtn;
