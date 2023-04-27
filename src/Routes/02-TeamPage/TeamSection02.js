/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react";
import "./TeamSection02.scss";

export default function TeamSection02() {
  const [scrollTop, setScrollTop] = useState(0);

  const updateScroll = () => {
    setScrollTop(
      window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <section className="teamSection02">
      <div className="teamSection02">
        {scrollTop > 2635 && scrollTop < 4570 ? (
          <>
            <div className="teamSection02-bg" />
            <div
              className="teamSection02-filter"
              style={{
                opacity: `${
                  scrollTop > 2635 && scrollTop < 3587
                    ? 1 - (scrollTop - 2635) * 0.0010504202
                    : scrollTop > 3588 && scrollTop < 4570
                    ? 0 + (scrollTop - 3588) * 0.0010504202
                    : 1
                }`,
              }}
              /*
              ~2635: 1
              2635~3587: 1 ~ 0 -> 1 / 952
              3587~4570: 0 ~ 1 -> 1 / 983
              */
            />
          </>
        ) : (
          ""
        )}

        <div className="teamSection02-txt">
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
