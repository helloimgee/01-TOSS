/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react";
import { Link, useResolvedPath } from "react-router-dom";
import "./Header.scss";
import PropTypes from "prop-types";
import { useTheme } from "../context/ThemeProvider";

export default function Header({ mode }) {
  const { pathname } = useResolvedPath();
  const [isClicked, setIsClicked] = useState(false);
  const { toggleDark, toggleLight } = useTheme();

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

  useEffect(() => {
    if (
      pathname === "/" ||
      pathname === "/support" ||
      pathname === "/support/faq" ||
      pathname === "/tosscart"
    ) {
      toggleLight();
    } else {
      toggleDark();
    }
  }, [pathname]);

  return (
    <div
      className={`header ${mode} ${
        scrollPosition > 30 && pathname !== "/career" ? "scrollBgColor" : ""
      } ${isClicked === false ? "hamburgerBg" : ""}`}
    >
      <div className="header-wrap">
        <Link className={`header-wrap-logo ${isClicked ? "off" : ""}`} to="/" />
        {/* pc */}
        <div className="header-wrap-pc">
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
          <div className="header-wrap-pc-translate">
            <Link to="/">KOR</Link>
            <div className="line" />
            <Link to="/">ENG</Link>
          </div>
        </div>
        {/* mobile */}
        <div className={`header-wrap-mobile ${isClicked ? "on" : ""}`}>
          <Link
            className={`header-wrap-mobile-logo ${isClicked ? "on" : ""}`}
            to="/"
          />
          <div className="header-wrap-mobile-btns">
            <button className="header-wrap-mobile-btns-appDown" type="button">
              앱 다운로드
            </button>
            {/* 햄버거 메뉴 */}
            <button
              className="header-wrap-mobile-btns-hamburger"
              type="button"
              onClick={() => {
                setIsClicked((e) => !e);
              }}
            >
              {!isClicked ? (
                <div className="hamburger-before" />
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
    </div>
  );
}

Header.propTypes = {
  mode: PropTypes.string.isRequired,
};
