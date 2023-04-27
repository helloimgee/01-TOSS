import React from "react";
import "./TossCertSection02.scss";

export default function tossCertSection02() {
  return (
    <section className="tossCertSection02">
      <div className="tossCertSection02-list">
        <div className="tossCertSection02-list-txt">
          <p>
            이제 공동인증서 대신 <br />
            토스인증서로
          </p>
          <p>
            토스인증서는 ‘본인확인기관‘과 ‘전자서명인증사업자’의 인증 수단으로
            공동인증서를 대체할 수 있어요.
          </p>
        </div>
        <div className="tossCertSection02-list-img">
          <img
            src={`${process.env.PUBLIC_URL}/images/tosscert/section02-img01.png`}
            alt="토스인증서"
          />
        </div>
      </div>
      <div className="tossCertSection02-list">
        <div className="tossCertSection02-list-txt">
          <p>
            휴대폰 본인 확인도 <br /> 3초만에 끝
          </p>
          <p>
            인증 문자를 기다릴 필요없이 <br />
            토스 앱 하나로 간편하게 인증할 수 있어요.
          </p>
        </div>
        <div className="tossCertSection02-list-img">
          <img
            src={`${process.env.PUBLIC_URL}/images/tosscert/section02-img02.png`}
            alt="토스인증서"
          />
        </div>
      </div>
      <div className="tossCertSection02-list">
        <div className="tossCertSection02-list-txt">
          <p>
            최고의 기술력, <br /> 신뢰할 수 있는 보안
          </p>
          <p>
            국제 보안인증 PCI-DSS 최고등급, ISO 27001, <br />
            개인정보보호 관리체계 인증 ISMS-P와 ISO 27701을 획득, <br />
            그리고 2018 정보보호대상을 수상했어요.
          </p>
        </div>
        <div className="tossCertSection02-list-img">
          <img
            src={`${process.env.PUBLIC_URL}/images/tosscert/section02-img03.png`}
            alt="토스인증서"
          />
        </div>
      </div>
    </section>
  );
}
