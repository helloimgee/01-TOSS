/* eslint-disable import/no-unresolved */
import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import serviceData from "../assets/serviceData";
import "./ServiceList.scss";

const ServiceList = forwardRef(({ className }, ref) => {
  const serviceList = serviceData.map((list) => {
    return (
      <li key={list.id}>
        <div
          className={`serviceList ${className} icon`}
          style={{ backgroundColor: `${list.color}` }}
        >
          <img src={list.img} alt={list.id} />
        </div>
        <div className={`serviceList ${className} txt-wrap`}>
          <span>{list.title}</span>
          <span>{list.des}</span>
        </div>
      </li>
    );
  });
  return (
    <div ref={ref} className={`serviceList ${className}`}>
      <ul>{serviceList}</ul>
    </div>
  );
});

export default ServiceList;

ServiceList.propTypes = {
  className: PropTypes.string.isRequired,
};
