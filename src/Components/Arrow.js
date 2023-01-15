import React from "react";
import PropTypes from "prop-types";

export default function ArrowIcon({ clname, color, width, height, viewBox }) {
  return (
    <svg
      className={clname}
      fill="none"
      width={width}
      height={height}
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

ArrowIcon.propTypes = {
  color: PropTypes.string,
  clname: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
};
ArrowIcon.defaultProps = {
  color: "#000",
  clname: "",
  width: "30px",
  height: "30px",
  viewBox: "0 0 24 24",
};
