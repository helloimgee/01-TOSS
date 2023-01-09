import React from "react";
import { Link } from "react-router-dom";
import "./SearchHeader.scss";

export default function SearchHeader() {
  return (
    <div className="searchHeader">
      <ul>
        <li>
          <Link to="/support/faq?category=top10">
            <span>질문 Top</span>
          </Link>
        </li>
        <li>
          <Link to="/support/faq?category=send">
            <span>송금</span>
          </Link>
        </li>
        <li>
          <Link to="/support/faq?category=account">
            <span>계좌</span>
          </Link>
        </li>
        <li>
          <Link to="/support/faq?category=card">
            <span>카드</span>
          </Link>
        </li>
        <li>
          <Link to="/support/faq?category=pay">
            <span>결제</span>
          </Link>
        </li>
        <li>
          <Link to="/support/faq?category=invest">
            <span>투자</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
