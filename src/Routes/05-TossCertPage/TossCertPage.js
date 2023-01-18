import React from "react";
import "./TossCertPage.scss";

export default function TossCertPage() {
  return (
    <div className="tossCertPage">
      {/* 메인 */}
      <div className="tossCertPage main">
        <div className="tossCertPage main-wrap">
          <div className="tossCertPage main-cont">
            <p>
              인증이 필요한 <br />
              모든 순간, <br />
              토스 인증서
            </p>
            <p>
              간편 로그인부터 공공서비스까지, <br /> 토스인증서 단 하나로 완벽한
              인증 경험을 제공하세요.
            </p>
            <div className="tossCertPage main-cont-button">
              <button type="button">계약 신청하기</button>
              <button type="button">체험하기</button>
            </div>
          </div>
          <div className="tossCertPage main-cont-img">
            <img
              src={`${process.env.PUBLIC_URL}/images/tossCertPage-main.png`}
              alt="tossCertPage"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
