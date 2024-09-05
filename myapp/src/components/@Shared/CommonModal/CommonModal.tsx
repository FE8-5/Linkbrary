import Modal from 'react-modal';
import closeIcon from '../../../assets/Icons/close.png';
import { CloseBtn, customModalStyles } from './CommonModalStyle';

interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

const CommonModal = ({ isModalOpen, closeModal, children }: ModalProps) => {
  const handleCloseModal = () => {
    closeModal();
  };
  return (
    <Modal isOpen={isModalOpen} bodyOpenClassName="modal-open" style={customModalStyles}>
      <CloseBtn onClick={handleCloseModal}>
        <img src={closeIcon} />
      </CloseBtn>
      {children}
    </Modal>
  );
};

export default CommonModal;
