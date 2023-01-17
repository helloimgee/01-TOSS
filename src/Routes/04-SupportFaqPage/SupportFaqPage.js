/* eslint-disable import/no-unresolved */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Search from "../../components/Search";
import SearchHeader from "./routes/SearchHeader";
import faqList from "../../assets/faqList";
import "./SupportFaqPage.scss";

export default function SupportFaqPage() {
  /* 
  1-1. useQuery 커스텀 메서드 생성
  = URLSearchParams(Query String) 객체 생성하는 함수
  = useLocation().search = Query String
  (1) useLocation(): 현재 URL의 정보를 담은 객체 반환{pathname, search, hash, state, key 속성} 
  (2) useLocation().search : Query String값
  */
  const makeSearchParams = () => new URLSearchParams(useLocation().search);

  /* 1-2. useQuery() 커스텀 메서드를 -> 변수에 저장 */
  const madeSeachParams = makeSearchParams();

  /* 1-3. faqList 객체에서 [속성]의 값(배열) 가져오기
  (1) useQuery() 메서드를 실행해 만든 객체에서 get() 메서드 실행 
  = Query String에서 key값이 "categroy"일 때 value값 구하기 혹은 빈배열
  */
  const index = faqList[madeSeachParams.get("category")] || [];
  // console.log(index) = top10, send, account, card, pay, invest ...;

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
