import React from "react";
import PropTypes from "prop-types";
import "./HeadingM.scss";

export default function Text({ clname, children, color }) {
  return (
    <div className={`headingM ${clname}`} style={{ color: `${color}` }}>
      {children}
    </div>
  );
}

Text.propTypes = {
  clname: PropTypes.string,
  children: PropTypes.element.isRequired,
  color: PropTypes.string,
};

Text.defaultProps = {
  clname: "",
  color: "#fff",
};
