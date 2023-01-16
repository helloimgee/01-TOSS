/* eslint-disable import/no-named-as-default */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import HoverList from "../../components/HoverList";
import careerList01 from "../../assets/careerList01";
import Slide03 from "../../components/Slide03";
import Slide04 from "../../components/Slide04";
import "./CareerPage.scss";

export default function CareerPage() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  const data1 = careerList01;
  // const data2 = careerList02;

  return (
    <div className="careerPage">
      {/* main */}
      <div
        className="careerPage-main"
        style={{
          opacity: `${
            scrollPosition < 1300
              ? 1
              : scrollPosition > 1300 && scrollPosition < 2500
              ? 1 - (window.scrollY - 1300) * 0.0007692308
              : 0
          }`,
        }}
      >
        <div
          className="careerPage-main-bg"
          style={{
            transform: `scale(${
              scrollPosition < 1500 ? 1 + window.scrollY * 0.0003866667 : 1.58
            })`,
          }}
        />
        <div
          className="careerPage-main-filter"
          style={{
            opacity: `${
              scrollPosition < 600
                ? 0.3
                : scrollPosition > 600 && scrollPosition < 1400
                ? 0.3 + window.scrollY * 0.0004471438
                : scrollPosition > 1400
                ? 1 - window.scrollY * 0.000548553
                : 1
            }`,
          }}
        />
        <p
          className="careerPage-main-tit"
          style={{
            opacity: `${
              scrollPosition < 300 ? 1 - window.scrollY * 0.003333 : 0
            }`,
          }}
        >
          당신도 깊게 몰입했던 <br /> 무언가가 있나요?
        </p>
        <p
          className="careerPage-main-scrollTit1 scrollTit-common"
          style={{
            opacity: `${
              scrollPosition < 400
                ? 0
                : scrollPosition > 400 && scrollPosition < 800
                ? 0 + (window.scrollY - 400) * 0.0025
                : 1
            }`,
            transform: `translateY(${
              scrollPosition < 400
                ? 20
                : scrollPosition > 400 && scrollPosition < 800
                ? 20 - (window.scrollY - 400) * 0.05
                : 0
            }px)`,
          }}
        >
          시간 가는 줄 모르고 무엇에 빠져드는 경험. <br /> 함께 한 방향으로
          달려가는 느낌. <br /> 해냈을 때의 쾌감과 기쁨.
        </p>
        <p
          className="careerPage-main-scrollTit2 scrollTit-common"
          style={{
            opacity: `${
              scrollPosition < 800
                ? 0
                : scrollPosition > 800 && scrollPosition < 1000
                ? 0 + (window.scrollY - 800) * 0.0025
                : 1
            }`,
            transform: `translateY(${
              scrollPosition < 800
                ? 20
                : scrollPosition > 800 && scrollPosition < 1000
                ? 20 - (window.scrollY - 800) * 0.1
                : 0
            }px)`,
          }}
        >
          이 몰입의 경험을 일에서 느낀다면 어떨까요? <br /> 일을 방해하는 요소가
          없다면 어떨까요?
        </p>
        <p
          className="careerPage-main-scrollTit3 scrollTit-common"
          style={{
            opacity: `${
              scrollPosition < 1100
                ? 0
                : scrollPosition > 1100 && scrollPosition < 1300
                ? 0 + (window.scrollY - 1100) * 0.0025
                : 1
            }`,
            transform: `translateY(${
              scrollPosition < 1100
                ? 20
                : scrollPosition > 1100 && scrollPosition < 1300
                ? 20 - (window.scrollY - 1100) * 0.1
                : 0
            }px)`,
          }}
        >
          토스커뮤니티에 모인 사람들은 <br /> 일에 몰입하는 즐거움과 성장의
          기쁨을 느끼며, <br /> 새로운 역사를 만들고 있습니다.
        </p>
      </div>
      {/* section 01 */}
      <div className="careerPage-section">
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
            <HoverList dataAsset={data1} />
          </div>
        </div>
        <Slide03 />
        <Slide04 />
      </div>
    </div>
  );
}
