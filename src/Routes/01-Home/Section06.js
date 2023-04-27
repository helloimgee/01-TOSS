/* eslint-disable no-nested-ternary */
import React, { useRef } from "react";
import PropTypes from "prop-types";
import Title from "../../components/Title";
import useVisible from "../../customhook/useVisible";
import "./Section06.scss";

export default function Section06({ scrollPosition }) {
  const titRef = useRef(null);
  const titVisible = useVisible(titRef);

  return (
    <div className="section06">
      <div className="section06-wrap">
        <Title className={`${titVisible ? "on" : ""}`} ref={titRef}>
          <span>투자</span>
          <p>
            투자, <br />
            모두가 할 수 있도록
          </p>
        </Title>
        <div className="section06-wrap-subtitle">
          <p>
            이해하기 쉬운 용어, 설명이 필요 없는 직관적인 화면 구성, <br />
            송금처럼 쉬운 구매 경험 그리고 <br />
            투자 판단에 도움을 주는 콘텐츠까지
          </p>
        </div>
        <div className="section06-wrap-img">
          <div className="section06-wrap-img-phone">
            <img
              className="section06-wrap-img-phone-cont"
              src={`${process.env.PUBLIC_URL}/images/home/section06-img-cont.png`}
              alt="화면 이미지"
            />
            <img
              className="section06-wrap-img-phone-shadow"
              src={`${process.env.PUBLIC_URL}/images/common/iphone-shadow.png`}
              alt="그림자 이미지"
            />
          </div>

          <div className="section06-wrap-img-txt">
            <p>
              이해하기 쉬운 용어 <br />
              설명이 필요 없는 <br />
              직관적인 화면 구성
            </p>
            <p>
              송금처럼 쉬운 구매 경험 <br />
              그리고 투자 판단에 <br />
              도움을 주는 콘텐츠까지
            </p>
          </div>

          {/* pc */}
          <div className="section06-wrap-img-list-pc">
            <img
              src={`${process.env.PUBLIC_URL}/images/home/section06-img01.png`}
              alt="그림자 이미지"
              style={{
                opacity: `${
                  scrollPosition < 9248
                    ? 0
                    : scrollPosition >= 9248 && scrollPosition < 9355
                    ? (scrollPosition - 9248) * 0.0093457944
                    : 1
                }`,
              }}
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/home/section06-img02.png`}
              alt="그림자 이미지"
              style={{
                opacity: `${
                  scrollPosition < 9141
                    ? 0
                    : scrollPosition >= 9141 && scrollPosition < 9248
                    ? (scrollPosition - 9141) * 0.0093457944
                    : 1
                }`,
              }}
            />
            {/* 9248 - 9141 = 107 */}
            <img
              src={`${process.env.PUBLIC_URL}/images/home/section06-img03.png`}
              alt="그림자 이미지"
              style={{
                opacity: `${
                  scrollPosition < 9034
                    ? 0
                    : scrollPosition >= 9034 && scrollPosition < 9141
                    ? (scrollPosition - 9034) * 0.0093457944
                    : 1
                }`,
              }}
            />
            {/* 9141 - 9034 = 107 */}
            <img
              src={`${process.env.PUBLIC_URL}/images/home/section06-img04.png`}
              alt="그림자 이미지"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/home/section06-img05.png`}
              alt="그림자 이미지"
              style={{
                opacity: `${
                  scrollPosition < 9034
                    ? 0
                    : scrollPosition >= 9034 && scrollPosition < 9141
                    ? (scrollPosition - 9034) * 0.0093457944
                    : 1
                }`,
              }}
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/home/section06-img06.png`}
              alt="그림자 이미지"
              style={{
                opacity: `${
                  scrollPosition < 9141
                    ? 0
                    : scrollPosition >= 9141 && scrollPosition < 9248
                    ? (scrollPosition - 9141) * 0.0093457944
                    : 1
                }`,
              }}
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/home/section06-img07.png`}
              alt="그림자 이미지"
              style={{
                opacity: `${
                  scrollPosition < 9248
                    ? 0
                    : scrollPosition >= 9248 && scrollPosition < 9355
                    ? (scrollPosition - 9248) * 0.0093457944
                    : 1
                }`,
              }}
            />
          </div>
          {/* mobile */}
          <div className="section06-wrap-img-list-mobile">
            <img
              src={`${process.env.PUBLIC_URL}/images/home/section06-img01.png`}
              alt="새로운 계약 소식"
              style={{
                opacity: `${
                  scrollPosition < 6548
                    ? 0
                    : scrollPosition >= 6548 && scrollPosition < 6609
                    ? (scrollPosition - 6548) * 0.0163934426
                    : 1
                }`,
              }}
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/home/section06-img02.png`}
              alt="매출성장률 Top100"
              style={{
                opacity: `${
                  scrollPosition < 6487
                    ? 0
                    : scrollPosition >= 6487 && scrollPosition < 6548
                    ? (scrollPosition - 6487) * 0.0163934426
                    : 1
                }`,
              }}
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/home/section06-img03.png`}
              alt="관심 Top100"
              style={{
                opacity: `${
                  scrollPosition < 6426
                    ? 0
                    : scrollPosition >= 6426 && scrollPosition < 6487
                    ? (scrollPosition - 6426) * 0.0163934426
                    : 1
                }`,
              }}
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/home/section06-img04.png`}
              alt="거래량 Top100"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/home/section06-img05.png`}
              alt="구매 Top100"
              style={{
                opacity: `${
                  scrollPosition < 6426
                    ? 0
                    : scrollPosition >= 6426 && scrollPosition < 6487
                    ? (scrollPosition - 6426) * 0.0163934426
                    : 1
                }`,
              }}
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/home/section06-img06.png`}
              alt="영업이익률 Top100"
              style={{
                opacity: `${
                  scrollPosition < 6487
                    ? 0
                    : scrollPosition >= 6487 && scrollPosition < 6548
                    ? (scrollPosition - 6487) * 0.0163934426
                    : 1
                }`,
              }}
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/home/section06-img07.png`}
              alt="수익률 Top100"
              style={{
                opacity: `${
                  scrollPosition < 6548
                    ? 0
                    : scrollPosition >= 6548 && scrollPosition < 6609
                    ? (scrollPosition - 6548) * 0.0163934426
                    : 1
                }`,
              }}
            />
          </div>
        </div>
        <div className="section06-wrap-bot">
          <p>
            별도 앱 설치 없이 토스에서 바로, <br />
            토스증권으로 <br className="br02" /> 나만의 투자를 시작해 보세요.
          </p>
        </div>
      </div>
    </div>
  );
}

Section06.propTypes = {
  scrollPosition: PropTypes.number.isRequired,
};
