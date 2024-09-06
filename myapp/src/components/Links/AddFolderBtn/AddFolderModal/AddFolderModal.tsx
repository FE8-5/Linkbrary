import { ChangeEvent, useState } from 'react';
import Button from '../../../@Shared/Buttons/Button/Button';
import CommonModal from '../../../@Shared/CommonModal/CommonModal';
import { AddFolderName, Title } from './AddFolderModalStyle';
import { addFolder } from '../../../../apis/LinksPageApi/forderApi';
interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const AddFolderModal = ({ isModalOpen, closeModal }: ModalProps) => {
  const [value, setValue] = useState<string>('');

  const fetchAddFolder = async (name: string) => {
    try {
      await addFolder(name);
    } catch (error) {
      console.error('오류가 발생했습니다!!');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleCloseModal = () => {
    setValue('');
    closeModal();
  };
  const handleClick = () => {
    if (value) {
      fetchAddFolder(value);
      setValue('');
      closeModal();
    } else {
      alert('폴더이름을 입력해주세요!');
    }
  };

  return (
    <CommonModal isModalOpen={isModalOpen} closeModal={handleCloseModal}>
      <Title>폴더 추가</Title>
      <AddFolderName type="text" placeholder="내용 입력" value={value} onChange={handleChange} />
      <Button size={{ width: '100%', height: '5rem' }} onClick={handleClick}>
        추가하기
      </Button>
    </CommonModal>
  );
};

export default AddFolderModal;
