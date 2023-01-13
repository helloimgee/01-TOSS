/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function HeaderWhite() {
  const [isWidth, setIsWidth] = useState(0);
  const openMenu = () => {
    setIsWidth(250);
    console.log(isWidth);
  };
  const closeMenu = () => {
    setIsWidth(0);
  };

  return (
    <header>
      <div className="header">
        <div className="header-wrap">
          <div className="header-logo">
            <Link to="/">
              <img src="/images/logo.png" alt="logo2" />
            </Link>
          </div>
          <div className="header-menu">
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
            {/* 햄버거 */}
            <div className="hamburger">
              <img
                className="hamburger-open"
                src="/images/hamburger-black.svg"
                alt="햄버거 블랙"
                onClick={openMenu}
                role="presentation"
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
                <img
                  className="hamburger-close"
                  src="/images/hamburger-x.svg"
                  alt="햄버거 블랙"
                  onClick={closeMenu}
                  role="presentation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
