import React, { useState } from 'react';
import { StyledFolderButton } from './FolderButtonStyle';
import { ACTIVE_BACKGROUND_COLOR, DEFAULT_BACKGROUND_COLOR } from '../../../constatnts/FolderButtonColor';
import { ACTIVE_TEXT_COLOR, DEFAULT_TEXT_COLOR } from '../../../constatnts/FolderButtonColor';

// FolderButton에서 사용할 데이터 타입을 정의
interface FolderButtonData {
  id: number; // 객체를 식별할 ID
  title: string;
  description: string;
  imageSource: string;
  createdAt: number;
  count: number; // 클릭 카운트 (임시로 넣어두었습니다.)
}

// FolderButton이 사용하는 데이터 배열의 타입을 정의합니다.
type FolderButtonDataArray = FolderButtonData[];

// FolderButton 컴포넌트의 props
interface FolderButtonProps {
  onClick: () => void; // 버튼 클릭 시 호출되는 콜백 함수
  children: React.ReactNode; // 버튼에 표시될 텍스트 또는 내용
  data: FolderButtonDataArray; // 버튼에 연관된 데이터 배열
  onDataChange: (newData: FolderButtonDataArray) => void; // 데이터 변경 시 호출되는 콜백 함수
  itemId: number; // 업데이트할 객체의 ID
}

// FolderButton 컴포넌트 정의
const FolderButton: React.FC<FolderButtonProps> = ({ onClick, children, data, onDataChange, itemId }) => {
  // 버튼의 활성화 상태 관리
  const [isActive, setIsActive] = useState(false);

  // 버튼 클릭 시 호출되는 핸들러 함수
  const handleClick = () => {
    setIsActive(!isActive); // 활성화 상태 토글
    onClick(); // 클릭 시 전달된 콜백 호출

    // 데이터 변경 로직
    const newData = data.map(item => (item.id === itemId ? { ...item, count: item.count + 1 } : item));

    onDataChange(newData); // 데이터 변경 콜백 호출
  };

  return (
    <StyledFolderButton
      onClick={handleClick}
      backgroundColor={isActive ? ACTIVE_BACKGROUND_COLOR : DEFAULT_BACKGROUND_COLOR} // 활성화 상태와 기본 상태 배경색 설정
      color={isActive ? ACTIVE_TEXT_COLOR : DEFAULT_TEXT_COLOR} // 활성화 상태와 기본 상태 텍스트 색상 설정
    >
      {children} {/* 버튼에 표시될 내용 (폴더 이름) */}
      {/* 클릭 수를 표시할 수도 있습니다. */}
      <span> (Count: {data.find(item => item.id === itemId)?.count || 0})</span>
    </StyledFolderButton>
  );
};

export default FolderButton;
