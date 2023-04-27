import React from "react";
import SupportSection01 from "./SupportSection01";
import DivisionLine from "../../components/DivisionLine";
import SupportSection03 from "./SupportSection03";
import SupportSection04 from "./SupportSection04";
import "./SupportPage.scss";
import SupportSection02 from "./SupportSection02";

export default function SupportPage() {
  return (
    <div className="support">
      <div className="support-main">
        <div className="support-main-cont">
          <p className="support-main-cont-tit" color="#333d4b">
            토스 고객센터에서 <br />
            24시간 상담받을 수 있어요!
          </p>
          <div className="support-main-cont-phon">
            <div className="support-main-cont-phon phon01">
              <span>피해 사기 상담</span>
              <span>1661-4905</span>
            </div>
            <DivisionLine size="100%" color="#333d4b1A" />
            <div className="support-main-cont-phon phon02">
              <span>일반 상담</span>
              <span>1599-4905</span>
            </div>
          </div>
          <div className="support-main-cont-state">
            <span>현재 상담 대기</span>
            <span />
            <span>보통</span>
          </div>
          <div className="support-main-cont-img">
            <img
              src={`${process.env.PUBLIC_URL}/images/supportPage-main.png`}
              alt="cscenter"
            />
          </div>
        </div>
      </div>
      <SupportSection01 />
      <SupportSection02 />
      <SupportSection03 />
      <SupportSection04 />
    </div>
  );
}
