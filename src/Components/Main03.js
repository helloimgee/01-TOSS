import React from "react";
import "./Main03.scss";
import InfiniteSlide from "./InfiniteSlide";

export default function Main03() {
  return (
    <div className="cert">
      <div className="cert-title">
        <span>함께 하는 이용기관</span>
        <span>400+</span>
        <br />
        <span>다양한 서비스와 공공 분야에서</span>
      </div>
      <InfiniteSlide />
    </div>
  );
}
