import { useState } from 'react';
import addIcon from '../../../assets/Icons/add.png';
import { PlusIcon, AddFolderButton } from './AddFolderBtnStyle';
import AddFolderModal from './AddFolderModal/AddFolderModal';

const AddFolderBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchAddFolder = async (name: string) => {
    setIsModalOpen(true);
  };

  const handleAddFolder = () => {
    fetchAddFolder('name');
  };

  return (
    <>
      <AddFolderButton onClick={handleAddFolder}>
        <span> 폴더추가</span>
        <PlusIcon src={addIcon} />
      </AddFolderButton>
      <AddFolderModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default AddFolderBtn;
