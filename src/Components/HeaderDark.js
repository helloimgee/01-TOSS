/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react";
import { Link, useResolvedPath } from "react-router-dom";
import "./HeaderDark.scss";

export default function headerDark() {
  const { pathname } = useResolvedPath();
  const [isClicked, setIsClicked] = useState(true);

  /* 현재 스크롤 위치 */
  const [scrollPosition, setScrollPosition] = useState(0);

  /* 스크롤시 스크롤 거리 계산 */
  // 1.
  const updateScroll = () => {
    setScrollPosition(
      window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
    );
  };
  // 2.
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <div
      className={`headerDark ${
        scrollPosition > 30 && pathname !== "/career" ? "headerBg" : ""
      } ${isClicked === false ? "hamburgerBg" : ""}`}
    >
      <div className="header-wrap">
        <div className="header-logo">
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo-white.svg`}
              alt="logo2"
            />
          </Link>
        </div>
        {/* pc */}
        <div className="header-menu-pc">
          <Link to="/team">
            <span>회사 소개</span>
          </Link>
          <Link to="/support">
            <span>고객센터</span>
          </Link>
          <Link to="/support/faq?category=top10">
            <span>자주 묻는 질문</span>
          </Link>
          <Link to="/tosscert">
            <span>토스인증서</span>
          </Link>
          <Link to="/career">
            <span>채용</span>
          </Link>
          <div className="header-menu-translate">
            <Link to="/">
              <span>KOR</span>
            </Link>
            <div className="line" />
            <Link to="/">
              <span className="eng">ENG</span>
            </Link>
          </div>
        </div>
        {/* mobile */}
        <div className="header-menu-mobile">
          <button type="button" className="appBtn">
            앱 다운로드
          </button>
          {/* 햄버거 */}
          <button
            type="button"
            className="hamburger"
            onClick={() => {
              setIsClicked((e) => !e);
            }}
          >
            {isClicked ? (
              <img
                className="hamburger-before"
                src={`${process.env.PUBLIC_URL}/images/hamburger-white.svg`}
                alt="before"
              />
            ) : (
              <>
                <img
                  className="hamburger-after"
                  src={`${process.env.PUBLIC_URL}/images/hamburger-x.svg`}
                  alt="after"
                />
                <div className="hamburger-menu">
                  <div className="hamburger-menu-lists">
                    <Link to="/team">
                      <span>회사 소개</span>
                    </Link>
                    <Link to="/support">
                      <span>고객센터</span>
                    </Link>
                    <Link to="/support/faq?category=top10">
                      <span>자주 묻는 질문</span>
                    </Link>
                    <Link to="/tosscert">
                      <span>토스인증서</span>
                    </Link>
                    <Link to="/career">
                      <span>채용</span>
                    </Link>
                    <div className="header-translate">
                      <Link to="/">
                        <span>KOR</span>
                      </Link>
                      <div className="line" />
                      <Link to="/">
                        <span className="eng">ENG</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
