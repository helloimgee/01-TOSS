/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderLight.scss";

export default function HeaderLight() {
  // const [isWidth, setIsWidth] = useState(0);
  // const openMenu = () => {
  //   setIsWidth(250);
  //   console.log(isWidth);
  // };
  // const closeMenu = () => {
  //   setIsWidth(0);
  // };

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isClicked, setIsClicked] = useState(true);

  return (
    <div
      className={`headerLight ${!isClicked ? "hamburgerBg" : ""} ${
        scrollPosition > 30 ? "headerBg" : ""
      } 
      `}
    >
      <div className="header-wrap">
        <div className="header-logo">
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="logo2"
            />
          </Link>
        </div>
        {/* 피씨 */}
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
        {/* 모바일 */}
        <div className="header-menu-mobile">
          <button className="header-menu-mobile-appDown" type="button">
            앱 다운로드
          </button>
          <button
            className="hamburger"
            type="button"
            onClick={() => {
              setIsClicked((e) => !e);
            }}
          >
            {isClicked ? (
              <img
                className="hamburger-before"
                src={`${process.env.PUBLIC_URL}/images/hamburger-black.svg`}
                alt="before"
              />
            ) : (
              <div className="header-menu-mobile-open">
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
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
