/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useRef, useState } from "react";
import "./Home.scss";
import Section02 from "./Section02";
import Section03 from "./Section03";
import Section04 from "./Section04";
import Section05 from "./Section05";
import Section06 from "./Section06";
import Section07 from "./Section07";
import Section08 from "./Section08";
import Section09 from "./Section09";
import Section10 from "./Section10";

export default function Home() {
  // 1. 렌더링 시 애니메이션
  const [Load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 1000);
    return () => setLoad(false);
  }, []);

  /* 2. 버튼 클릭 시 -> 해당 컴포넌트로 스크롤 이동 
  scrollIntoView(): destinationRef.current 요소가 화면에 보이게 스크롤 */
  const destinationRef = useRef(null);

  const arrowScroll = () => {
    destinationRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* 3. 스크롤 할 때마다 스크롤 위치 계산 */
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(
      window.pageYOffset ||
        window.scrollY ||
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
    <div className="home">
      {/* main */}
      <main className="home-main">
        <div className={`home-main-op ${Load ? "on" : ""}`}>
          <div className="home-main-op-top">
            <div className="home-main-op-top-tit">
              <span>금융의 모든 것</span>
              <span>토스에서 쉽고 간편하게</span>
            </div>
            <div className="home-main-op-top-btn">
              <a
                href="https://itunes.apple.com/kr/app/%ED%86%A0%EC%8A%A4/id839333328?mt=8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/home-main-appstore.png`}
                  alt="앱스토어"
                />
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=viva.republica.toss"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/home-main-googleplay.png`}
                  alt="구글플레이"
                />
                Google Play
              </a>
            </div>
          </div>
          <button
            className="home-main-op-arrow"
            type="button"
            onClick={arrowScroll}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/icn-arrow.svg`}
              alt="화살표"
            />
          </button>
        </div>
      </main>
      <section className="section01" ref={destinationRef}>
        <p>
          내 모든 금융 내역을 한눈에 조회하고 한 곳에서 관리하세요. <br />
          이제껏 경험 못 했던 쉽고 편리한 금융 서비스,
          <br /> 토스와 함께라면 당신의 일상이 새로워질 거예요.
        </p>
      </section>
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 scrollPosition={scrollPosition} />
      <Section07 scrollPosition={scrollPosition} />
      <Section08 scrollPosition={scrollPosition} />
      <Section09 />
      <Section10 />
    </div>
  );
}
