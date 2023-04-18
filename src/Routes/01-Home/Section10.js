/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./Section10.scss";

export default function Section10() {
  return (
    <section className="section10">
      <img
        className="section10-img"
        src={`${process.env.PUBLIC_URL}/images/home/section10_01.jpeg`}
        alt="태블릿이미지"
      />
      <div className="section10-inner">
        <div className="section10-inner-tit">
          <p>사업도 토스와 함께</p>
          <p>
            사업을 시작하셨나요? <br />
            사업의 시작부터 관리까지 <br />
            이제 토스와 함께 하세요.
          </p>
        </div>
        <div className="section10-inner-sub">
          <div className="section10-inner-sub-box">
            <p>토스결제</p>
            <p>
              합리적인 수수료, 간편한 결제 경험으로 비용은 절감하고 매출은
              늘리세요.
            </p>
            <Link>가맹점 문의하기</Link>
          </div>
          <div className="section10-inner-sub-box">
            <p>내 매출 장부</p>
            <p>
              내 매출 장부 따로 관리할 필요 없어요. <br />총 매출, 총 입금, 총
              지출을 보기 쉽게 <br /> 알려드려요.
            </p>
            <Link>가맹점 문의하기</Link>
          </div>
          <div className="section10-inner-sub-box">
            <p>토스페이먼츠</p>
            <p>
              시작하기 어려웠던 온라인 비즈니스,
              <br /> 온라인 결제 토스페이먼츠와 <br /> 함께 해보세요.
            </p>
            <Link>홈페이지 바로가기</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
