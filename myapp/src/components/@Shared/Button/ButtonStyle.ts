import styled from 'styled-components';
import { ButtonProps } from './Button';

// 버튼 스타일 정의 (prop을 전달해주지 않을 경우 기본값으로 적용)
export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  background: ${props =>
    props.disabled
      ? 'var(--lightgray)' // 비활성화 상태에서는 그라데이션 대신 단색
      : props.active
        ? `linear-gradient(to right, var(--active-start), var(--active-end))` // 활성화 상태일 때 그라데이션 배경
        : `linear-gradient(to right, var(--primary), var(--secondary))`}; // 기본 상태일 때 그라데이션 배경
  color: var(--white);
  border: none;
  border-radius: 8px;
  width: ${props => props.size?.width || 'auto'}; // 버튼의 너비
  height: ${props => props.size?.height || 'auto'}; // 버튼의 높이
  padding: ${props => `${props.padding?.vertical || '10px'} ${props.padding?.horizontal || '16px'}`};
  // padding을 수직(vertical)과 수평(horizontal)으로 분리하여 설정
  font-size: ${props => props.fontSize || '14px'}; // 버튼 텍스트의 폰트 크기
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')}; // 버튼의 활성화 여부에 따라 마우스 커서를 변경
  opacity: ${props => (props.disabled ? 0.65 : 1)}; // 버튼의 불투명도
  transition: background-color 0.3s ease; // 배경 색상 변경 시 애니메이션

  &:hover {
    background: ${props =>
      props.disabled
        ? undefined // 비활성화 상태일 때 호버 효과 없음 ('undefined'는 배경 색상을 설정하지 않는다는 의미)
        : props.active
          ? `linear-gradient(to right, var(--active-start), var(--active-end))` // active 상태일 때 호버 효과
          : `linear-gradient(to right, var(--primary), var(--secondary))`}; // 기본 상태일 때 호버 효과
  }
`;
