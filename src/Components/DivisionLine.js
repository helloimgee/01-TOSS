import React from "react";
import "./DivisionLine.scss";
import PropTypes from "prop-types";

export default function DivisionLine({ size, color }) {
  return (
    <div
      className={`divisionLine ${size}`}
      style={{ backgroundColor: `${color}` }}
    />
  );
}

DivisionLine.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};
DivisionLine.defaultProps = {
  size: "medium",
  color: "#000",
};
