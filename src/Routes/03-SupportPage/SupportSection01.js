import React from "react";
import "./SupportSection01.scss";

export default function SupportSection01() {
  return (
    <div className="supportSection01">
      <div className="supportSection01-wrap">
        <div className="supportSection01-wrap-tit">
          <span>금전 피해를 입으셨나요?</span>
          <p>
            혹시라도 토스에서 금전 피해를 입으셨다면 신고해주세요. 앞으로
            고객님이 안심하고 토스를 쓰실 수 있도록, 토스의 잘못이 아니라도 피해
            금액을 보상해드려요.
          </p>
        </div>

        <ul className="supportSection01-wrap-list">
          <li className="supportSection01-wrap-list-item item01">
            <img
              src={`${process.env.PUBLIC_URL}/images/support/sec01-icn01.svg`}
              alt="자물쇠 아이콘"
            />
            토스 계정을 잠시 잠그고 싶어요
          </li>
          <li className="supportSection01-wrap-list-item item02">
            <img
              src={`${process.env.PUBLIC_URL}/images/support/sec01-icn02.svg`}
              alt="사람 아이콘"
            />
            명의 도용 신고
          </li>
          <li className="supportSection01-wrap-list-item item03">
            <img
              src={`${process.env.PUBLIC_URL}/images/support/sec01-icn03.svg`}
              alt="경고 아이콘"
            />
            보이스피싱 신고
          </li>
          <li className="supportSection01-wrap-list-item item04">
            <img
              src={`${process.env.PUBLIC_URL}/images/support/sec01-icn04.svg`}
              alt="분실 아이콘"
            />
            분실/도난/탈취 신고
          </li>
          <li className="supportSection01-wrap-list-item item05">
            <img
              src={`${process.env.PUBLIC_URL}/images/support/sec01-icn05.svg`}
              alt="장바구니 아이콘"
            />
            중고거래 사기 신고
          </li>
        </ul>
      </div>
    </div>
  );
}
