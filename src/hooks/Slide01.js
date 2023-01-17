import React, { useRef } from "react";
import "./Slide01.scss";

export default function Slide01() {
  const [slidePx, setSlidePx] = useState(0);

  const itemRef = useRef(null);

  const rightSlide = () => {
    itemRef.current.style.transform = `trasnlateX(-1139px)`;
  };

  return (
    <div className="slide01">
      <div className="slide01-list">
        <div className="slide01-lists-track" ref={itemRef}>
          <div className="slide01-lists-track-left">
            <img src="/images/slide01-arrow.png" alt="왼쪽 화살표" />
          </div>
          <div className="slide01-lists-track-item" ref={itemRef}>
            <img src="/images/slide01-01.png" alt="슬라이드01" />
            <p>
              토스커뮤니티의 모든 분들이 느끼는 점일텐데요, 일에 방해되는
              불필요한 절차나 형식적인 문화가 거의 없는 곳이 바로
              토스커뮤니티입니다. 업무나 역할에 크게 제한이 없는 것 또한 큰
              장점이라, 이런 환경 속에서 자신이 그려나가는 바를 마음껏 실현시켜
              나가면 되는 문화예요.
            </p>
            <p>Head of Communications, 윤기열 님</p>
          </div>
          <div
            className="slide01-lists-track-right"
            onClick={rightSlide}
            role="presentation"
          >
            <img src="/images/slide01-arrow.png" alt="오른쪽 화살표" />
          </div>
        </div>
      </div>
    </div>
  );
}
