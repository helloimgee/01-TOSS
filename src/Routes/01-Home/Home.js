/* eslint-disable import/no-unresolved */
import React, { useCallback, useEffect, useRef, useState } from "react";
import ServiceList from "@components/ServiceList";
import InfiniteSlide from "@components/InfiniteSlide";
import "./Home.scss";

export default function Home() {
  const [Load, setLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 1000);
    return () => setLoad(false);
  }, []);

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
  }, []);
  console.log(scrollPosition);

  // div 뷰포트 안에 들어오면 스크롤 이벤트 실행
  const upScrollRef = useRef(null);
  const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const handleScroll = useCallback(() => {
    const { current } = upScrollRef;
    if (elementInView) {
      current.style.transitionProperty = "opacity transform";
      current.style.transitionDuration = "1s";
      current.style.transitionTimingFunction = "cubic-bezier(0,0,0.2,1)";
      current.style.transitionDelay = "0s";
      current.style.opacity = 1;
      current.style.transform = "translate3d(0,0,0)";
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="home">
      {/* main */}
      <main className="home-main">
        <div className={`home-main-op${Load ? " on" : ""}`}>
          <div className="home-main-op-tit">
            <span>금융의 모든 것</span>
            <span>토스에서 쉽고 간편하게</span>
          </div>
          <svg
            className="home-main-op-arrow"
            onClick={scroll}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
          </svg>
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
            <ServiceList className={elementInView ? " on" : ""} />
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
    </div>
  );
}
