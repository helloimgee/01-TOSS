/* eslint-disable import/no-named-as-default */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HoverList from "../../components/HoverList";
import careerList01 from "../../assets/careerList01";
import Slide01 from "../../components/Slide01";
import Slide02 from "../../components/Slide02";
import "./CareerPage.scss";

export default function CareerPage() {
  // 1. 스크롤할 때마다 스크롤 상단 거리 update
  const [scrollTop, setScrollTop] = useState(0);

  const updateScroll = () => {
    setScrollTop(
      window.scrollY ||
        window.pageYOffest ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
    );
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
      <div
        className="careerPage-main"
        style={{
          opacity: `${
            scrollTop < 1300
              ? 1
              : scrollTop > 1300 && scrollTop < 2500
              ? 1 - (scrollTop - 1300) * 0.0008333333
              : 0
          }`,
          /* 
          ~1300: 1
          1300~2500: 1 ~ 0 -> 1 / 1200
          2500~: 0
          */
        }}
      >
        <div
          className="careerPage-main-bg"
          style={{
            transform: `scale(${
              scrollTop < 1500 ? 1 + scrollTop * 0.0003866667 : 1.58
              /* 
              ~1500: 1 ~ 1.58 -> 0.58 / 1500 
              1500~: 1.58
              */
            })`,
          }}
        />
        <div
          className="careerPage-main-filter"
          style={{
            opacity: `${
              scrollTop < 600
                ? 0.3
                : scrollTop > 600 && scrollTop < 1400
                ? 0.3 + scrollTop * 0.0003571429
                : 0.8 - scrollTop * 0.0003571429
            }`,
            /* 
            600: 0.3 
            600~2000: 0.3 ~ 0.8 -> 0.5 / 1400
            2000~: 0.8 
            */
          }}
        />
        <p
          className="careerPage-main-tit"
          style={{
            opacity: `${
              scrollTop < 300 ? 1 - window.scrollY * 0.00333333333 : 0
            }`,
          }}
          /*
          ~300: 1 ~ 0 -> 1 / 300
          300~: 0
          */
        >
          당신도 깊게 몰입했던 <br /> 무언가가 있나요?
        </p>
        <p
          className="careerPage-main-scrollTit1 scrollTit-common"
          style={{
            opacity: `${
              scrollTop < 400
                ? 0
                : scrollTop > 400 && scrollTop < 800
                ? 0 + (window.scrollY - 400) * 0.0025
                : 1
              /* 
                  ~400: 0
                  400~800: 0 ~ 1 -> 1 / 400
                  800~: 1
                */
            }`,
            transform: `translateY(${
              scrollTop < 400
                ? 20
                : scrollTop > 400 && scrollTop < 800
                ? 20 - (window.scrollY - 400) * 0.05
                : 0
            }px)`,
            /*
              ~400: 20
              400~800: 20 ~ 0(위로) -> 20 / 400
              800~: 0 
            */
          }}
        >
          시간 가는 줄 모르고 무엇에 빠져드는 경험. <br /> 함께 한 방향으로
          달려가는 느낌. <br /> 해냈을 때의 쾌감과 기쁨.
        </p>
        <p
          className="careerPage-main-scrollTit2 scrollTit-common"
          style={{
            opacity: `${
              scrollTop < 800
                ? 0
                : scrollTop > 800 && scrollTop < 1000
                ? 0 + (window.scrollY - 800) * 0.005
                : 1
              /* 
                ~800: 0
                800~1000: 0 ~ 1 -> 1 / 200 
                1000~: 1
              */
            }`,
            transform: `translateY(${
              scrollTop < 800
                ? 20
                : scrollTop > 800 && scrollTop < 1000
                ? 20 - (window.scrollY - 800) * 0.1
                : 0
            }px)`,
            /*
              ~800: 20
              800~1000: 20 ~ 0 -> 20 / 200
              1000~: 0 
            */
          }}
        >
          이 몰입의 경험을 일에서 느낀다면 어떨까요? <br /> 일을 방해하는 요소가
          없다면 어떨까요?
        </p>
        <p
          className="careerPage-main-scrollTit3 scrollTit-common"
          style={{
            opacity: `${
              scrollTop < 1100
                ? 0
                : scrollTop > 1100 && scrollTop < 1300
                ? 0 + (window.scrollY - 1100) * 0.005
                : 1
            }`,
            /* 
              ~1100: 0
              1100~1300: 0 ~ 1 -> 1 / 200
              1300~: 1
            */
            transform: `translateY(${
              scrollTop < 1100
                ? 20
                : scrollTop > 1100 && scrollTop < 1300
                ? 20 - (window.scrollY - 1100) * 0.1
                : 0
            }px)`,
            /* 
              ~1100: 20
              1100~1300: 20 ~ 0 -> 20 / 200
              1300~: 0
            */
          }}
        >
          토스커뮤니티에 모인 사람들은 <br /> 일에 몰입하는 즐거움과 성장의
          기쁨을 느끼며, <br /> 새로운 역사를 만들고 있습니다.
        </p>
      </div>
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
            <HoverList dataAsset={careerList01} />
          </div>
        </div>
        <BlankSpace width="100%" height="56px" />

        {/* 슬라이드 1 */}
        <Slide01 />

        {/* 슬라이드 2 */}
        <div className="careerPage-section-02">
          <p>토스커뮤니티 복지 자세히 보기</p>
        </div>
        <Slide02 />
      </div>
    </div>
  );
}

const BlankSpace = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  @media screen and (max-width: 640px) {
    height: ${(props) => props.height * 0.7};
  }
`;
