import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <header>
      <div className="header">
        <div className="header-logo">
          <Link to="/">
            <img src="/images/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="header-menu">
          <Link to="/team">
            <span>회사 소개</span>
          </Link>
          <Link to="/support">
            <span>고객센터</span>
          </Link>
          <Link to="/support/faq">
            <span>자주 묻는 질문</span>
          </Link>
          <Link to="/tosscert">
            <span>토스인증서</span>
          </Link>
          <Link to="/career">
            <span>채용</span>
          </Link>
        </div>
        <div className="header-translate">
          <Link to="/">
            <span>KOR</span>
          </Link>
          <Link to="/">
            <span>ENG</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
