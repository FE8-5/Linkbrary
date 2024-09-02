import React, { useState } from 'react';
import { StyledButton } from './ButtonStyle';

/**
 * 코드가 복잡하여 해당 컴포넌트의 사용 예제를 만들어두었습니다.
 * ButtonExample 컴포넌트를 확인해보세요.
 */

// Button 컴포넌트의 props 정의
export interface ButtonProps {
  onClick?: () => void; // 버튼 클릭 시 호출되는 핸들러 함수
  children: React.ReactNode;
  // 버튼의 자식 노드로 버튼에 표시할 내용
  // 일반적으로 텍스트나 아이콘이 포함됩니다.
  size?: {
    width?: string;
    height?: string;
  };
  // 버튼의 크기를 설정하는 객체
  // - `width`: 버튼의 너비를 설정합니다. (예: '100px')
  // - `height`: 버튼의 높이를 설정합니다. (예: '40px')
  padding?: {
    vertical?: string;
    horizontal?: string;
  };
  // 버튼의 패딩을 설정하는 객체
  // - `vertical`: 버튼의 수직 패딩을 설정합니다. (예: '8px')
  // - `horizontal`: 버튼의 수평 패딩을 설정합니다. (예: '16px')
  fontSize?: string; // 버튼 텍스트의 폰트 크기를 설정합니다. (예: '16px')
  active?: boolean;
  // 버튼이 클릭된 상태인지 여부를 나타냅니다.
  // 버튼이 활성화된 상태일 때 해당 prop을 통해 스타일이 변경됩니다.
  disabled?: boolean;
  // 버튼이 비활성화된 상태인지 여부를 나타냅니다.
  // 버튼이 비활성화된 상태에서는 클릭이 불가능하며 스타일이 변경됩니다.
}

/**
 * Button 컴포넌트는 다양한 상태와 스타일을 지원하는 버튼을 렌더링합니다.
 *
 * @param onClick - 버튼 클릭 시 호출되는 함수
 * @param children - 버튼에 표시할 내용
 * @param size - 버튼의 너비와 높이 설정
 * @param padding - 버튼의 패딩 설정
 * @param fontSize - 버튼 텍스트의 폰트 크기 설정
 * @param active - 버튼의 활성화 상태
 * @param disabled - 버튼의 비활성화 상태
 */
const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  size = {},
  padding = {},
  fontSize = '16px',
  active = false,
  disabled = false,
}) => {
  // 현재 버튼의 active 상태를 관리하는 상태 훅입니다.
  const [isActive, setIsActive] = useState(active);

  // 버튼 클릭 시 호출되는 함수입니다. 클릭 시 버튼의 active 상태를 토글합니다.
  const handleClick = () => {
    if (!disabled) {
      setIsActive(!isActive);
      if (onClick) onClick();
    }
  };

  return (
    <StyledButton
      onClick={handleClick} // 클릭 시 상태 토글 및 클릭 핸들러 호출
      size={size}
      padding={padding}
      fontSize={fontSize}
      active={isActive} // 현재 active 상태를 전달
      disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
