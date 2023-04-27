import React, { useState } from "react";
import careerMembers from "../assets/careerMembers";
import "./Slide01.scss";

export default function Slide01() {
  /* slide 되는 거리 px */
  const [slidePx, setSlidePx] = useState(0);

  /* 
  이전 버튼: 기존값 - itemWidth
  다음 버튼: 기존값 + itemWidth


  /* (1) d한 번이라도 next 버튼을 눌렀다면: prev 버튼을 누를 수 있다 
  -> slidePx의 값 + 100vw(오른쪽으로 이동) */
  const toPrev = () => {
    if (slidePx < 0) {
      setSlidePx(slidePx + 100);
    }
  };
  /* (2) next 버튼을 다 누르지 않았다면: next 버튼을 누를 수 있다
  -> slidePx의 값 - 100vw(왼쪽으로 이동) */
  const toNext = () => {
    if (slidePx > -100 * 3) {
      setSlidePx(slidePx - 100);
    }
  };

  return (
    <div className="slider01">
      {/* 버튼 클릭 -> slidePx값 변경 -> 요소가 그 값만큼 x축으로 이동 */}
      <div
        className="slider01-track"
        style={{
          transform: `translateX(calc(${slidePx}vw)`,
          transition: "all 0.5s",
        }}
      >
        {careerMembers.map((mem) => (
          <div className="slider01-track-item" id={mem.id}>
            <div className="slider01-track-item-content">
              <img src={mem.img} alt={mem.alt} />
              <p>{mem.des}</p>
              <p>{mem.who}</p>
            </div>
          </div>
        ))}
      </div>
      {/* (1) 0px일 때 prev 버튼 비활성화 
      (2) 클릭시 toPrev 메서드 실행 */}
      <div className="slider01-btn">
        <div
          className={`slider01-btn-prevBtn ${slidePx === 0 ? "disabled" : ""}`}
          onClick={toPrev}
          role="button"
          aria-hidden
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/slide01-arrow.png`}
            alt="왼쪽 화살표"
          />
        </div>
        {/* (1) next 버튼 다 눌렀을 때 next 버튼 비활성화 
      (2) 클릭시 toNext 메서드 실행 */}
        <div
          className={`slider01-btn-nextBtn ${
            slidePx === -300 ? "disabled" : ""
          }`}
          onClick={toNext}
          role="button"
          aria-hidden
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/slide01-arrow.png`}
            alt="오른쪽 화살표"
          />
        </div>
      </div>
    </div>
  );
}
