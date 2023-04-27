/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, forwardRef, useRef, useEffect } from "react";
import "./TeamSection01.scss";

const TeamSection01 = forwardRef((props, ref) => {
  const graphRef = useRef(null);
  const textRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [textOn, setTextOn] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );
    if (textRef.current) {
      observer.observe(textRef.current);
    }
    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [textRef]);

  useEffect(() => {
    if (isVisible) {
      setTextOn(true);
      const timeout = setTimeout(() => {
        graphRef.current.play();
      }, 500);
    }
    return () => {
      setTextOn(false);
    };
  }, [isVisible]);

  const handleEnded = () => {
    graphRef.current.pause();
  };

  return (
    <section className="teamSection01" ref={ref}>
      <div className="teamSection01-wrap" ref={textRef}>
        <div className={`teamSection01-text ${textOn ? "on" : ""}`}>
          <p className="teamSection01-text-title">
            변화를 열망하는 사람들이 모여, <br /> 역사에 남을만한 변화를
            만듭니다.
          </p>
          <ul className="teamSection01-text-list">
            <li>
              <p>누적 가입자 수</p>
              <p>2,200만 +</p>
            </li>
            <li>
              <p>누적 투자금액</p>
              <p>1조 원 +</p>
            </li>
            <li>
              <p>전체 팀원 수</p>
              <p>1,500명 +</p>
            </li>
            <li>
              <p>출시 서비스 수</p>
              <p>50개 +</p>
            </li>
          </ul>
          <p className="teamSection01-text-date">2022년 4월 기준</p>
        </div>
        <video
          className="teamSection01-graph"
          ref={graphRef}
          playsInline
          muted
          onEnded={handleEnded}
        >
          <source
            src={`${process.env.PUBLIC_URL}/videos/team-page.mp4`}
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
});

export default TeamSection01;
