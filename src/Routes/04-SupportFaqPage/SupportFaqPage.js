/* eslint-disable import/no-unresolved */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Search from "../../components/Search";
import SearchHeader from "./routes/SearchHeader";
import faqList from "../../assets/faqList";
import "./SupportFaqPage.scss";

export default function SupportFaqPage() {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  // console.log(query.get("category"));
  // console.log(query);
  // console.log(faqList[query.get("category")]);

  const index = faqList[query.get("category")] || [];
  // console.log(index); // top10, send, account, card, pay, invest ...;

  return (
    <div className="supportFaqPage">
      <div className="supportFaqPage main">
        <h1>자주 묻는 질문</h1>
        <Search />
        <div className="supportFagPage main-faq">
          <SearchHeader />
          <div className="supportFaqPage main-faq-list">
            <ul>
              {index.map((list) => {
                // searchHeader 클릭해서 주소창 category=top10으로 들어왔으면
                // -> top10 객체의 내용들 보여줘라
                return (
                  <li key={list.id}>
                    <Link to="/">{list.q1}</Link>
                    <Link to="/">{list.q2}</Link>
                    <Link to="/">{list.q3}</Link>
                    <Link to="/">{list.q4}</Link>
                    <Link to="/">{list.q5}</Link>
                    <Link to="/">{list.q6}</Link>
                    <Link to="/">{list.q7}</Link>
                    <Link to="/">{list.q8}</Link>
                    <Link to="/">{list.q9}</Link>
                    <Link to="/">{list.q10}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
