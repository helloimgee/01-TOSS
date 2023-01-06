import React, { useEffect, useRef, useState } from "react";
import Main03 from "components/Main03";
import ServiceList from "components/ServiceList";
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

  return (
    <div className="home">
      <section className="main_1">
        <div className={`main_1_contents${Load ? " on" : ""}`}>
          <div className="main_1_title">
            <span>금융의 모든 것</span>
            <span>토스에서 쉽고 간편하게</span>
          </div>
          <svg
            onClick={scroll}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
          </svg>
        </div>
      </section>
      {/* main2 */}
      <section className="main_2" ref={scrollRef}>
        <div className="main_2_inner">
          <div className="main_2_title">
            <span>알면 좋은 금융</span>
            <span>이런 서비스도</span>
            <span>한번 써보세요</span>
          </div>
          <ServiceList />
        </div>
      </section>
      <Main03 />
    </div>
  );
}
