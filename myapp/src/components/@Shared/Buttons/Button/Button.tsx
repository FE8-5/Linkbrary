import React, { useState } from 'react';
import { StyledButton } from './ButtonStyle';
import { ButtonProps } from '../../../../types/buttonTypes';

/**
 * 코드가 복잡하여 해당 컴포넌트의 사용 예제를 만들어두었습니다.
 * ButtonExample 컴포넌트를 확인해보세요.
 */

/**
 * Button 컴포넌트는 다양한 상태와 스타일을 지원하는 버튼을 렌더링합니다.
 *
 * @param onClick - 버튼 클릭 시 호출되는 함수
 * @param type - 버튼의 타입
 * @param children - 버튼에 표시할 내용
 * @param size - 버튼의 너비와 높이 설정
 * @param padding - 버튼의 패딩 설정
 * @param fontSize - 버튼 텍스트의 폰트 크기 설정
 * @param active - 버튼의 활성화 상태
 * @param disabled - 버튼의 비활성화 상태
 * @param backgroundColor - 사용자 지정 배경색
 * @param hoverBackgroundColor - 호버 시 사용자 지정 배경색
 */
const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  size = {},
  padding = {},
  fontSize = '1.6rem',
  disabled = false,
  backgroundColor,
  hoverBackgroundColor,
}) => {
  // 버튼의 클릭 여부를 상태 관리로 전달
  const [isActive, setIsActive] = useState(false);

  // 버튼 클릭 시 호출되는 함수입니다.
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && onClick) onClick(e);
  };

  // 마우스 눌렀을 때 상태를 true로 설정
  const handleMouseDown = () => setIsActive(true);
  // 마우스 버튼을 떼었을 때 상태를 false로 설정
  const handleMouseUp = () => setIsActive(false);

  return (
    <StyledButton
      onClick={handleClick} // 클릭 시 상태 토글 및 클릭 핸들러 호출
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      size={size}
      padding={padding}
      fontSize={fontSize}
      active={isActive} // 현재 active 상태를 전달
      disabled={disabled}
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}>
      {children}
    </StyledButton>
  );
};

export default Button;
