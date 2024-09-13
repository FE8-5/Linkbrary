import styled from 'styled-components';
import { BREAKPOINTS } from '../../../constatnts/Breakpoint';

// 로그인 컨테이너 스타일
export const StyledLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto; // 중앙 정렬

  // 모바일에서 최대 너비와 상단 여백 설정
  max-width: 32.5rem;
  margin-top: 12rem;
  margin-bottom: 20rem;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    // 태블릿에서 최대 너비와 상단 여백 설정
    max-width: 40rem;
    margin-top: 20rem;
  }

  @media (min-width: ${BREAKPOINTS.largeDesktop}) {
    // 데스크탑에서 최대 너비와 상단 여백 설정
    max-width: 40rem;
    margin-top: 20rem;
  }
`;
