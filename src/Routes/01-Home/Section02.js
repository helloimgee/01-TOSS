import React, { useRef } from "react";
import "./Section02.scss";
import useVisible from "../../customhook/useVisible";
import Title from "../../components/Title";

export default function Section02() {
  const section02Ref = useRef(null);
  const titRef = useRef(null);

  const isVisible = useVisible(section02Ref);
  const titVisible = useVisible(titRef);

  return (
    <section
      className={`section02 ${isVisible ? "on" : ""}`}
      ref={section02Ref}
    >
      <div className="section02-wrap">
        <div className="section02-wrap-inner">
          <Title className={`${titVisible ? "on" : ""}`} ref={titRef}>
            <span>홈 · 소비</span>
            <p>
              내 돈 관리, <br />
              지출부터 일정까지 <br /> 똑똑하게
            </p>
          </Title>
          {/* 이미지 1 */}
          <div className="section02-wrap-inner-images">
            <div className="section02-wrap-inner-images-img01 frame">
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
            {/* 이미지 2 */}
            <div className="section02-wrap-inner-images-img02 frame">
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
          </div>
          {/* 아래 글씨 */}
          <p className="section02-wrap-inner-description">
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
