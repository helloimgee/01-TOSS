import React from "react";
import "./ServiceList.scss";
import serviceData from "../assets/serviceData";

export default function ServiceList() {
  const serviceList = serviceData.map((list) => {
    return (
      <li className="service-list" key={list.id}>
        <div
          className="service-icon"
          style={{ backgroundColor: `${list.color}` }}
        />
        <div className="service-txt-wrap">
          <span>{list.title}</span>
          <span>{list.des}</span>
        </div>
      </li>
    );
  });
  return (
    <div className="service-wrap">
      <ul>{serviceList}</ul>
    </div>
  );
}
