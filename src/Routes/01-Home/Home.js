/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useRef, useState } from "react";
import ServiceList from "@components/ServiceList";
import InfiniteSlide from "@components/InfiniteSlide";
import "./Home.scss";
// import ArrowIcon from "@components/Arrow";

export default function Home() {
  // mount시 0.1초 뒤 Load값을 true로 변경
  const [Load, setLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 1000);
    return () => setLoad(false);
  }, []);

  // 스크롤로 이동할 요소를 지정
  const scrollRef = useRef(null);

  const scroll = () => {
    scrollRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    // 0에서 -> 현재 스크롤바 위치로 바꿔주는 함수
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scr0ll", updateScroll);
    };
  }, []);
  // console.log(scrollPosition);

  // div 뷰포트 안에 들어오면 스크롤 이벤트 실행
  const upScrollRef = useRef(null);
  const [scrollPosition2, setScrollPosition2] = useState(false);

  const elementInView = () => {
    if (!upScrollRef) return;
    const elementTop = upScrollRef.current.getBoundingClientRect().top;
    setScrollPosition2(
      elementTop <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  };
  window.addEventListener("scroll", elementInView);

  return (
    <div className="home">
      {/* main */}
      <main className="home-main">
        <div className={`home-main-op${Load ? " on" : ""}`}>
          <div className="home-main-op-top">
            <div className="home-main-op-tit">
              <span>금융의 모든 것</span>
              <span>토스에서 쉽고 간편하게</span>
            </div>
            <div className="home-main-op-btn">
              <a href="https://itunes.apple.com/kr/app/%ED%86%A0%EC%8A%A4/id839333328?mt=8">
                App Store
                <img src="/images/home-main-appstore.png" alt="" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=viva.republica.toss">
                <img src="/images/home-main-googleplay.png" alt="" />
                Google Play
              </a>
            </div>
          </div>
          <button type="button" className="home-main-op-arrow" onClick={scroll}>
            <img src="/images/icn-arrow.svg" alt="화살표" />
          </button>
        </div>
      </main>
      {/* section-01 */}
      <section className="home section-01" ref={scrollRef}>
        <div className="home section-01-wrap">
          <div className="home section-01-wrap-margin">
            <div
              className={`home section-01-wrap-tit${
                scrollPosition > 400 ? " on" : ""
              }`}
            >
              <span>알면 좋은 금융</span>
              <span>이런 서비스도</span>
              <span>한번 써보세요</span>
            </div>
            {/* <ServiceList /> */}
            <ServiceList
              className={!scrollPosition2 ? "" : "on"}
              ref={upScrollRef}
            />
          </div>
        </div>
      </section>
      {/* section-02 */}
      <section className="home-section-02">
        <div className="home-section-02-wrap">
          <div className="home-section-02-wrap-tit">
            <span>함께 하는 이용기관</span>
            <span>400+</span>
            <br />
            <span>다양한 서비스와 공공 분야에서</span>
          </div>
          <InfiniteSlide />
        </div>
      </section>
      {/* section-03 */}
      <section className="home-section-03">
        <div className="home-section-03-wrap">
          <span>
            꼭 필요했던 <br /> 금융
          </span>
          <div
            className="home-section-03-left"
            style={{
              transform: `translateX(${
                scrollPosition < 3222
                  ? 0
                  : scrollPosition > 3222 && scrollPosition < 4124
                  ? 0 - (window.scrollY - 3222) * 0.1
                  : -100
              }%)`,
            }}
          />
          <div
            className="home-section-03-right"
            style={{
              transform: `translate(${
                scrollPosition < 3222
                  ? 0
                  : scrollPosition > 3222 && scrollPosition < 4124
                  ? 0 + (window.scrollY - 3222) * 0.1
                  : 100
              }%)`,
            }}
          />
        </div>
      </section>
    </div>
  );
}
