import CommonModal from '../../@Shared/CommonModal/CommonModal';
import Button from '../../@Shared/Buttons/Button/Button';
import { LinkRes } from '../../../types/linkTypes';
import { LinkDeleteTitle, LinkDeleteURL } from './DeleteModalStyle';

interface DeleteModalProps {
  item: LinkRes;
  onDelete: () => void;
  isModalOpen: boolean;
  closeModal: () => void;
}

const DeleteModal = ({ item, onDelete, isModalOpen, closeModal }: DeleteModalProps) => {
  const handleCloseModal = () => {
    closeModal();
  };
  return (
    <CommonModal isModalOpen={isModalOpen} closeModal={handleCloseModal}>
      <LinkDeleteTitle>링크 삭제</LinkDeleteTitle>
      <LinkDeleteURL>{item.url}</LinkDeleteURL>
      <Button
        backgroundColor="var(--red)"
        hoverBackgroundColor="var(--red-hover)"
        onClick={onDelete}
        size={{ width: '28rem', height: '5.1rem' }}
        padding={{ vertical: '1.6rem', horizontal: '2rem' }}
        fontSize="1.6rem">
        삭제하기
      </Button>
    </CommonModal>
  );
};

export default DeleteModal;
