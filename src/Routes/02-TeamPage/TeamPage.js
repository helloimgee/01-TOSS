import React from "react";
import ArrowIcon from "../../components/Arrow";
import "./TeamPage.scss";

export default function TeamPage() {
  return (
    <div className="teamPage">
      <div className="teamPage-main-bg">
        <div className="teampPage-main-contents">
          <div className="teamPage-main-tit">
            <span>금융, 그 이상의</span>
            <br />
            <span>역사를 만들고 있습니다</span>
          </div>
          <ArrowIcon clname="teamPage-main-arrow" color="#fff" />
        </div>
      </div>
    </div>
  );
}
