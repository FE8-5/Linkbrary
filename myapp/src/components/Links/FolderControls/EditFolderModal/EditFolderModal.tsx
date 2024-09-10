import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import Button from '../../../@Shared/Buttons/Button/Button';
import CommonModal from '../../../@Shared/CommonModal/CommonModal';
import { EditFolderInput, EditFolderTitle } from './EditFolderModalStyle';
import { updateFolder } from '../../../../apis/LinksPageApi/forderApi';
import { GetAllFoldersRes } from '../../../../types/folderTypes';

interface EditModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  folderId: number | undefined;
  setFolderList: Dispatch<SetStateAction<GetAllFoldersRes[] | undefined>>;
}

const EditFolderModal = ({ isModalOpen, closeModal, folderId, setFolderList }: EditModalProps) => {
  const [editValue, setEditValue] = useState<string>('');

  const fetchUpdateFolder = async (folderId: number, editValue: string) => {
    const response = await updateFolder(folderId, editValue);
    setFolderList(prevFolder =>
      prevFolder?.map(folder => (folder.id === folderId ? { ...folder, name: response.name } : folder))
    );
  };
  const handleCloseModal = () => {
    setEditValue('');
    closeModal();
  };

  const handleEditFolder = () => {
    folderId && fetchUpdateFolder(folderId, editValue);
    handleCloseModal();
  };

  const handleChangeEditInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };
  return (
    <CommonModal isModalOpen={isModalOpen} closeModal={handleCloseModal}>
      <EditFolderTitle>폴더 이름 변경</EditFolderTitle>
      <EditFolderInput value={editValue} onChange={handleChangeEditInput} />
      <Button onClick={handleEditFolder} size={{ width: '100%' }}>
        변경하기
      </Button>
    </CommonModal>
  );
};

export default EditFolderModal;
