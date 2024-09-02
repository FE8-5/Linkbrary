import styled from 'styled-components';
import { BREAKPOINTS } from '../../../constatnts/Breakpoint';

// 배경색과 글자색은 props로 받아 동적으로 설정됩니다.
export const StyledFolderButton = styled.button<{ backgroundColor: string; color: string }>`
  background-color: ${props => props.backgroundColor}; // 버튼 배경색 설정
  color: ${props => props.color}; // 버튼 텍스트 색상 설정
  border: 0.1rem solid var(--primary); // 버튼 테두리
  padding: 1rem 0.6rem; // 모바일 기본 패딩
  height: 2.9rem; // 모바일 기본 높이
  font-size: 1.4rem; // 모바일 기본 글자 크기
  border-radius: 0.5rem;
  cursor: pointer;
  // 버튼에 마우스 커서가 올 때 손 모양으로 변경
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background-color 0.3s,
    color 0.3s;
  // 배경색과 텍스트 색상 변경 시 부드러운 전환 효과

  /* 미디어 쿼리를 사용하여 화면 크기에 따라 버튼 높이 조정 */
  @media (min-width: ${BREAKPOINTS.tablet}) and (max-width: ${BREAKPOINTS.largeDesktop}) {
    height: 3.5rem; // 태블릿과 데스크탑 화면에서 버튼 높이 증가
    font-size: 1.6rem; // 태블릿과 데스크탑 화면에서 글자 크기 증가
  }

  &:hover {
    background-color: ${props =>
      props.backgroundColor === 'var(--white)' ? 'var(--gray30)' : 'var(--primary)'}; // 호버 시 배경색
    color: ${props => (props.backgroundColor === 'var(--white)' ? '#000000' : 'var(--white)')}; // 호버 시 텍스트 색상
  }
`;
