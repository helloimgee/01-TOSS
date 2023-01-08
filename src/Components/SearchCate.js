import React from "react";
import { Link } from "react-router-dom";

export default function SearchCate() {
  return (
    <div className="header">
      <ul>
        <li>
          <Link to="/">
            <span>질문 Top</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>송금</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>계좌</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>카드</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>결제</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>투자</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
