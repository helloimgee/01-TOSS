import React, { useRef } from "react";
import "./TeamPage.scss";
import TeamSection01 from "./TeamSection01";
import TeamSection02 from "./TeamSection02";
import TeamSection03 from "./TeamSection03";
import TeamSection05 from "./TeamSection05";
import TeamSection07 from "./TeamSection07";

export default function TeamPage() {
  const ref = useRef(null);

  const arrowScroll = () => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div className="teamPage">
      <main className="teamPage-main">
        <div className="teamPage-main-contents">
          <div className="teamPage-main-contents-tit">
            <span>금융, 그 이상의</span>
            <br />
            <span>역사를 만들고 있습니다</span>
          </div>
          <button
            type="button"
            className="teamPage-main-arrow"
            onClick={arrowScroll}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/icn-down-arrow.png`}
              alt="화살표 아이콘"
            />
          </button>
        </div>
      </main>
      <TeamSection01 ref={ref} />
      <TeamSection02 />
      <TeamSection03 />
      <TeamSection05 />
      <TeamSection07 />
    </div>
  );
}
