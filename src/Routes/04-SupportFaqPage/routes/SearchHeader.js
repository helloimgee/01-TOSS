import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./SearchHeader.scss";

export default function SearchHeader() {
  const query = useLocation().search;
  console.log(query);

  return (
    <div className="searchHeader">
      <ul>
        <li>
          <Link
            className={`${query === "?category=top10" && "on"}`}
            to="/support/faq?category=top10"
          >
            <span>질문 Top</span>
          </Link>
        </li>
        <li>
          <Link
            className={`${query === "?category=send" && "on"}`}
            to="/support/faq?category=send"
          >
            <span>송금</span>
          </Link>
        </li>
        <li>
          <Link
            className={`${query === "?category=account" && "on"}`}
            to="/support/faq?category=account"
          >
            <span>계좌</span>
          </Link>
        </li>
        <li>
          <Link
            className={`${query === "?category=card" && "on"}`}
            to="/support/faq?category=card"
          >
            <span>카드</span>
          </Link>
        </li>
        <li>
          <Link
            className={`${query === "?category=pay" && "on"}`}
            to="/support/faq?category=pay"
          >
            <span>결제</span>
          </Link>
        </li>
        <li>
          <Link
            className={`${query === "?category=invest" && "on"}`}
            to="/support/faq?category=invest"
          >
            <span>주식</span>
          </Link>
        </li>
        <li>
          <Link
            className={`${query === "?category=insurance" && "on"}`}
            to="/support/faq?category=insurance"
          >
            <span>보험</span>
          </Link>
        </li>
        <li>
          <Link
            className={`${query === "?category=inquiry" && "on"}`}
            to="/support/faq?category=inquiry"
          >
            <span>이용 문의</span>
          </Link>
        </li>
        <li>
          <Link
            className={`${query === "?category=reward" && "on"}`}
            to="/support/faq?category=reward"
          >
            <span>안심보상제</span>
          </Link>
        </li>
        <li>
          <Link
            className={`${query === "?category=loan" && "on"}`}
            to="/support/faq?category=loan"
          >
            <span>대출</span>
          </Link>
        </li>
        <li>
          <Link
            className={`${query === "?category=etc" && "on"}`}
            to="/support/faq?category=etc"
          >
            <span>기타</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
