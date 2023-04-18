import React, { useEffect, useRef, useState } from "react";
import welfareList from "../assets/welfareList";
import "./Slide02.scss";

export default function Slide03() {
  const parentRef = useRef(null);

  const [offset, setOffset] = useState(0);
  const [parentWidth, setParentWidth] = useState(0);

  const getParentWidth = () => {
    if (parentRef.current) {
      const width = parentRef.current.clientWidth;
      setParentWidth(width);
    }
  };

  useEffect(() => {
    getParentWidth();
    window.addEventListener("resize", getParentWidth);
    return () => {
      window.removeEventListener("resize", getParentWidth);
    };
  }, []);

  const itemWidth = parentWidth ? parentWidth / 3 : null;

  const toPrev = () => {
    if (offset < 0) {
      // 한 번이라도 next 버튼 눌렀으면 -> prev 버튼으로 이전으로 돌아갈 수 있다
      setOffset((prevOffset) => prevOffset + itemWidth);
    }
  };

  const toNext = () => {
    if (offset > -itemWidth * 3) {
      // next 다 해버린 상태가 아니면 -> next 버튼으로 다음 걸로 넘길 수 있다
      setOffset((prevOffset) => prevOffset - itemWidth);
    }
  };

  useEffect(() => {
    console.log(offset);
  }, [offset]);

  return (
    <div className="slider02">
      <div className="slider02-wrap" ref={parentRef}>
        <div
          className="slider02-wrap-track"
          style={{
            transform: `translateX(${offset}px)`,
            transition: "all 0.5s",
          }}
        >
          {welfareList.map((welfare) => (
            <div className="slider02-wrap-track-item" id={welfare.id}>
              <div>
                <div className="slide-content">
                  <div className="slide-content-inner">
                    <img src={welfare.img} alt={welfare.alt} />
                    <p>{welfare.des}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="slider02-btn">
        <div
          className={`prevBtn slideBtn ${offset === 0 ? "disabled" : ""}`}
          onClick={toPrev}
          role="button"
          aria-hidden
        >
          <img src="/images/slide01-arrow.png" alt="왼쪽 화살표" />
        </div>
        <div
          className={`nextBtn slideBtn ${
            offset === -itemWidth * 3 ? "disabled" : ""
          }`}
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
