import React from "react";
import "./SupportSection03.scss";

export default function SupportSection03() {
  return (
    <div className="supportSection03">
      <div className="supportSection03-wrap">
        <p className="supportSection03-wrap-tit">무엇을 도와드릴까요?</p>
        <form className="supportSection03-wrap-search">
          <img
            src={`${process.env.PUBLIC_URL}/images/search.svg`}
            alt="돋보기 아이콘"
          />
          <input
            type="text"
            placeholder="이용법, 혜택, 불편함 등 무엇이든 검색해보세요."
          />
        </form>
        <ul className="supportSection03-wrap-list">
          <li>계좌가 물음표(?)로 보여요.</li>
          <li>토스프라임이 뭔가요?</li>
          <li>오픈뱅킹 자동이체 등록 문자를 받았어요.</li>
        </ul>
        <p className="supportSection03-wrap-bot">자주 묻는 질문 전체 보기</p>
      </div>
    </div>
  );
}
