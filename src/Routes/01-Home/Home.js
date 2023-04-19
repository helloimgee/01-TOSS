/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useRef, useState } from "react";
import InfiniteSlide from "../../components/InfiniteSlide";
import ServiceList from "../../components/ServiceList";
import "./Home.scss";
import Section02 from "./Section02";
import Section10 from "./Section10";
// import ArrowIcon from "@components/Arrow";

export default function Home() {
  // 1. mount시 0.1초 뒤(Load: true) -> 클래스명 변경
  const [Load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 1000);
    return () => setLoad(false);
  }, []);

  /* 2-1. 화살표 버튼 클릭 -> 스크롤로 이동 */
  const destinationRef = useRef(null);

  const arrowScroll = () => {
    destinationRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }; // scrollIntoView(): destinationRef.current 요소가 화면에 보이게 스크롤

  // 3. 특정 컴포넌트가 뷰포트 안에 들어오면 스크롤 이벤트 실행
  /* 3-1. 검사할 특정 컴포넌트를 참조 */
  const inViewRef = useRef(null);
  /* 3-2. 특정 컴포넌트가 뷰포트 안에 들어오는지 여부를 변수에 저장 */
  const [isInView, setIsInView] = useState(false);
  /* 3-3. 커스텀 메서드 정의
= 특정 컴포넌트 ~ 브라우저 상단 사이의 거리가 < 브라우저 내부 높이보다 작은지 여부를 isInView 변수에 저장
*/
  const elementInView = () => {
    if (!inViewRef) return;
    const elementTop = inViewRef.current.getBoundingClientRect().top;
    setIsInView(
      elementTop <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  };
  window.addEventListener("scroll", elementInView);

  // 4.
  /* 4-1. scrollPosition의 초기값을 0으로 설정 */
  const [scrollPosition, setScrollPosition] = useState(0);

  /* 4-2. updateScroll 커스텀 메서드 생성 
  = scrollPosition을 현재 스크롤 위치(브라우저창에서~요소까지의 거리)로 바꿔주는 함수 실행 
  스크롤한 거리 -> 크로스 브라우징 위해 모두 사용(비 IE + IE)
  (1) window.scrollY: IE 제외 모두 지원
  (2) window.pageYOffset: chrome, safari, opera, edge, firefox, IE>=9 (권장)
  (2) document.documentElement.scrollTop: IE, firefox (html 요소)
  (3) document.body.scrollTop: chrome, safari, opera, edge, Quirks mode (body 요소) */
  const updateScroll = () => {
    setScrollPosition(window.pageYOffset || document.documentElement.scrollTop);
  };

  // 4-3. 브라우저창 scroll할 때마다 현재 스크롤 위치를 받아오기
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scr0ll", updateScroll);
    };
  }, []);

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
                <img
                  src={`${process.env.PUBLIC_URL}/images/home-main-appstore.png`}
                  alt="앱스토어"
                />
                App Store
              </a>
              <a href="https://play.google.com/store/apps/details?id=viva.republica.toss">
                <img
                  src={`${process.env.PUBLIC_URL}/images/home-main-googleplay.png`}
                  alt="구글플레이"
                />
                Google Play
              </a>
            </div>
          </div>
          <button
            type="button"
            className="home-main-op-arrow"
            onClick={arrowScroll}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/icn-arrow.svg`}
              alt="화살표"
            />
          </button>
        </div>
      </main>
      <section className="home-section01" ref={destinationRef}>
        <p>
          내 모든 금융 내역을 한눈에 조회하고 한 곳에서 관리하세요. <br />
          이제껏 경험 못 했던 쉽고 편리한 금융 서비스,
          <br /> 토스와 함께라면 당신의 일상이 새로워질 거예요.
        </p>
      </section>
      <Section02 />
      {/* section-01 */}
      <section className="home section-01">
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
            <ServiceList className={isInView ? "on" : ""} ref={inViewRef} />
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
        {/* 배경 이미지가 들어간 div */}
        <div className="home-section-03-wrap">
          <span>
            꼭 필요했던 <br /> 금융
          </span>
          {/* 왼쪽 가림막 */}
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
          {/* 오른쪽 가림막 */}
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
        <Section10 />
      </section>
    </div>
  );
}
