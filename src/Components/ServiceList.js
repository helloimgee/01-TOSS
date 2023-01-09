/* eslint-disable import/no-unresolved */
import React from "react";
import "./ServiceList.scss";
import serviceData from "@assets/serviceData";

export default function ServiceList() {
  const serviceList = serviceData.map((list) => {
    return (
      <li className="serviceList" key={list.id}>
        <div
          className="serviceList icon"
          style={{ backgroundColor: `${list.color}` }}
        >
          <img src={list.img} alt={list.id} />
        </div>
        <div className="serviceList txt-wrap">
          <span>{list.title}</span>
          <span>{list.des}</span>
        </div>
      </li>
    );
  });
  return (
    <div className="serviceList wrap">
      <ul>{serviceList}</ul>
    </div>
  );
}
