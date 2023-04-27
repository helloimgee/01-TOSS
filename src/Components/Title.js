import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import "./Title.scss";

const Title = forwardRef(({ className, children }, ref) => {
  return (
    <div className={`title ${className}`} ref={ref}>
      {children}
    </div>
  );
});

export default Title;

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};

Title.defaultProps = {
  className: "",
};
