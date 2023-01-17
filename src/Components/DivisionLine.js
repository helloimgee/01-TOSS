import React from "react";
import PropTypes from "prop-types";

export default function DivisionLine({ width, height, color }) {
  return (
    <div
      className="divisionLine"
      style={{
        backgroundColor: `${color}`,
        width: `${width}`,
        height: `${height}`,
      }}
    />
  );
}

DivisionLine.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};
DivisionLine.defaultProps = {
  width: "1px",
  height: "100%",
  color: "#000",
};
