/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import "./TossCertSection03.scss";

export default function TossCertSection03() {
  return (
    <div className="tossCertSection03">
      <div className="tossCertSection03-txt">
        <span>인증도</span>
        <span>토스답게</span>
        <p>
          인증 체험하기 <b>〉</b>
        </p>
      </div>
      <div className="tossCertSection03-img">
        <div className="tossCertSection03-img-content">
          <video autoPlay playsInline loop muted>
            <source
              src={`${process.env.PUBLIC_URL}/images/tosscert/section03-video.mp4`}
              type="video/mp4"
            />
          </video>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/images/common/iphone-shadow.png`}
          alt="휴대폰 그림자 이미지"
        />
      </div>
    </div>
  );
}
