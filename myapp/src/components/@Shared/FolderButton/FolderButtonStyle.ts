import styled from 'styled-components';

// 배경색과 글자색은 props로 받아 동적으로 설정됩니다.
export const StyledFolderButton = styled.button<{ backgroundColor: string; color: string }>`
  background-color: ${props => props.backgroundColor}; // 버튼 배경색 설정
  color: ${props => props.color}; // 버튼 텍스트 색상 설정
  border: 0.1rem solid var(--primary); // 버튼 테두리
  padding: 1rem 0.6rem;
  font-size: 1.4rem;
  border-radius: 0.5rem;
  cursor: pointer;
  // 버튼에 마우스 커서가 올 때 손 모양으로 변경
  transition:
    background-color 0.3s,
    color 0.3s;
  // 배경색과 텍스트 색상 변경 시 부드러운 전환 효과

  &:hover {
    background-color: ${props =>
      props.backgroundColor === 'var(--white)' ? 'var(--gray30)' : 'var(--primary)'}; // 호버 시 배경색
    color: ${props => (props.backgroundColor === 'var(--white)' ? '#000000' : 'var(--white)')}; // 호버 시 텍스트 색상
  }
`;
