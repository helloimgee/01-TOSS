/* eslint-disable no-nested-ternary */
import React, { useRef } from "react";
import PropTypes from "prop-types";
import Title from "../../components/Title";
import useVisible from "../../customhook/useVisible";
import "./Section08.scss";

export default function Section08({ scrollPosition }) {
  const titRef = useRef(null);
  const titVisible = useVisible(titRef);

  return (
    <div className="section08">
      <div className="section08-wrap">
        <Title className={`${titVisible ? "on" : ""}`} ref={titRef}>
          <p>
            토스로 <br />
            나에게 딱 맞게
          </p>
        </Title>
        {/* pc */}
        <div className="section08-wrap-pc">
          {/* 이미지 1 */}
          <div className="section08-wrap-pc-sec01">
            <img
              src={`${process.env.PUBLIC_URL}/images/home/section08-img01.jpeg`}
              alt="납부 이미지"
              style={{
                opacity: `${
                  scrollPosition < 10695
                    ? 0
                    : scrollPosition >= 10695 && scrollPosition < 11316
                    ? (scrollPosition - 10695) * 0.001610306
                    : 1
                }`,
              }}
            />
            <div
              className="section08-wrap-pc-sec01-txt"
              style={{
                opacity: `${
                  scrollPosition < 11764
                    ? 0
                    : scrollPosition >= 11764 && scrollPosition < 12083
                    ? (scrollPosition - 11764) * 0.0031347962
                    : 1
                }`,
              }}
            >
              <span>
                내 문서함 <b>공공문서 확인부터 납부까지 한 번에</b>
              </span>
              <p>
                건강검진, 국가장학금 신청, 교통범칙금·과태료 납부. <br />
                그동안 종이로 받았던 문서들 꼼꼼히 챙기느라 고생했어요. <br />
                앞으로는 토스 내 문서함에서 간단히 받아보고 납부할 수 있어요.
              </p>
            </div>
          </div>
          {/* 이미지 2 */}
          <div className="section08-wrap-pc-sec02">
            <div className="section08-wrap-pc-sec02-first">
              <img
                src={`${process.env.PUBLIC_URL}/images/home/section08-img02.jpeg`}
                alt="납부 이미지"
                style={{
                  opacity: `${
                    scrollPosition < 12022
                      ? 0
                      : scrollPosition >= 12022 && scrollPosition < 12652
                      ? (scrollPosition - 12022) * 0.0015873016
                      : 1
                  }`,
                }}
              />
              <p
                style={{
                  opacity: `${
                    scrollPosition < 12869
                      ? 0
                      : scrollPosition >= 12869 && scrollPosition < 13378
                      ? (scrollPosition - 12869) * 0.0019646365
                      : 1
                  }`,
                }}
              >
                보험 <br />
                <b>
                  조회부터 상담, <br /> 병원비 돌려받기를 간편하게
                </b>
              </p>
            </div>
            <div
              className="section08-wrap-pc-sec02-second"
              style={{
                opacity: `${
                  scrollPosition < 12506
                    ? 0
                    : scrollPosition >= 12506 && scrollPosition < 12974
                    ? (scrollPosition - 12506) * 0.0021367521
                    : 1
                }`,
                transform: `translateY(
              ${
                scrollPosition < 12506
                  ? 100
                  : scrollPosition >= 12506 && scrollPosition < 13167.5
                  ? 100 - (scrollPosition - 12506) * 0.1512859304
                  : 0
              }px
            )`,
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/home/section08-img03.jpeg`}
                alt="납부 이미지"
              />
              <p>
                또래보다 보험료는 적절하게 내고 있는지, <br />낸 만큼 보장받고
                있는지
                <br />
                확인해 보세요. 전문가와의 상담을 통해 내게 딱 맞는 보험을 <br />
                추천 받고, 병원비를 간편하게 청구할 수<br /> 있어요.
              </p>
            </div>
          </div>
          {/* 이미지 3 */}
          <div className="section08-wrap-pc-sec03">
            <img
              src={`${process.env.PUBLIC_URL}/images/home/section08-img04.jpeg`}
              alt="납부 이미지"
              style={{
                opacity: `${
                  scrollPosition < 13362
                    ? 0
                    : scrollPosition >= 13362 && scrollPosition < 13956
                    ? (scrollPosition - 13362) * 0.0016583748
                    : 1
                }`,
              }}
            />
            <div
              className="section08-wrap-pc-sec03-bot"
              style={{
                opacity: `${
                  scrollPosition < 14174
                    ? 0
                    : scrollPosition >= 14174 && scrollPosition < 14506
                    ? (scrollPosition - 14174) * 0.0030120482
                    : 1
                }`,
              }}
            >
              <p>
                내 부동산 · 자동차 <br />
                <b>정기적으로 관리해보세요</b>
              </p>
              <p>
                집과 자동차의 공통점은 잘 사서, 잘 관리하고, 잘 팔아야 한다는
                것.
                <br />
                시세조회부터 아파트 관리비 납부, 자동차 보험료 조회까지 부동산과
                <br />
                자동차 관리도 토스에서 시작해 보세요.
              </p>
            </div>
          </div>
        </div>
        {/* mobile */}
        <div className="section08-wrap-mobile">
          {/* 이미지 1 */}
          <div className="section08-wrap-mobile-sec01">
            <img
              src={`${process.env.PUBLIC_URL}/images/home/section08-img01.jpeg`}
              alt="납부 이미지"
              style={{
                opacity: `${
                  scrollPosition < 7627
                    ? 0
                    : scrollPosition >= 7627 && scrollPosition < 7982
                    ? (scrollPosition - 7627) * 0.001610306
                    : 1
                }`,
              }}
            />
            <div
              className="section08-wrap-mobile-sec01-txt"
              style={{
                opacity: `${
                  scrollPosition < 8253
                    ? 0
                    : scrollPosition >= 8253 && scrollPosition < 12540
                    ? (scrollPosition - 8253) * 0.0031347962
                    : 1
                }`,
              }}
            >
              <span>
                내 문서함 <br />
                <b>공공문서 확인부터 납부까지 한 번에</b>
              </span>
              <p>
                건강검진, 국가장학금 신청, 교통범칙금·과태료 납부. <br />
                그동안 종이로 받았던 문서들 꼼꼼히 챙기느라 고생했어요. <br />
                앞으로는 토스 내 문서함에서 간단히 받아보고 납부할 수 있어요.
              </p>
            </div>
          </div>
          {/* 이미지 2 */}
          <div className="section08-wrap-mobile-sec02">
            <div className="section08-wrap-mobile-sec02-first">
              <img
                src={`${process.env.PUBLIC_URL}/images/home/section08-img02.jpeg`}
                alt="납부 이미지"
                style={{
                  opacity: `${
                    scrollPosition < 8401
                      ? 0
                      : scrollPosition >= 8401 && scrollPosition < 9900
                      ? (scrollPosition - 8401) * 0.0015873016
                      : 1
                  }`,
                }}
              />
              <p
                style={{
                  opacity: `${
                    scrollPosition < 12869
                      ? 1
                      : scrollPosition >= 12869 && scrollPosition < 13378
                      ? (scrollPosition - 12869) * 0.0019646365
                      : 1
                  }`,
                }}
              >
                보험 <br />
                <b>
                  조회부터 상담, <br /> 병원비 돌려받기를 간편하게
                </b>
              </p>
            </div>
            <div
              className="section08-wrap-mobile-sec02-second"
              style={{
                opacity: `${
                  scrollPosition < 8823
                    ? 0
                    : scrollPosition >= 8823 && scrollPosition < 9455
                    ? (scrollPosition - 8823) * 0.0015822785
                    : 1
                }`,
                transform: `translateY(
              ${
                scrollPosition < 8823
                  ? 100
                  : scrollPosition >= 8823 && scrollPosition < 9455
                  ? 100 - (scrollPosition - 8823) * 0.1582278481
                  : 0
              }px
            )`,
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/home/section08-img03.jpeg`}
                alt="납부 이미지"
              />
              <p>
                또래보다 보험료는 적절하게 내고 있는지, <br />낸 만큼 보장받고
                있는지
                <br />
                확인해 보세요. 전문가와의 상담을 통해 내게 딱 맞는 보험을 <br />
                추천 받고, 병원비를 간편하게 청구할 수<br /> 있어요.
              </p>
            </div>
          </div>
          {/* 이미지 3 */}
          <div className="section08-wrap-mobile-sec03">
            <img
              src={`${process.env.PUBLIC_URL}/images/home/section08-img04.jpeg`}
              alt="납부 이미지"
              style={{
                opacity: `${
                  scrollPosition < 9500
                    ? 0
                    : scrollPosition >= 9500 && scrollPosition < 9920
                    ? (scrollPosition - 9500) * 0.002309524
                    : 1
                }`,
              }}
            />
            <div
              className="section08-wrap-mobile-sec03-bot"
              style={{
                opacity: `${
                  scrollPosition < 10003
                    ? 0
                    : scrollPosition >= 10003 && scrollPosition < 10132
                    ? (scrollPosition - 10003) * 0.007751938
                    : 1
                }`,
              }}
            >
              <p>
                내 부동산 · 자동차 <br />
                <b>정기적으로 관리해보세요</b>
              </p>
              <p>
                집과 자동차의 공통점은 잘 사서, 잘 관리하고, 잘 팔아야 한다는
                것.
                <br className="br01 " />
                시세조회부터 아파트 관리비 납부, 자동차 보험료 조회까지 부동산과
                <br className="br02" />
                자동차 관리도 토스에서 시작해 보세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Section08.propTypes = {
  scrollPosition: PropTypes.number.isRequired,
};
