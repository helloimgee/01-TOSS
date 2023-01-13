import React, { useState } from "react";
import PropTypes from "prop-types";
import "./HoverList.scss";

export default function HoverList({ dataAsset }) {
  const [isHover, setIsHover] = useState(-1);
  const setTrue = (idx) => {
    setIsHover(idx);
  };
  const setFalse = () => {
    setIsHover(-1);
  };

  const data = dataAsset;

  return (
    <div className="careerPage-section-01-cont">
      {data.map((list, idx) => {
        return (
          <div
            className="careerPage-section-01-cont-li"
            onMouseOver={() => {
              setTrue(idx);
            }}
            onFocus={() => {
              setTrue(idx);
            }}
            onMouseOut={() => {
              setFalse();
            }}
            onBlur={() => {
              setFalse();
            }}
            key={list.id}
          >
            <div
              className={`careerPage-section-01-cont-li-img ${
                isHover === idx ? "hover" : ""
              }`}
              style={{
                background: `url(${list.bg}) no-repeat center / cover`,
              }}
            />
            <div className="careerPage-section-01-cont-li-txt">
              <p
                className={`careerPage-section-01-cont-li-txt-hidden ${
                  isHover === idx ? "hover" : ""
                }`}
              >
                {list.hidden}
              </p>
              <p
                className={`careerPage-section-01-cont-li-txt-tit ${
                  isHover === idx ? "hover" : ""
                }`}
              >
                {list.tit}
              </p>
              <div
                className={`careerPage-section-01-cont-li-txt-icon ${
                  isHover === idx ? "hover" : ""
                }`}
              >
                <img src="/images/careerPage-plus.svg" alt="플러스버튼" />
              </div>
              <p
                className={`careerPage-section-01-cont-li-txt-des ${
                  isHover === idx ? "hover" : ""
                }`}
              >
                {list.des}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

HoverList.propTypes = {
  dataAsset: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
