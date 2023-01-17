/* eslint-disable import/no-unresolved */
import React from "react";
import logoData from "../assets/logoData";
import "./InfiniteSlide.scss";

export default function InfiniteSlide() {
  const logoList = logoData.map((list) => {
    return (
      <li
        className="list"
        key={list.id}
        style={{ backgroundColor: `${list.color}` }}
      >
        <img src={list.img} alt={list.id} />
      </li>
    );
  });

  return (
    <div className="rollingbanner">
      <div className="wrap">
        <div className="roller">
          <ul>{logoList}</ul>
        </div>
      </div>
    </div>
  );
}
