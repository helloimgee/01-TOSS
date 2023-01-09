import React from "react";
import DivisionLine from "../../components/DivisionLine";
import "./SupportPage.scss";

export default function SupportPage() {
  return (
    <div className="support">
      <div className="support-main">
        <div className="support-main-cont">
          <p className="supprot-main-cont-tit" color="#333d4b">
            토스 고객센터에서 <br />
            24시간 상담받을 수 있어요!
          </p>
          <div className="support-main-cont-phon">
            <div className="support-main-cont-phon phon01">
              <span>피해 사기 상담</span>
              <span>1661-4905</span>
            </div>
            <DivisionLine size="large" color="#333d4b1A" />
            <div className="support-main-cont-phon phon02">
              <span>일반 상담</span>
              <span>1599-4905</span>
            </div>
          </div>
          <div className="support-main-cont-state">
            <span>현재 상담 대기</span>
            <span>보통</span>
          </div>
          <div className="support-main-cont-img">
            <img src="/images/supportPage-main.png" alt="cscenter" />
          </div>
        </div>
      </div>
    </div>
  );
}