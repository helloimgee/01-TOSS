/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useRef, useState } from "react";
import ServiceList from "@components/ServiceList";
import InfiniteSlide from "@components/InfiniteSlide";
import "./Home.scss";
// import ArrowIcon from "@components/Arrow";

export default function Home() {
  // 1. mount시 0.1초 뒤(Load값을 true일 경우) -> css 속성(클래스명) 변경
  /* 1-1. Load 초기값 false로 설정하는 useState() 훅 */
  const [Load, setLoad] = useState(false);

  /* 1-2. 
  (1) useEffet(setTimeout(), []) : 최초 mount시 setTimeout() 함수 실행
  (2) setTimeout(setLoad(true), 1000) : 0.1초 뒤 Load값을 true로 변경하는 함수 실행 */
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 1000);
    return () => setLoad(false);
  }, []);

  /* 2-1. 버튼 클릭시 도착할 요소를 지정 */
  const destinationRef = useRef(null);
  /* 2-2. scroll 커스텀 메서드 생성 
  = destinationRef 요소로 스크롤되는 함수(scrollIntoView())실행 */
  const scroll = () => {
    destinationRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

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

  /* 4-3. 브라우저창 scroll할 때마다 현재 스크롤 위치를 받아오기
  (1) 초기 마운트시: 브라우저창을 scroll할 때 updateScroll 메서드 실행  
  (2) 마운트 해제시: 브라우저창을 scroll해도 updateScroll 메서드 실행하지 않도록 이벤트 리스너 삭제 */
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scr0ll", updateScroll);
    };
  }, []);
  // console.log(scrollPosition);

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
                <img src="/images/home-main-appstore.png" alt="앱스토어" />
                App Store
              </a>
              <a href="https://play.google.com/store/apps/details?id=viva.republica.toss">
                <img src="/images/home-main-googleplay.png" alt="구글플레이" />
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
      <section className="home section-01" ref={destinationRef}>
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
              className={scrollPosition2 ? "on" : ""}
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
      </section>
    </div>
  );
}
