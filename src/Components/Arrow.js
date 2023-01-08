import React from "react";
import PropTypes from "prop-types";

export default function ArrowIcon({ color, clname }) {
  return (
    <svg
      className={clname}
      fill="none"
      width="30"
      height="30"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

ArrowIcon.propTypes = {
  color: PropTypes.string,
  clname: PropTypes.string,
};
ArrowIcon.defaultProps = {
  color: "#000",
  clname: "",
};
