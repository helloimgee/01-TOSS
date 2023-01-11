/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react";
import { Link, useResolvedPath } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);
  console.log(scrollPosition);
  const { pathname } = useResolvedPath();
  return (
    <header
      className={pathname !== "/career" && scrollPosition > 30 ? "on" : ""}
    >
      <div className="header">
        <div className="header-wrap">
          <div className="header-logo">
            <Link to="/">
              {pathname === "/team" ? (
                <img src="/images/logo-white.svg" alt="logo2" />
              ) : pathname === "/tosscert" ? (
                <img src="/images/logo-white.svg" alt="logo2" />
              ) : pathname === "/career" ? (
                <img src="/images/logo-white.svg" alt="logo2" />
              ) : (
                <img src="/images/logo.png" alt="logo" />
              )}
            </Link>
          </div>
          <div
            className={`header-menu ${
              pathname === "/team" ||
              pathname === "/tosscert" ||
              pathname === "/career"
                ? "on"
                : ""
            }`}
          >
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
          <div className="header-menu-mobile">
            <button type="button">앱 다운로드</button>
            <div className="hamburger">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" fill="white" fillOpacity="0.01" />
                <path
                  d="M7.94977 11.9498H39.9498"
                  stroke={pathname === "/team" ? "#fff" : "#000000"}
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.94977 23.9498H39.9498"
                  stroke={pathname === "/team" ? "#fff" : "#000000"}
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.94977 35.9498H39.9498"
                  stroke="#000000"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
