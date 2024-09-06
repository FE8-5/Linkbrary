import styled from 'styled-components';
import Button from '../../@Shared/Buttons/Button/Button';
import { LinkRes } from '../../../types/linkTypes';
import CommonModal from '../../@Shared/CommonModal/CommonModal';
import { useState } from 'react';
import { editLink } from '../../../apis/LinksPageApi/linkApi';

interface EditModalProps {
  item: LinkRes;
  isModalOpen: boolean;
  closeModal: () => void;
  setIsNewItem: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LinkEditTitle = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #373740;
`;

export const LinkEditURL = styled.input`
  border-radius: 8px;
  border: 1px solid var(--gray30);
  width: 28rem;
  height: 6rem;
  padding: 1.8rem 1.5rem;
  margin: 2.4rem 0 1.5rem;
  font-size: 1.6rem;
  font-weight: 400;
`;
const EditModal = ({ item, isModalOpen, closeModal, setIsNewItem }: EditModalProps) => {
  const [newURL, setNewURL] = useState(item.url);
  const [isLoadingEdit, setIsLoadingEdit] = useState(false);
  console.log(item.id);
  const handleURLChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewURL(event.target.value);
  };

  const onEdit = () => {
    if (isLoadingEdit) return;
    setIsLoadingEdit(true);
    editLink(item.id, newURL)
      .then(() => {
        setIsNewItem(prev => !prev);
      })
      .catch(e => {
        console.error('Favorite 상태 변경 실패', e);
      })
      .finally(() => {
        setIsLoadingEdit(false);
        closeModal();
      });
  };

  return (
    <>
      <CommonModal isModalOpen={isModalOpen} closeModal={closeModal}>
        <LinkEditTitle>링크 수정</LinkEditTitle>
        <LinkEditURL value={newURL} onChange={handleURLChange}></LinkEditURL>
        <Button
          onClick={onEdit}
          size={{ width: '28rem', height: '5.1rem' }}
          padding={{ vertical: '1.6rem', horizontal: '2rem' }}
          fontSize="1.6rem">
          수정하기
        </Button>
      </CommonModal>
    </>
  );
};

export default EditModal;
