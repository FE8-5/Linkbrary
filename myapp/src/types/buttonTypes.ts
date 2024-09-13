export interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // 버튼 클릭 이벤트 핸들러
  type?: 'button' | 'submit' | 'reset'; // 버튼 타입
  children: React.ReactNode;
  // 버튼의 자식 노드로 버튼에 표시할 내용
  // 일반적으로 텍스트나 아이콘이 포함됩니다.
  size?: {
    width?: string;
    height?: string;
  };
  // 버튼의 크기를 설정하는 객체
  // - `width`: 버튼의 너비를 설정합니다. (예: '10rem')
  // - `height`: 버튼의 높이를 설정합니다. (예: '4rem')
  padding?: {
    vertical?: string;
    horizontal?: string;
  };
  // 버튼의 패딩을 설정하는 객체
  // - `vertical`: 버튼의 수직 패딩을 설정합니다. (예: '0.8rem')
  // - `horizontal`: 버튼의 수평 패딩을 설정합니다. (예: '1.6rem')
  fontSize?: string; // 버튼 텍스트의 폰트 크기를 설정합니다. (예: '1.6rem')
  $active?: boolean;
  // 버튼이 클릭된 상태인지 여부를 나타냅니다.
  // 버튼이 활성화된 상태일 때 해당 prop을 통해 스타일이 변경됩니다.
  disabled?: boolean;
  // 버튼이 비활성화된 상태인지 여부를 나타냅니다.
  // 버튼이 비활성화된 상태에서는 클릭이 불가능하며 스타일이 변경됩니다.
  backgroundColor?: string; // 버튼 배경색 사용자 지정
  hoverBackgroundColor?: string; // 버튼 호버 시 배경색 지정
  isLoading?: boolean;
}

export interface LogoButtonProps {
  width?: string; // 로고 버튼의 너비
  height?: string; // 로고 버튼의 높이
}

export interface StyledLogoButtonProps {
  width: string;
  height: string;
}
