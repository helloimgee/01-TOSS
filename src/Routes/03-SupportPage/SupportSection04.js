import React from "react";
import "./SupportSection04.scss";

export default function SupportSection04() {
  return (
    <div className="supportSection04">
      <div className="supportSection04-wrap">
        <p>
          문제가 아직 해결되지 않았다면 <br />
          언제든 연락해주세요
        </p>
        <p>24시간 토스 고객센터 1599-4905</p>
        <img
          className="supportSection04-wrap-img"
          src={`${process.env.PUBLIC_URL}/images/support/sec04-img02.png`}
          alt="고객센터 이미지"
        />
      </div>
    </div>
  );
}
