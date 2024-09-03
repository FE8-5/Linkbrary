import styled from 'styled-components';

// 로고 버튼 스타일 정의
export const StyledLogoButton = styled.button`
  background: none; // 배경 없음
  border: none; // 테두리 없음
  cursor: pointer; // 클릭 가능한 커서
  padding: 0; // 패딩 없음

  // 로고 이미지 스타일
  img {
    width: 21rem; // 로고의 너비 조절
    height: auto; // 비율 유지
  }
`;
