import React, { useState } from "react";
import welfareList from "../assets/welfareList";
import "./Slide04.scss";

export default function Slide03() {
  const [slidePx, setSlidePx] = useState(0);
  console.log(slidePx);

  const toPrev = () => {
    if (slidePx < 0) {
      // 한 번이라도 next 버튼 눌렀으면 -> prev 버튼으로 이전으로 돌아갈 수 있다
      setSlidePx(slidePx + 357);
      console.log(slidePx);
    }
  };

  const toNext = () => {
    if (slidePx > -357 * 3) {
      // next 다 해버린 상태가 아니면 -> next 버튼으로 다음 걸로 넘길 수 있다
      setSlidePx(slidePx - 357);
      console.log(slidePx);
    }
  };

  return (
    <div className="padding-left">
      <div className="slick-slider04">
        <div className="slick-list">
          <div
            className="slick-track"
            style={{
              transform: `translateX(${slidePx}px)`,
              transition: "all 0.5s",
            }}
          >
            {welfareList.map((welfare) => (
              <div className="slick-slide" id={welfare.id}>
                <div>
                  <div className="slick-slide-content">
                    <div className="slick-slide-content-inner">
                      <img src={welfare.img} alt={welfare.alt} />
                      <p>{welfare.des}</p>
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
          className={`nextBtn slideBtn ${slidePx === -1071 ? "disabled" : ""}`}
          onClick={toNext}
          role="button"
          aria-hidden
        >
          <img src="/images/slide01-arrow.png" alt="오른쪽 화살표" />
        </div>
      </div>
    </div>
  );
}
