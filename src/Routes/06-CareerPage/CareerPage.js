import React, { useEffect, useState } from "react";
import "./CareerPage.scss";
import careerList01 from "../../assets/careerList01";

export default function CareerPage() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);
  console.log(scrollPosition);
  return (
    <div className="careerPage">
      {/* main */}
      <div className="careerPage-main">
        <div className="careerPage-main-bg" />
        <div className="careerPage-main-filter" />
        <div className="careerPage-main-tit">
          <p style={scrollPosition > 45 ? { opacity: 0 } : { opacity: 1 }}>
            당신도 깊게 몰입했던 <br /> 무언가가 있나요?
          </p>
        </div>
      </div>
      {/* section */}
      <div className="careerPage-section-01">
        <div className="careerPage-section-01-wrap">
          <div className="careerPage-section-01-tit">
            <p>누구나 가진 몰입의 힘을 믿습니다</p>
            <p>
              만약 누군가의 몰입이 없었다면, 모두를 위한 새로운 혁신은 없었을
              것입니다. <br />
              토스커뮤니티에서는 누구나 각자의 방식으로 몰입할 수 있습니다
            </p>
          </div>
          <div className="careerPage-section-01-liWrap">
            {careerList01.map((list) => {
              return (
                <div
                  className="careerPage-section-01-liWrap-li"
                  style={{
                    background: `url(${list.bg}) no-repeat center / cover`,
                  }}
                >
                  <p>{list.des}</p>
                  <div className="careerPage-section-01-liWrap-li-icon" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
