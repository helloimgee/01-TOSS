import React from "react";
import "./SupportSection02.scss";

export default function SupportSection02() {
  return (
    <div className="supportSection02">
      <div className="supportSection02-wrap">
        <p>
          토스 안심보상제를 <br />
          알려드릴게요
        </p>
        <img
          className="supportSection02-wrap-img"
          src={`${process.env.PUBLIC_URL}/images/support/sec04-img01.png`}
          alt="고객센터 이미지"
        />
        <p>
          사칭, 보이스피싱 또는 중고거래 피해를 입으셨나요? <br />
          너무 걱정하지 마세요. 토스 안심보상제가 있어요.
        </p>
        <button type="button">더 알아보기</button>
      </div>
    </div>
  );
}
