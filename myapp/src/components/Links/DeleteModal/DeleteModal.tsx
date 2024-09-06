import styled from 'styled-components';
import CommonModal from '../../@Shared/CommonModal/CommonModal';
import Button from '../../@Shared/Buttons/Button/Button';
import { LinkRes } from '../../../types/linkTypes';

interface DeleteModalProps {
  item: LinkRes;
  isModalOpen: boolean;
  closeModal: () => void;
  onDelete: () => void;
}

export const LinkDeleteTitle = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #373740;
`;

export const LinkDeleteURL = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--gray40);
  margin: 8px 0 24px;
`;
const DeleteModal = ({ item, isModalOpen, closeModal, onDelete }: DeleteModalProps) => {
  return (
    <>
      <CommonModal isModalOpen={isModalOpen} closeModal={closeModal}>
        <LinkDeleteTitle>링크 삭제</LinkDeleteTitle>
        <LinkDeleteURL>{item.url}</LinkDeleteURL>
        <Button
          onClick={onDelete}
          size={{ width: '28rem', height: '5.1rem' }}
          padding={{ vertical: '1.6rem', horizontal: '2rem' }}
          fontSize="1.6rem">
          삭제하기
        </Button>
      </CommonModal>
    </>
  );
};

export default DeleteModal;
