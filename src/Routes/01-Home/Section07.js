/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import "./Section07.scss";

export default function Section07({ scrollPosition }) {
  return (
    <section className="section07">
      {/* 배경 이미지가 들어간 div */}
      <div className="section07-img">
        <p className="section07-img-txt">
          꼭 필요했던 <br /> 금융
        </p>
        {/* 왼쪽 가림막 */}
        <div
          className="section07-img-left"
          style={{
            transform: `translateX(${
              scrollPosition < 9821
                ? 0
                : scrollPosition >= 9821 && scrollPosition < 10617
                ? 0 - (window.scrollY - 9821) * 0.1256281407
                : -100
            }%)`,
          }}
        />
        {/* 796 */}
        {/* 오른쪽 가림막 */}
        <div
          className="section07-img-right"
          style={{
            transform: `translate(${
              scrollPosition < 9821
                ? 0
                : scrollPosition > 9821 && scrollPosition < 10617
                ? 0 + (window.scrollY - 9821) * 0.1256281407
                : 100
            }%)`,
          }}
        />
      </div>
    </section>
  );
}

Section07.propTypes = {
  scrollPosition: PropTypes.number.isRequired,
};
