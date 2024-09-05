import { useEffect, useRef, useState } from 'react';
import { deleteLink } from '../../../apis/LinksPageApi/linkApi';
import { LinkRes } from '../../../types/linkTypes';
import { DropDownBar, DropDownContainer, DropDownSelect } from './DropDownStyle';
import kebabIc from '../../../assets/Icons/kebab.png';

interface ItemCardProps {
  item: LinkRes;
}

function DropDownKebabIcon({ item }: ItemCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDelete = () => {
    // TODO : 지금은 바로 삭제하지만 Modal 공통 컴포넌트 완성 시 모달창 통하여 삭제 기능 구현 예정
    deleteLink(item.id);
  };

  const handleEdit = () => {
    // TODO : 추후 API 연동하여 수정 기능 추가 필요
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <DropDownContainer ref={dropdownRef} onClick={toggle}>
      <img src={kebabIc} alt="링크카드 케밥 메뉴 아이콘" width={21} height={17} />
      {isOpen && (
        <DropDownBar>
          <DropDownSelect onClick={handleDelete}>삭제하기</DropDownSelect>
          <DropDownSelect onClick={handleEdit}>수정하기</DropDownSelect>
        </DropDownBar>
      )}
    </DropDownContainer>
  );
}

export default DropDownKebabIcon;
