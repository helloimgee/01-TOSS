/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useEffect, useState } from "react";
import pressData from "../../assets/pressData";
import "./TeamSection07.scss";

export default function TeamSection07() {
  const [cate, setCate] = useState("2022");
  const [data, setData] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  const [menuOffset, setMenuOffset] = useState(0);

  const handleCate = (e, idx) => {
    setCate(e.target.innerText);
    setMenuOffset(idx * 77);
  };

  useEffect(() => {
    setData(pressData[cate]);
    setIsLoad(true);
    return () => {
      setIsLoad(false);
    };
  }, [cate]);

  return (
    <section className="teamSection07">
      <div className="teamSection07-wrap">
        <div className="teamSection07-wrap-header">
          <span>언론 속의 토스</span>
          <ul className="teamSection07-wrap-header-date">
            <li
              role="button"
              onClick={(e) => handleCate(e, 0)}
              onKeyDown={(e) => handleCate(e, 0)}
            >
              2022
            </li>
            <li
              role="button"
              onClick={(e) => handleCate(e, 1)}
              onKeyDown={(e) => handleCate(e, 1)}
            >
              2021
            </li>
            <li
              role="button"
              onClick={(e) => handleCate(e, 2)}
              onKeyDown={(e) => handleCate(e, 2)}
            >
              2020
            </li>
            <li
              role="button"
              onClick={(e) => handleCate(e, 3)}
              onKeyDown={(e) => handleCate(e, 3)}
            >
              2019
            </li>
            <li
              role="button"
              onClick={(e) => handleCate(e, 4)}
              onKeyDown={(e) => handleCate(e, 4)}
            >
              2018
            </li>
            <li
              role="button"
              onClick={(e) => handleCate(e, 5)}
              onKeyDown={(e) => handleCate(e, 5)}
            >
              2017
            </li>
            <div
              className="teamSection07-wrap-header-date-on"
              style={{ left: `${menuOffset}px` }}
            />
          </ul>
        </div>
        <div className="teamSection07-wrap-list">
          <ul className={`${isLoad && "on"}`}>
            {data.map((item) => {
              return (
                <li key={item.key}>
                  <span>{item.press}</span>
                  <span>{item.date}</span>
                  <p>{item.content}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="teamSection07-wrap-moreBtn">
          <button type="button">공식 보도자료 보기</button>
        </div>
      </div>
    </section>
  );
}
