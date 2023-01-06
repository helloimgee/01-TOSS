import React from "react";
import logoData from "../assets/logoData";
import "./InfiniteSlide.scss";

export default function InfiniteSlide() {
  const logoList = logoData.map((list) => {
    return (
      <li
        className="list"
        style={{ backgroundColor: `${list.color}` }}
        key={list.id}
      />
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
