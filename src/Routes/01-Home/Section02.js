import React from "react";
import "./Section02.scss";

export default function Section02() {
  return (
    <section className="home-section02">
      <div className="home-section02-wrap">
        <div className="home-section02-wrap-inner">
          <div className="home-section02-wrap-inner-tit">
            <p>홈 · 소비</p>
            <p>
              내 돈 관리, <br />
              지출부터 일정까지 <br /> 똑똑하게
            </p>
          </div>
          <div className="home-section02-wrap-inner-img01 frame">
            <img
              className="content"
              src={`${process.env.PUBLIC_URL}/images/home/section02_01.png`}
              alt="계좌이미지"
            />
            <img
              className="shadow"
              src={`${process.env.PUBLIC_URL}/images/home/iphone_shadow.png`}
              alt="그림자"
            />
          </div>
          <div className="home-section02-wrap-inner-img02 frame">
            <img
              className="content"
              src={`${process.env.PUBLIC_URL}/images/home/section02_02.png`}
              alt="소비이미지"
            />
            <img
              className="shadow"
              src={`${process.env.PUBLIC_URL}/images/home/iphone_shadow.png`}
              alt="그림자"
            />
          </div>
          <p className="home-section02-wrap-inner-description">
            토스에 계좌와 카드를 연결해 보세요.
            <br />
            계좌 잔액, 대출·투자 내역은 기본,
            <br />
            일자별 소비와 수입까지 한 번에 볼 수 있어요.
          </p>
        </div>
      </div>
    </section>
  );
}
