import React from "react";
import { useResolvedPath } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  const { pathname } = useResolvedPath();

  return (
    <div className={`footer ${pathname === "/" ? "dark" : ""}`}>
      <div className="footerWrap">
        <div
          className={`footerWrap-footerItems ${pathname === "/" ? "dark" : ""}`}
        >
          <ul>
            <li>서비스</li>
            <li>공지사항</li>
            <li>자주 묻는 질문</li>
            <li>공동인증서 관리</li>
            <li>계정 일시잠금</li>
            <li>고객센터</li>
            <li>브랜드 리소스센터</li>
            <li>토스의 개인정보 보호</li>
          </ul>
          <ul>
            <li>회사</li>
            <li>회사소개</li>
            <li>토스페이먼츠</li>
            <li>토스인슈어런스</li>
            <li>토스증권</li>
            <li>토스씨엑스</li>
            <li>토스뱅크</li>
            <li>토스플레이스</li>
            <li>채용</li>
            <li>블로그</li>
            <li>공고</li>
          </ul>
          <ul>
            <li>문의</li>
            <li>사업 제휴</li>
            <li>광고 문의</li>
            <li>인증 사업 문의</li>
            <li>마케팅 PR</li>
            <li>IR</li>
          </ul>
          <ul>
            <li>고객센터</li>
            <li>전화: 1599-4905(24시간 연중무휴)</li>
            <li>이메일(고객전용): support@toss.im</li>
            <li>이메일(외부기관전용): safe@toss.im</li>
            <li>민원 접수</li>
          </ul>
        </div>
        <address className="footerWrap-info">
          <strong>(주)비바리퍼블리카</strong> <br />
          사업자 등록번호 : 120-88-01280 | 대표 : 이승건
          <br />
          호스팅 서비스 : 주식회사 비바리퍼블리카 | 통신판매업 신고번호 :
          2014-서울강남-03377
          <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1208801280">
            &nbsp; 사업자정보확인
          </a>
          <br />
          06236 서울특별시 강남구 테헤란로 142, 12층 (역삼동, 아크플레이스)
          <br />
          고객센터 : 서울특별시 강남구 테헤란로 133, 9층 (역삼동,
          한국타이어빌딩)
        </address>
        <ul className="footerWrap-terms">
          <li>서비스 이용약관</li>
          <li>통합 금융정보 서비스 약관</li>
          <li>마이데이터 서비스 이용약관</li>
          <li>이용자의 권리 및 유의사항</li>
          <li>
            <strong>개인정보 처리방침</strong>
          </li>
          <li>
            <strong>채용팀 개인정보 처리방침</strong>
          </li>
          <li>영상정보처리기기 운영 관리 방침</li>
          <li>위치기반서비스 이용약관</li>
          <li>가맹점 고지사항</li>
          <li>토스 전자서명인증업무준칙</li>
          <li>토스 전자인증서비스 약관</li>
          <li>금융소비자보호</li>
        </ul>
        <ul className="footerWrap-sns">
          <li>
            <a href="https://www.facebook.com/toss.revolution">
              <img
                src={`${process.env.PUBLIC_URL}/images/icn-facebook.svg`}
                alt="페이스북"
              />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/toss.revolution">
              <img
                src={`${process.env.PUBLIC_URL}/images/icn-blog.svg`}
                alt="블로그"
              />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/toss.revolution">
              <img
                src={`${process.env.PUBLIC_URL}/images/icn-naver.svg`}
                alt="네이버"
              />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/toss.revolution">
              <img
                src={`${process.env.PUBLIC_URL}/images/icn-twitter.svg`}
                alt="트위터"
              />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/toss.revolution">
              <img
                src={`${process.env.PUBLIC_URL}/images/icn-instagram.svg`}
                alt="인스타그램"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
