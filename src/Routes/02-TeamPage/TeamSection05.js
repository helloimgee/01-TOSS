import React, { useState } from "react";
import data from "../../assets/teamFrameData";
import "./TeamSection05.scss";

export default function TeamSection05() {
  const [plusIndex, setPlusIndex] = useState(-1);

  const handlePlus = (idx) => {
    if (idx !== plusIndex) {
      setPlusIndex(idx);
    } else {
      setPlusIndex(-1);
    }
  };

  const handleClose = (idx) => {
    if (idx === plusIndex) {
      setPlusIndex(-1);
    } else {
      setPlusIndex(idx);
    }
  };
  return (
    <section className="teamSection05">
      <div className="teamSection05-wrap">
        <div className="teamSection05-wrap-title">
          <p>토스가 바꿀 금융</p>
          <p>모두를 위한, 새로운 금융을 만들고자 합니다</p>
        </div>
        <ul className="teamSection05-wrap-list">
          {data.map((item, idx) => {
            return (
              <li
                key={item.key}
                className={`teamSection05-wrap-list-item ${
                  plusIndex === idx ? "on" : ""
                }`}
              >
                <div
                  className={`teamSection05-wrap-list-item-bg ${
                    plusIndex === idx ? "on" : ""
                  }`}
                  style={{
                    background: `url(${process.env.PUBLIC_URL}/images/team/${item.image}) no-repeat center / cover`,
                  }}
                />
                <p
                  className={`teamSection05-wrap-list-item-cate ${
                    plusIndex === idx ? "on" : ""
                  }`}
                >
                  {item.cate}
                </p>
                <p
                  className={`teamSection05-wrap-list-item-title ${
                    plusIndex === idx ? "on" : ""
                  }`}
                >
                  {item.title}
                </p>
                <button
                  className={`teamSection05-wrap-list-item-plus ${
                    plusIndex === idx ? "on" : ""
                  }`}
                  type="button"
                  aria-label="플러스버튼"
                  onClick={() => handlePlus(idx)}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/careerPage-plus.svg`}
                    alt="플러스버튼"
                  />
                </button>
                <p
                  className={`teamSection05-wrap-list-item-content ${
                    plusIndex === idx ? "on" : ""
                  }`}
                >
                  {item.clicked.content}
                </p>
                <p
                  className={`teamSection05-wrap-list-item-question ${
                    plusIndex === idx ? "on" : ""
                  }`}
                >
                  {item.clicked.question}
                </p>
                <button
                  className={`teamSection05-wrap-list-item-close ${
                    plusIndex === idx ? "on" : ""
                  }`}
                  type="button"
                  aria-label="닫기버튼"
                  onClick={() => handleClose(idx)}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/btn-close.svg`}
                    alt="닫기버튼"
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
