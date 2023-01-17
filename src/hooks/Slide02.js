import React, { useState } from "react";
import careerMembers from "../assets/careerMembers";
import "./Slide02.scss";

export default function Slide02() {
  const [slidePx, setSlidePx] = useState(0);

  const toPrev = () => {
    if (slidePx < 0) {
      // 한 번이라도 왼쪽으로 이동(-1375)된 상태일 때(next버튼)
      // 한 번 넘겨졌을 때 필요(그전에는 비활성화)
      setSlidePx(slidePx + 1375);
    }
  };

  const toNext = () => {
    if (slidePx > -2750) {
      // -2750 : 왼쪽으로 2번 이동된 상태(next버튼 2번 누른 상태)
      // 왼쪽으로 다 와 버린 상태가 아닐 때 -> next 버튼 누르면 왼쪽으로 이동
      setSlidePx(slidePx - 1375);
    }
  };

  return (
    <div className="slide02">
      <div className="slide02-wrap">
        <ul>
          {careerMembers.map((mem) => (
            <li
              className="slide02-slideList"
              key={mem.id}
              style={{ transform: `translateX(${slidePx}px)` }}
            >
              <div>
                <img src={mem.img} alt={mem.alt} />
                <p>{mem.des}</p>
                <p>{mem.who}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="prevBtn slideBtn"
        onClick={toPrev}
        role="button"
        aria-hidden
        style={{ display: slidePx === 0 ? "" : "" }}
      >
        <img src="/images/slide01-arrow.png" alt="왼쪽 화살표" />
      </div>
      <div
        className="nextBtn slideBtn"
        onClick={toNext}
        role="button"
        aria-hidden
        style={{ display: slidePx === 2750 ? "none" : "" }}
      >
        <img src="/images/slide01-arrow.png" alt="오른쪽 화살표" />
      </div>
    </div>
  );
}
