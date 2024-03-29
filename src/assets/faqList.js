const faqList = {
  top10: [
    {
      id: 0,
      q1: "오픈뱅킹 자동이체 등록 문자를 받았어요.",
      q2: "계좌가 물음표(?)로 보여요.",
      q3: "토스프라임이 뭔가요?",
      q4: "토스증권 수수료와 세금이 궁금해요!",
      q5: "계좌 연결 후 송금이 안돼요.",
      q6: "토스뱅크 계좌 압류를 해제하려면 어떻게 해야 하나요?",
      q7: "토스뱅크통장의 각종 증명서는 어떻게  발급받을 수 있나요?",
      q8: "카드 혜택 추천이란 무엇인가요?",
      q9: "토스뱅크의 한도제한계좌는 어떻게 해제할 수 있나요?",
      q10: "토스뱅크카드의 발급/배송상태 조회는 어떻게 할 수 있나요?",
    },
  ],
  send: [
    {
      id: 1,
      q1: "오픈뱅킹 자동이체 등록 문자를 받았어요.",
      q2: "토스 앱을 통해 돈을 잘못 보냈는데 어떻게 돌려받을 수 있을까요?",
      q3: "토스뱅크 계좌의 송금한도는 어떻게 되나요?",
      q4: "토스 앱에서 송금을 한 뒤 송금확인증은 어떻게 발급받나요?",
      q5: "토스뱅크의 이체한도를 초과했는데, 한도를 어떻게 증액하나요?",
      q6: "토스뱅크의 자동이체 설정은 어떻게 하나요?",
      q7: "송금이 안 된다는 메시지가 뜨는데 어떤 문제일까요?",
      q8: "토스페이로 결제한 내역 현금영수증 어떻게 발행하나요?",
      q9: "연락처 송금했는데 친구가 토스 사용자가 아니래요. 취소 어떻게 하나요?",
      q10: "은행 별 점검시간이 어떻게 되나요?",
    },
  ],
  account: [
    {
      id: 2,
      q1: "계좌가 물음표(?)로 보여요.",
      q2: "통장 사본은 어디서 받을 수 있나요?",
      q3: "연말정산 월세 세액 공제 위해서 송금확인증 발급이 필요해요.",
      q4: "토스뱅크의 입출금통장 거래내역서를 어떻게 받나요?",
      q5: "토스 앱에 계좌나 카드를 어떻게 연결하나요?",
      q6: "토스뱅크의 이체한도를 초과했는데, 한도를 어떻게 증액하나요?",
      q7: "송금이 안 된다는 메시지가 뜨는데 어떤 문제일까요?",
      q8: "은행 별 점검시간이 어떻게 되나요?",
      q9: "토스뱅크 입출금통장은 여러개 개설할 수 있나요?",
      q10: "토스뱅크에서 평생 계좌번호를 만들 수 있나요?",
    },
  ],
  card: [
    {
      id: 3,
      q1: "토스머니카드 어떻게 해지하나요?",
      q2: "만 14세 미만 자녀와의 가족관계 확인에 실패했어요. 자녀의 가입을 어떻게 허락할 수 있나요?",
      q3: "토스신용카드 어떻게 신청하나요?",
      q4: "토스뱅크카드의 카드번호는 어디서 확인할 수 있나요 ?",
      q5: "토스유스카드로 온라인 결제・간편 결제를 할 수 있나요?",
      q6: "토스 앱에서 ATM 출금 어떻게 하나요?",
      q7: "토스뱅크카드 이용한도가 어떻게 되나요?",
      q8: "토스뱅크카드를 분실했는데 어떻게 재발급 받을 수 있나요?",
      q9: "토스신용카드를 잃어버렸어요. 분실신고 어떻게 하나요?",
      q10: "토스뱅크카드의 캐시백은 언제 지급되나요?",
    },
  ],
  pay: [
    {
      id: 4,
      q1: "토스로 결제할 때 카드 등록 후 사용할 수 있나요?",
      q2: "토스 결제 한도는 어떻게 되나요?",
      q3: "토스페이먼츠로 결제한 내역 어디에서 확인할 수 있나요?",
      q4: "후불결제 이용이 궁금해요.",
      q5: "토스 결제 제휴 문의를 하고 싶어요.",
      q6: "토스페이로 결제한 내역 현금영수증 어떻게 발행하나요?",
      q7: "QR코드 송금 어떻게 이용 하나요?",
      q8: "토스로 결제하다가 비밀번호를 여러번 틀려서 계정이 잠겼는데요. 어떻게 풀 수 있나요?",
      q9: "전 토스로 결제한 적 없는데, 왜 카드 결제내역에 '토스'가 있나요?",
      q10: "토스로 결제한 내역 어디서 확인 하나요?",
    },
  ],
  invest: [
    {
      id: 5,
      q1: "토스증권 수수료와 세금이 궁금해요!",
      q2: "토스 앱을 이용한 ATM 출금 수수료 정책은 어떻게 되나요?",
      q3: "입출금은 어떻게 하나요?",
      q4: "주식 출고 신청은 어떻게 하나요?",
      q5: "미국에 세금을 납부하고 있어서 해외주식 거래를 할 수 없다고 나와요.",
      q6: "토스증권에서 양도소득세 대행신고 신청이 안될 수 있나요?",
      q7: "주식 모으기 설정을 변경하고 싶어요.",
      q8: "해외주식 판매 후 출금은 언제 가능한가요?",
      q9: "거래내역은 어떻게 확인하나요?",
      q10: "환전 서비스는 어떻게 이용하나요?",
    },
  ],
  insurance: [
    {
      id: 6,
      q1: "보험 상담 취소, 어떻게 하나요?",
      q2: "병원비 돌려받기 서비스는 어떻게 이용하나요?",
      q3: "설계사번호는 어디서 확인하나요?",
      q4: "토스보험파트너가 무엇인가요?",
      q5: "토스보험파트너 앱에서 패널티를 적용 받았다는데, 패널티가 뭔가요?",
      q6: "어떻게 토스보험파트너 블루회원이 될 수 있나요?",
      q7: "내 보험 서비스가 무엇인가요?",
      q8: "토스보험파트너 탈퇴, 어떻게 하나요?",
      q9: "타인 명의 휴대폰을 사용하고 있는데 어떻게 가입하나요?",
      q10: "내 보험 정보를 추가하거나 삭제할 수 있나요?",
    },
  ],
  inquiry: [
    {
      id: 7,
      q1: "토스프라임이 뭔가요?",
      q2: "토스 앱을 통해 돈을 잘못 보냈는데 어떻게 돌려받을 수 있을까요?",
      q3: "본인 인증을 위해 신분증 제출하라는데, 어떻게 하나요?",
      q4: "오픈소스 라이선스",
      q5: "행운복권 서비스가 안보여요. 어디서 이용할 수 있나요?",
      q6: "환전 서비스는 어떻게 이용하나요?",
      q7: "만 14세 미만 자녀와의 가족관계 확인에 실패했어요. 자녀의 가입을 어떻게 허락할 수 있나요?",
      q8: "공동인증서 어떻게 불러오나요?",
      q9: "중고거래 사기로 안심보상제 접수 후 서류 제출 안내를 받았어요. 어떤 서류가 필요한가요?",
      q10: "토스 안심 보상제 어떻게 신청하나요?",
    },
  ],
  reward: [
    {
      id: 8,
      q1: "중고거래 사기로 안심보상제 접수 후 서류 제출 안내를 받았어요. 어떤 서류가 필요한가요?",
      q2: "토스 안심 보상제 어떻게 신청하나요?",
      q3: "사기 의심 계좌, 사기 의심 사이렌이란 무엇인가요?",
      q4: "토스유스카드 분실 후 모르는 결제가 발생했는데 어떻게 해야 하나요?",
      q5: "중고거래 사기의 경우, 모두 보상 받을 수 있나요?",
      q6: "토스 안심 보상제가 무엇인가요?",
      q7: "중고거래 중 사기를 당했는데 지급정지가 가능한가요?",
      q8: "보이스피싱을 당했어요. 어떻게 해결할 수 있을까요?",
      q9: "명의도용, 보이스피싱 피해의 경우, 모두 보상 받을 수 있나요?",
      q10: "중고거래 사기로 안심보상제 접수했는데, 확약서 관련 궁금한 점이 있어요.",
    },
  ],
  loan: [
    {
      id: 9,
      q1: "금리인하 요구권은 무엇인가요?",
      q2: "토스뱅크 마이너스통장, 비상금대출 이자는 어떻게 계산되나요?",
      q3: "토스뱅크 사잇돌대출이 무엇인가요?",
      q4: "사장님 대출을 진행했는데 휴업, 폐업된 상태에요. 기한 연장이 가능할까요?",
      q5: "토스뱅크 대출 만기 연장 신청도 가능한가요?",
      q6: "토스뱅크의 내 한도 관리 서비스란 무엇인가요?",
      q7: "마이너스 통장대출을 이용하고 있는데 대출한도를 줄이고 싶어요.",
      q8: "토스뱅크 대출 상환 방식을 변경 할 수 있나요?",
      q9: "사장님 대환대출 기간이 10년인데, 하나의 대출에 상환 방법이 2가지 맞나요?",
      q10: "토스뱅크 대출 주택 구입 금지 의무 위반시 보유한 대출 모두 다 상환해야 하나요?",
    },
  ],
  etc: [
    {
      id: 10,
      q1: "토스모바일(알뜰폰) 요금제 이용이 궁금해요.",
      q2: "토스에 직접 방문해서 상담 받을 수 있나요?",
      q3: "불편사항은 어디서 해결할 수 있나요?",
      q4: "이전에 토스를 통해 투자했어요. 어떻게 확인하나요?",
      q5: "인터뷰는 어떻게 참여할 수 있나요?",
      q6: "사용자 인터뷰를 제안받았어요. 어떤 인터뷰인가요?",
    },
  ],
};

export default faqList;
