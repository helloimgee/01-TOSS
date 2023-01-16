import React, { useState } from "react";
import careerMembers from "../assets/careerMembers";
import "./Slide03.scss";

export default function Slide03() {
  const [slidePx, setSlidePx] = useState(0);

  const toPrev = () => {
    if (slidePx < 0) {
      // 한 번이라도 next 버튼 누른(-100vw) 상태일 때 필요(그전에는 비활성화)
      setSlidePx(slidePx + 100);
    }
  };

  const toNext = () => {
    if (slidePx > -100 * 3) {
      // next 다 해버린 상태가 아니면 -> next 버튼 누르면 왼쪽으로 이동
      setSlidePx(slidePx - 100);
    }
  };

  return (
    <div className="slick-slider03">
      <div className="slick-list">
        <div
          className="slick-track"
          style={{
            transform: `translateX(${slidePx}vw)`,
            transition: "all 0.5s",
          }}
        >
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
      <div
        className={`prevBtn slideBtn ${slidePx === 0 ? "disabled" : ""}`}
        onClick={toPrev}
        role="button"
        aria-hidden
      >
        <img src="/images/slide01-arrow.png" alt="왼쪽 화살표" />
      </div>
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
