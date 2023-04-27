import React, { useRef } from "react";
import Title from "../../components/Title";
import useVisible from "../../customhook/useVisible";
import "./Section03.scss";

export default function Section03() {
  const titRef = useRef(null);
  const listRef = useRef(null);

  const titVisible = useVisible(titRef);
  const listVisible = useVisible(listRef);

  return (
    <div className="section03">
      <div className="section03-wrap">
        <Title className={`${titVisible ? "on" : ""}`} ref={titRef}>
          <span>송금</span>
          <p>
            간편하고 안전하게 <br /> 수수료는 평생 무료로, <br />
            이런 송금 써보셨나요?
          </p>
        </Title>
        <div
          className={`section03-wrap-cont ${listVisible ? "on" : ""}`}
          ref={listRef}
        >
          {/* 리스트 1 */}
          <div className="section03-wrap-cont-li">
            <div className="section03-wrap-cont-li-txt">
              <div className="section03-wrap-cont-li-txt-align">
                <img
                  src={`${process.env.PUBLIC_URL}/images/home/section03-ico01.svg`}
                  alt="송금이미지"
                />
                <span>평생 무료 송금</span>
                <p>
                  토스 평생 무료송금으로 <br />
                  모두의 금융에 자유를
                </p>
                <p>
                  누구에게 보내든 은행 상관 없이, <br />
                  이제 토스와 함께 수수료 걱정 없이 송금하세요.
                </p>
              </div>
            </div>
            <div className="section03-wrap-cont-li-img">
              <img
                src={`${process.env.PUBLIC_URL}/images/home/section03-img01.png`}
                alt="송금 이미지"
              />
            </div>
          </div>
          {/* 리스트 2 */}
          <div className="section03-wrap-cont-li reverse">
            <div className="section03-wrap-cont-li-img">
              <img
                src={`${process.env.PUBLIC_URL}/images/home/section03-img02.png`}
                alt="송금 이미지"
              />
            </div>
            <div className="section03-wrap-cont-li-txt">
              <div className="section03-wrap-cont-li-txt-align">
                <img
                  src={`${process.env.PUBLIC_URL}/images/home/section03-ico02.svg`}
                  alt="송금이미지"
                />
                <span>평생 무료 송금</span>
                <p>
                  토스 평생 무료송금으로 <br />
                  모두의 금융에 자유를
                </p>
                <p>
                  누구에게 보내든 은행 상관 없이, <br />
                  이제 토스와 함께 수수료 걱정 없이 송금하세요.
                </p>
              </div>
            </div>
          </div>
          {/* 리스트 3 */}
          <div className="section03-wrap-cont-li">
            <div className="section03-wrap-cont-li-txt">
              <div className="section03-wrap-cont-li-txt-align">
                <img
                  src={`${process.env.PUBLIC_URL}/images/home/section03-ico03.svg`}
                  alt="송금이미지"
                />
                <span>평생 무료 송금</span>
                <p>
                  토스 평생 무료송금으로 <br />
                  모두의 금융에 자유를
                </p>
                <p>
                  누구에게 보내든 은행 상관 없이, <br />
                  이제 토스와 함께 수수료 걱정 없이 송금하세요.
                </p>
              </div>
            </div>
            <div className="section03-wrap-cont-li-img">
              <img
                src={`${process.env.PUBLIC_URL}/images/home/section03-img03.png`}
                alt="송금 이미지"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
