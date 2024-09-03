import styled from 'styled-components';

// 로그인 폼 스타일
export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto; // 폼을 중앙에 배치
`;

// 로그인 폼 그룹 스타일
export const LoginFormGroup = styled.div`
  width: 100%;
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
  padding: 1.8rem 1.5rem;
  font-size: 1.6rem;
  border: 1px solid var(--gray30);
  border-radius: 0.8rem;
  outline: none;

  &::placeholder {
    color: #373740; // 플레이스홀더 텍스트 색상
  }

  &:focus {
    border-color: var(--primary); // 포커스 시 테두리 색상
  }
`;

// 비밀번호 영역 (가시성 기능을 넣기 위해)
export const PasswordArea = styled.div`
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
