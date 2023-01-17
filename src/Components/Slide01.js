import React, { useState } from "react";
import careerMembers from "../assets/careerMembers";
import "./Slide01.scss";

export default function Slide01() {
  /* slide 되는 px수를 저장하고 수정하기 위한 state (초기값 0px) */
  const [slidePx, setSlidePx] = useState(0);

  //
  /* (1) 한 번이라도 next 버튼을 눌렀다면: prev 버튼을 누를 수 있다 
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
    <div className="slick-slider01">
      <div className="slick-list">
        {/* 버튼 클릭 -> slidePx값 변경 -> 요소가 그 값만큼 x축으로 이동 */}
        <div
          className="slick-track"
          style={{
            transform: `translateX(${slidePx}vw)`,
            transition: "all 0.5s",
          }}
        >
          {/* map 통한 리스트 렌더링 */}
          {careerMembers.map((mem) => (
            <div className="slick-slide" id={mem.id}>
              <div>
                <div className="slick-slide-content">
                  <div className="slick-slide-content-inner">
                    <img src={mem.img} alt={mem.alt} />
                    <p>{mem.des}</p>
                    <p>{mem.who}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* (1) 0px일 때 prev 버튼 비활성화 
      (2) 클릭시 toPrev 메서드 실행 */}
      <div
        className={`prevBtn slideBtn ${slidePx === 0 ? "disabled" : ""}`}
        onClick={toPrev}
        role="button"
        aria-hidden
      >
        <img src="/images/slide01-arrow.png" alt="왼쪽 화살표" />
      </div>
      {/* (1) next 버튼 다 눌렀을 때 next 버튼 비활성화 
      (2) 클릭시 toNext 메서드 실행 */}
      <div
        className={`nextBtn slideBtn ${slidePx === -300 ? "disabled" : ""}`}
        onClick={toNext}
        role="button"
        aria-hidden
      >
        <img src="/images/slide01-arrow.png" alt="오른쪽 화살표" />
      </div>
    </div>
  );
}
