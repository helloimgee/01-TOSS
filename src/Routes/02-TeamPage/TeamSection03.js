/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useEffect, useState } from "react";
import teamGraphData from "../../assets/teamGraphData";
import "./TeamSection03.scss";

export default function TeamSection03() {
  const [cate, setCate] = useState("2021");
  const [data, setData] = useState([]);
  const [menuOffset, setMenuOffset] = useState(0);

  const handleCate = (e, idx) => {
    const year = e.target.getAttribute("data-year") || e.target.innerText;
    setCate(year);
    setMenuOffset(idx * 76.16);
  };

  useEffect(() => {
    setData(teamGraphData[cate]);
  }, [cate]);

  return (
    <section className="teamSection03">
      <div className="teamSection03-wrap">
        <div className="teamSection03-wrap-title">
          <p>
            토스팀은 오늘도 <br /> 위대한 역사를 만들고 있습니다
          </p>
        </div>
        <div className="teamSection03-wrap-body">
          <div className="teamSection03-wrap-body-graph">
            <ul className="teamSection03-wrap-body-graph-laptop">
              <li
                className={`${cate === "2021" ? "on" : ""}`}
                role="button"
                onClick={handleCate}
                onKeyDown={handleCate}
                aria-label="2021년 카테고리"
                data-year="2021"
              />
              <li
                className={`${cate === "2020" ? "on" : ""}`}
                role="button"
                onClick={handleCate}
                onKeyDown={handleCate}
                aria-label="2020년 카테고리"
                data-year="2020"
              />
              <li
                className={`${cate === "2019" ? "on" : ""}`}
                role="button"
                onClick={handleCate}
                onKeyDown={handleCate}
                aria-label="2019년 카테고리"
                data-year="2019"
              />
              <li
                className={`${cate === "2018" ? "on" : ""}`}
                role="button"
                onClick={handleCate}
                onKeyDown={handleCate}
                aria-label="2018년 카테고리"
                data-year="2018"
              />
              <li
                className={`${cate === "2017" ? "on" : ""}`}
                role="button"
                onClick={handleCate}
                onKeyDown={handleCate}
                aria-label="2017년 카테고리"
                data-year="2017"
              />
              <li
                className={`${cate === "2016" ? "on" : ""}`}
                role="button"
                onClick={handleCate}
                onKeyDown={handleCate}
                aria-label="2016년 카테고리"
                data-year="2016"
              />
              <li
                className={`${cate === "2015" ? "on" : ""}`}
                role="button"
                onClick={handleCate}
                onKeyDown={handleCate}
                aria-label="2015년 카테고리"
                data-year="2015"
              />
              <li
                className={`${cate === "2014" ? "on" : ""}`}
                role="button"
                onClick={handleCate}
                onKeyDown={handleCate}
                aria-label="2014년 카테고리"
                data-year="2014"
              />
              <li
                className={`${cate === "2013" ? "on" : ""}`}
                role="button"
                onClick={handleCate}
                onKeyDown={handleCate}
                aria-label="2013년 카테고리"
                data-year="2013"
              />
            </ul>
            <ul className="teamSection03-wrap-body-graph-mobile">
              <li
                className={`${cate === "2021" ? "on" : ""}`}
                role="button"
                onClick={(e) => handleCate(e, 0)}
                onKeyDown={(e) => handleCate(e, 0)}
                aria-label="2021년 카테고리"
              >
                2021
              </li>
              <li
                className={`${cate === "2020" ? "on" : ""}`}
                role="button"
                onClick={(e) => handleCate(e, 1)}
                onKeyDown={(e) => handleCate(e, 1)}
                aria-label="2020년 카테고리"
              >
                2020
              </li>
              <li
                className={`${cate === "2019" ? "on" : ""}`}
                role="button"
                onClick={(e) => handleCate(e, 2)}
                onKeyDown={(e) => handleCate(e, 2)}
                aria-label="2019년 카테고리"
              >
                2019
              </li>
              <li
                className={`${cate === "2018" ? "on" : ""}`}
                role="button"
                onClick={(e) => handleCate(e, 3)}
                onKeyDown={(e) => handleCate(e, 3)}
                aria-label="2018년 카테고리"
              >
                2018
              </li>
              <li
                className={`${cate === "2017" ? "on" : ""}`}
                role="button"
                onClick={(e) => handleCate(e, 4)}
                onKeyDown={(e) => handleCate(e, 4)}
                aria-label="2017년 카테고리"
              >
                2017
              </li>
              <li
                className={`${cate === "2016" ? "on" : ""}`}
                role="button"
                onClick={(e) => handleCate(e, 5)}
                onKeyDown={(e) => handleCate(e, 5)}
                aria-label="2016년 카테고리"
              >
                2016
              </li>
              <li
                className={`${cate === "2015" ? "on" : ""}`}
                role="button"
                onClick={(e) => handleCate(e, 6)}
                onKeyDown={(e) => handleCate(e, 6)}
                aria-label="2015년 카테고리"
              >
                2015
              </li>
              <li
                className={`${cate === "2014" ? "on" : ""}`}
                role="button"
                onClick={(e) => handleCate(e, 7)}
                onKeyDown={(e) => handleCate(e, 7)}
                aria-label="2014년 카테고리"
              >
                2014
              </li>
              <li
                className={`${cate === "2013" ? "on" : ""}`}
                role="button"
                onClick={(e) => handleCate(e, 8)}
                onKeyDown={(e) => handleCate(e, 8)}
                aria-label="2013년 카테고리"
                data-year="2013"
              >
                2013
              </li>
              <div
                className="teamSection03-wrap-body-graph-mobile-indicator"
                style={{ left: `${menuOffset}px` }}
              />
            </ul>
          </div>
          <div className="teamSection03-wrap-body-list">
            <ul>
              {data.map((item) => {
                return (
                  <li>
                    <p>{item.date}</p>
                    <p>{item.content}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
