import React, { useRef } from "react";
import Title from "../../components/Title";
import useVisible from "../../customhook/useVisible";
import "./Section05.scss";

export default function Section05() {
  const titRef = useRef(null);
  const contRef = useRef(null);

  const titVisible = useVisible(titRef);
  const contVisible = useVisible(contRef);

  return (
    <div className="section05">
      <div className="section05-wrap">
        <Title className={titVisible ? "on" : ""} ref={titRef}>
          <span>신용</span>
          <p>
            금융 생활의 첫 걸음, <br />
            신용점수를 미리 <br />
            무료로 관리하세요
          </p>
        </Title>
        <div
          className={`section05-wrap-list ${contVisible ? "on" : ""}`}
          ref={contRef}
        >
          {/* 아이템 1 */}
          <div className="section05-wrap-list-item">
            <img
              src={`${process.env.PUBLIC_URL}/images/home/section05-img01.png`}
              alt="신용점수 이미지"
            />
            <span>내 신용점수</span>
            <p>
              언제 어디서든, 원할 때 간편하게 <br /> KCB, NICE 신용점수를 한
              곳에서 확인할 수 <br className="br02" />
              있어요.
            </p>
          </div>
          {/* 아이템 2 */}
          <div className="section05-wrap-list-item">
            <img
              src={`${process.env.PUBLIC_URL}/images/home/section05-img02.png`}
              alt="신용점수 이미지"
            />
            <span>신용점수 올리기</span>
            <p>
              통신비, 일반 납부내역 등의 서류를 <br />
              토스에서 바로 제출해 신용점수를 올릴 수 <br className="br02" />
              있어요.
            </p>
          </div>
          {/* 아이템 3 */}
          <div className="section05-wrap-list-item">
            <img
              src={`${process.env.PUBLIC_URL}/images/home/section05-img03.png`}
              alt="신용점수 이미지"
            />
            <span>신용관리 알림</span>
            <p>
              신용점수에 변동이 생기면 토스가 알람을 <br className="br01" />
              보내드려요.
              <br /> 나의 신용점수가 바뀔 때마다 바로 확인하세요.
            </p>
          </div>
          {/* 아이템 4 */}
          <div className="section05-wrap-list-item">
            <img
              src={`${process.env.PUBLIC_URL}/images/home/section05-img04.png`}
              alt="신용점수 이미지"
            />
            <span>신용관리 팁</span>
            <p>
              신용점수 관리가 막막하다면? <br />
              신용관리 팁 콘텐츠를 한번 읽어보세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
