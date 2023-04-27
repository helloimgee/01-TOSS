import React, { useRef } from "react";
import Title from "../../components/Title";
import useVisible from "../../customhook/useVisible";
import "./Section04.scss";

export default function Section04() {
  const titRef = useRef(null);
  const imgRef = useRef(null);
  const botRef = useRef(null);

  const titVisible = useVisible(titRef);
  const imgVisible = useVisible(imgRef);
  const botVisible = useVisible(botRef);

  return (
    <div className="section04">
      <div className="section04-wrap">
        <div className="section04-wrap-left">
          <Title className={`${titVisible ? "on" : ""}`} ref={titRef}>
            <span>대출</span>
            <p>
              여러 은행의 조건을 <br />
              1분 만에 <br />
              확인해보세요
            </p>
          </Title>
        </div>
        <div
          className={`section04-wrap-txt ${botVisible ? "on" : ""}`}
          ref={botRef}
        >
          <p className="section04-wrap-txt-top">
            <span>한도는 높게,</span>
            <span>
              금리는 <b>낮게,</b>
            </span>
            <span>
              부담은 <i>적게</i>
            </span>
          </p>
          <p className="section04-wrap-txt-bot">
            앉은 자리에서 여러 은행의 한도와 금리를 비교하고 <br />
            내게 꼭 맞는 대출을 찾아보세요. <br /> 신용, 비상금, 대환,
            주택담보대출 모두 가능해요.
          </p>
        </div>
        <div
          className={`section04-wrap-right ${imgVisible ? "on" : ""}`}
          ref={imgRef}
        >
          <div className="section04-wrap-right-content">
            <img
              src={`${process.env.PUBLIC_URL}/images/home/section04-img01.png`}
              alt="대출 이미지1"
            />
          </div>
          <div className="section04-wrap-right-content">
            <img
              src={`${process.env.PUBLIC_URL}/images/home/section04-img02.png`}
              alt="대출 이미지2"
            />
          </div>
          <div className="section04-wrap-right-content">
            <img
              src={`${process.env.PUBLIC_URL}/images/home/section04-img01.png`}
              alt="대출 이미지1"
            />
          </div>
          <div className="section04-wrap-right-content">
            <img
              src={`${process.env.PUBLIC_URL}/images/home/section04-img03.png`}
              alt="대출 이미지3"
            />
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/common/iphone-shadow.png`}
            alt="그림자 이미지"
          />
        </div>
      </div>
    </div>
  );
}
