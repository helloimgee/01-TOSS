/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import "./CareerPage.scss";
import careerList01 from "../../assets/careerList01";

export default function CareerPage() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const [isHover, setIsHover] = useState(-1);

  const setTrue = (idx) => {
    setIsHover(idx);
    // console.log(e);
    // if (e.target.className === "careerPage-section-01-cont-li")
    //   e.target.children[0].className =
    //     "careerPage-section-01-cont-li-img hover";
  };

  const setFalse = () => {
    setIsHover(-1);
    // if (e.target.className === "careerPage-section-01-cont-li")
    //   e.target.children[0].className = "careerPage-section-01-cont-li-img";
  };

  // const bgScale = () => {
  //   console.log(window.scrollY * 0.0008333);
  //   if (window.scrollY * 0.0008333 < 1) {
  //     return 1;
  //   }
  //   if (window.scrollY * 0.0008333 > 1.5) {
  //     return 1.5;
  //   }
  //   return window.scrollY * 0.0008333;
  // };

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <div className="careerPage">
      {/* main */}
      <div className="careerPage-main">
        <div
          className={`careerPage-main-bg${scrollPosition > 2000 ? "off" : ""}`}
          style={{
            transform: `scale(${
              // eslint-disable-next-line no-nested-ternary
              1 + window.scrollY * 0.0008333 < 1.5
                ? 1 + window.scrollY * 0.0008333
                : 1.5
            })`,
            opacity:
              1 - window.scrollY * 0.00008333 > 0
                ? 1 - window.scrollY * 0.0008333
                : 0,
          }}
          // style={
          //   // scrollPosition > 540
          //   //   ? { transform: `scale(1.58)` }
          //   //   : { transform: `scale(1)` }
          // }
        />
        <div
          className={`careerPage-main-filter ${
            scrollPosition > 45 ? "off" : ""
          }`}
        />
        <p
          className="careerPage-main-tit"
          style={scrollPosition > 45 ? { opacity: 0 } : { opacity: 1 }}
        >
          당신도 깊게 몰입했던 <br /> 무언가가 있나요?
        </p>
        <p
          className={`careerPage-main-scrollTit1 scrollTit-common ${
            scrollPosition > 600 ? "scrolled" : ""
          }`}
        >
          시간 가는 줄 모르고 무엇에 빠져드는 경험. <br /> 함께 한 방향으로
          달려가는 느낌. <br /> 해냈을 때의 쾌감과 기쁨.
        </p>
        <p
          className="careerPage-main-scrollTit2 scrollTit-common"
          style={{ oapcity: 1 }}
        >
          이 몰입의 경험을 일에서 느낀다면 어떨까요? <br /> 일을 방해하는 요소가
          없다면 어떨까요?
        </p>
        <p
          className="careerPage-main-scrollTit3 scrollTit-common"
          style={{ oapcity: 0 }}
        >
          토스커뮤니티에 모인 사람들은 <br /> 일에 몰입하는 즐거움과 성장의
          기쁨을 느끼며, <br /> 새로운 역사를 만들고 있습니다.
        </p>
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
          <div className="careerPage-section-01-cont">
            {careerList01.map((list, idx) => {
              return (
                <div
                  className="careerPage-section-01-cont-li"
                  onMouseOver={() => {
                    console.log(111);
                    setTrue(idx);
                  }}
                  onFocus={() => {
                    setTrue(idx);
                  }}
                  onMouseOut={() => {
                    setFalse();
                  }}
                  onBlur={() => {
                    setFalse();
                  }}
                  key={list.id}
                >
                  <div
                    className={`careerPage-section-01-cont-li-img ${
                      isHover === idx ? "hover" : ""
                    }`}
                    style={{
                      background: `url(${list.bg}) no-repeat center / cover`,
                    }}
                  />
                  <div className="careerPage-section-01-cont-li-txt">
                    <p
                      className={`careerPage-section-01-cont-li-txt-hidden ${
                        isHover === idx ? "hover" : ""
                      }`}
                    >
                      {list.hidden}
                    </p>
                    <p
                      className={`careerPage-section-01-cont-li-txt-tit ${
                        isHover === idx ? "hover" : ""
                      }`}
                    >
                      {list.tit}
                    </p>
                    <div
                      className={`careerPage-section-01-cont-li-txt-icon ${
                        isHover === idx ? "hover" : ""
                      }`}
                    >
                      <img src="/images/careerPage-plus.svg" alt="플러스버튼" />
                    </div>
                    <p
                      className={`careerPage-section-01-cont-li-txt-des ${
                        isHover === idx ? "hover" : ""
                      }`}
                    >
                      {list.des}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
