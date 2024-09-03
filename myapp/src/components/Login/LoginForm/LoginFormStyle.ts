import styled from 'styled-components';
import { BREAKPOINTS } from '../../../constatnts/Breakpoint';

// 로그인 폼 스타일
export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 32.5rem; // 모바일에서 최대 너비
  margin: 0 auto; // 폼을 중앙에 배치

  @media (min-width: ${BREAKPOINTS.tablet}) {
    max-width: 40rem; // 태블릿 및 데스크탑에서 최대 너비
  }
`;

// 로그인 폼 그룹 스타일
export const LoginFormGroup = styled.div`
  margin-bottom: 2.4rem; // 그룹 간 간격
`;

// 레이블 스타일
export const Label = styled.label`
  display: block;
  font-weight: 400;
  font-size: 1.4rem;
  margin-bottom: 1.2rem; // 레이블과 입력 필드 간의 간격
`;

// 입력 필드 스타일
export const Input = styled.input`
  width: 100%;
  border: 1px solid var(--primary);
  border-radius: 0.8rem;
  font-size: 1.6rem;

  &::placeholder {
    color: #373740; // 플레이스홀더 텍스트 색상
  }
`;

// 비밀번호 영역 (가시성 기능을 넣기 위해)
export const PasswordContainer = styled.div`
  position: relative;
`;

// 비밀번호 표시 토글 버튼
export const TogglePasswordButton = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: none;
  cursor: pointer;
`;
