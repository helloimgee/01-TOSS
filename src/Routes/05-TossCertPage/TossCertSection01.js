import React from "react";
import InfiniteSlide from "../../components/InfiniteSlide";
import "./TossCertSection01.scss";

export default function TossCertSection01() {
  return (
    <section className="TossCertSection01">
      <div className="TossCertSection01-slide">
        <div className="TossCertSection01-slide-tit">
          <span>함께 하는 이용기관</span>
          <span>400+</span>
          <br />
          <span>다양한 서비스와 공공 분야에서</span>
        </div>
        <InfiniteSlide />
      </div>
      <div className="TossCertSection01-bot">
        <ul>
          <li>
            <p>본인확인</p>
            <p>
              회원가입, 회원 계정조회에서 쓸 수 있도록 CI, DI 를 제공해 드려요.
            </p>
          </li>
          <li>
            <p>간편인증</p>
            <p>
              로그인, 가입조회 등 CI 를 통해 간단한 고객 확인에 쓸 수 있어요.
            </p>
          </li>
          <li>
            <p>전자서명</p>
            <p>
              계좌개설, 보험가입, 대출신청 등 각종 전자문서에 서명할 수 있어요.
            </p>
          </li>
          <li>
            <p>마이데이터 통합인증</p>
            <p>마이데이터 서비스를 위한 통합인증 서비스를 제공해 드려요.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
