import Button from '../../@Shared/Buttons/Button/Button';
import { LinkRes } from '../../../types/linkTypes';
import CommonModal from '../../@Shared/CommonModal/CommonModal';
import { useState } from 'react';
import { editLink } from '../../../apis/LinksPageApi/linkApi';
import { LinkEditTitle, LinkEditURL } from './EditModalStyle';

interface EditModalProps {
  item: LinkRes;
  setIsNewItem: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
  closeModal: () => void;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditModal = ({ item, setIsNewItem, isModalOpen, closeModal, setIsEditModalOpen }: EditModalProps) => {
  const [newURL, setNewURL] = useState(item.url);
  const [isLoadingEdit, setIsLoadingEdit] = useState(false);
  const handleURLChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewURL(event.target.value);
  };

  const onEdit = () => {
    if (isLoadingEdit) return;
    setIsLoadingEdit(true);
    editLink(item.id, newURL)
      .then(() => {
        if (setIsNewItem) {
          setIsNewItem(prev => !prev);
        }
      })
      .catch(e => {
        console.error('Favorite 상태 변경 실패', e);
      })
      .finally(() => {
        setIsLoadingEdit(false);
        setIsEditModalOpen(false);
      });
  };

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <CommonModal isModalOpen={isModalOpen} closeModal={handleCloseModal}>
      <LinkEditTitle>링크 수정</LinkEditTitle>
      <LinkEditURL value={newURL} onChange={handleURLChange}></LinkEditURL>
      <Button
        onClick={onEdit}
        isLoading={isLoadingEdit}
        size={{ width: '28rem', height: '5.1rem' }}
        padding={{ vertical: '1.6rem', horizontal: '2rem' }}
        fontSize="1.6rem">
        수정하기
      </Button>
    </CommonModal>
  );
};

export default EditModal;
