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
  position: relative;
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
  background-color: ${props => (props.value ? 'var(--gray20)' : 'var(--white)')};
  // 입력된 내용에 따라 배경색 설정
  /**
   * @TODO
   * 입력 필드에 이메일을 입력하면 포커스 아웃해도 배경색이 사라지지 않는 버그가 있습니다.
   * 직접 입력했을 때는 문제가 없지만 자동완성 기능을 이용했을 경우 이와 같은 버그가 발생합니다.
   */

  &::placeholder {
    color: #373740; // 플레이스홀더 텍스트 색상
  }

  &:focus {
    border-color: var(--primary); // 포커스 시 테두리 색상
    background-color: var(--gray20); // 포커스 시 배경색 변경
  }
`;

// 오류 메시지 스타일
export const ErrorText = styled.span`
  color: var(--red);
  font-size: 1rem;
  position: absolute;
  bottom: -1.5rem;
  left: 0.5rem;
`;

// 비밀번호 영역 (가시성 기능을 넣기 위해)
export const PasswordArea = styled.div`
  position: relative;
  display: flex;
  align-items: center;
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
