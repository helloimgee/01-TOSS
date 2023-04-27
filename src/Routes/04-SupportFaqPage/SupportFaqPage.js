/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Search from "../../components/Search";
import SearchHeader from "./routes/SearchHeader";
import faqList from "../../assets/faqList";
import "./SupportFaqPage.scss";

export default function SupportFaqPage() {
  /* 
  1-1. URLSearchParams(Query String) 객체 생성하는 함수
  = useLocation().search = Query String
  (1) useLocation(): 현재 URL의 정보를 담은 객체 반환{pathname, search, hash, state, key 속성} 
  (2) useLocation().search : Query String값
  */
  const makeSearchParams = () => new URLSearchParams(useLocation().search);

  const madeSeachParams = makeSearchParams();
  const url = madeSeachParams.get("category");

  // const queryValue = madeSeachParams.get("category");

  /* 1-2. faqList 객체에서 [속성]의 값(배열) 가져오기
  (1) useQuery() 메서드를 실행해 만든 객체에서 get() 메서드 실행 
  = Query String에서 key값이 "categroy"일 때 value값 구하기 혹은 빈배열
  */
  const index = faqList[madeSeachParams.get("category")] || [];
  // faqList[index] = top10, send, account, card, pay, invest ...;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cate, setCate] = useState("질문 Top");

  const handleModal = (e) => {
    setIsModalOpen(!isModalOpen);
    setCate(e.target.innerText);
  };

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!modalRef.current.contains(e.target)) {
        setIsModalOpen(false);
      }
      if (e.target === document.getElementById("menu")) {
        setIsModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [url]);

  return (
    <div className="supportFaqPage">
      <div className="supportFaqPage-wrap">
        <h1>자주 묻는 질문</h1>
        <Search />
        <div className="supportFaqPage-wrap-menu">
          <button type="button" onClick={handleModal}>
            {cate}
            <img
              src={`${process.env.PUBLIC_URL}/images/common/icn-arrow.svg`}
              alt="아래 화살표"
            />
          </button>
          {isModalOpen && (
            <div className="supportFaqPage-wrap-menu-modal">
              <div className="supportFaqPage-wrap-menu-modal-bg" ref={modalRef}>
                <Link to="/support/faq?category=top10" onClick={handleModal}>
                  질문 TOP
                </Link>
                <Link to="/support/faq?category=send" onClick={handleModal}>
                  송금
                </Link>
                <Link to="/support/faq?category=account" onClick={handleModal}>
                  계좌
                </Link>
                <Link to="/support/faq?category=card" onClick={handleModal}>
                  카드
                </Link>
                <Link to="/support/faq?category=pay" onClick={handleModal}>
                  결제
                </Link>
                <Link to="/support/faq?category=invest" onClick={handleModal}>
                  주식
                </Link>
                <Link
                  to="/support/faq?category=insurance"
                  onClick={handleModal}
                >
                  보험
                </Link>
                <Link to="/support/faq?category=inquiry" onClick={handleModal}>
                  이용 문의
                </Link>
                <Link to="/support/faq?category=reward" onClick={handleModal}>
                  안심보상제
                </Link>
                <Link to="/support/faq?category=loan" onClick={handleModal}>
                  대출
                </Link>
                <Link to="/support/faq?category=etc" onClick={handleModal}>
                  기타
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="supportFaqPage-wrap-faq">
          <SearchHeader />
          <div className="supportFaqPage-wrap-faq-list">
            <ul>
              {index.map((list) => {
                // searchHeader 클릭해서 주소창 category=top10으로 들어왔으면
                // -> top10 객체의 내용들 보여줘라
                return (
                  <li key={list.id}>
                    {list.q1 && <button type="button">{list.q1}</button>}
                    {list.q2 && <button type="button">{list.q2}</button>}
                    {list.q3 && <button type="button">{list.q3}</button>}
                    {list.q4 && <button type="button">{list.q4}</button>}
                    {list.q5 && <button type="button">{list.q5}</button>}
                    {list.q6 && <button type="button">{list.q6}</button>}
                    {list.q7 && <button type="button">{list.q7}</button>}
                    {list.q8 && <button type="button">{list.q8}</button>}
                    {list.q9 && <button type="button">{list.q9}</button>}
                    {list.q10 && <button type="button">{list.q10}</button>}
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
