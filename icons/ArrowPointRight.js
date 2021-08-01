import React from "react";

function ArrowPointRight(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M5 12L19 12"></path>
      <path d="M12 5L19 12 12 19"></path>
    </svg>
  );
}

export default ArrowPointRight;
