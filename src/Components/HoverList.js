import React, { useState } from "react";
import PropTypes from "prop-types";
import "./HoverList.scss";

export default function HoverList({ dataAsset }) {
  /* 
  1-1. 마우스 hover 여부 저장하기 위해 state 설정 (초기값 -1) 
  = 값을 true/false가 아닌 숫자로 하는 이유는 map으로 나열한 각각의 리스트를 선택해주기 위함(숫자로 구분할 것)
  */
  const [isHover, setIsHover] = useState(-1);
  /* 1-2. 커스텀 메서드 2개 생성 
  (1) setTrue = isHover 값을 idx로 수정
  (2) setFalse = isHover 값을 다시 선택한 된 상태(-1)로
  */
  const setHoverOn = (idx) => {
    setIsHover(idx);
  };
  const setHoverOff = () => {
    setIsHover(-1);
  };

  const data = dataAsset;

  return (
    <div className="hoverList">
      {data.map((list, idx) => {
        return (
          <div
            className="hoverList-item"
            onMouseOver={() => {
              setHoverOn(idx);
            }}
            onFocus={() => {
              setHoverOn(idx);
            }}
            onMouseOut={() => {
              setHoverOff();
            }}
            onBlur={() => {
              setHoverOff();
            }}
            key={list.id}
          >
            <div
              className={`hoverList-item-bg ${isHover === idx ? "hover" : ""}`}
              style={{
                background: `url(${list.bg}) no-repeat center / cover`,
              }}
            />
            <div className="hoverList-li-txt">
              <p
                className={`hoverList-li-txt-hidden ${
                  isHover === idx ? "hover" : ""
                }`}
              >
                {list.hidden}
              </p>
              <p
                className={`hoverList-li-txt-tit ${
                  isHover === idx ? "hover" : ""
                }`}
              >
                {list.tit}
              </p>
              <div
                className={`hoverList-li-txt-icon ${
                  isHover === idx ? "hover" : ""
                }`}
              >
                <img src="/images/careerPage-plus.svg" alt="플러스버튼" />
              </div>
              <p
                className={`hoverList-li-txt-des ${
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
