import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Hamburger() {
  const [isWidth, setisWidth] = useState(0);
  const openMenu = () => {
    setisWidth(250);
    console.log(isWidth);
  };
  return (
    <div className="hamburger">
      <div className="hamburger-menu">
        <button type="button" onClick={openMenu}>
          X
        </button>
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
      </div>
    </div>
  );
}
