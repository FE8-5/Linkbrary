import { useEffect, useRef, useState } from 'react';
import { DropDownBar, DropDownContainer, DropDownSelect } from './DropDownStyle';
import kebabIc from '../../../assets/Icons/kebab.png';

interface ItemCardProps {
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function DropDownKebabIcon({ setIsDeleteModalOpen, setIsEditModalOpen }: ItemCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const openEditModal = () => {
    setIsEditModalOpen(true);
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
          <DropDownSelect onClick={openDeleteModal}>삭제하기</DropDownSelect>
          <DropDownSelect onClick={openEditModal}>수정하기</DropDownSelect>
        </DropDownBar>
      )}
    </DropDownContainer>
  );
}

export default DropDownKebabIcon;
