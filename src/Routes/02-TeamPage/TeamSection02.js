import React from "react";
import "./TeamSection02.scss";

export default function TeamSection02() {
  return (
    <section className="teamSection02">
      <div className="teamSection02-wrap">
        <div className="teamSection02-wrap-bg" />
        {/* <div className="teamSection02-wrap-filter" /> */}
        <div className="teamSection02-wrap-txt">
          <p>Team Mission</p>
          <p>
            토스팀은 바꾸고 싶은 세상의 모습이 있고 생각만 해도 가슴 뛰는 목표가
            있는 조직입니다. <br />
            어렵고, 불편하고, 멀게 느껴지는 금융이 아닌 누구에게나 쉽고 상식적인
            금융을 만드는 것이 토스팀의 존재 이유입니다.
          </p>
        </div>
      </div>
    </section>
  );
}
