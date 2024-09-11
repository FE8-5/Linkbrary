import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import Button from '../../../@Shared/Buttons/Button/Button';
import CommonModal from '../../../@Shared/CommonModal/CommonModal';
import { EditFolderInput, EditFolderTitle } from './EditFolderModalStyle';
import { updateFolder } from '../../../../apis/LinksPageApi/forderApi';
import { GetAllFoldersRes } from '../../../../types/folderTypes';
import useEditFolder from '../../../../hooks/useEditFolder';

interface EditModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  folderId: number | undefined;
  setFolderList: Dispatch<SetStateAction<GetAllFoldersRes[] | undefined>>;
}

const EditFolderModal = ({ isModalOpen, closeModal, folderId, setFolderList }: EditModalProps) => {
  const [editValue, setEditValue] = useState<string>('');
  const { isLoading, fetchData } = useEditFolder(folderId, editValue);

  const handleEditFolder = async () => {
    const response = await fetchData();
    if (response) {
      setFolderList(prevFolder =>
        prevFolder?.map(folder => (folder.id === folderId ? { ...folder, name: response.name } : folder))
      );
    }
    closeModal();
  };

  const handleChangeEditInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };
  return (
    <CommonModal isModalOpen={isModalOpen} closeModal={closeModal}>
      <EditFolderTitle>폴더 이름 변경</EditFolderTitle>
      <EditFolderInput value={editValue} onChange={handleChangeEditInput} />
      <Button onClick={handleEditFolder} size={{ width: '100%' }} isLoading={isLoading}>
        변경하기
      </Button>
    </CommonModal>
  );
};

export default EditFolderModal;
