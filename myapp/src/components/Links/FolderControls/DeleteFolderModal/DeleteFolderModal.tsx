import { Dispatch, SetStateAction, useState } from 'react';
import Button from '../../../@Shared/Buttons/Button/Button';
import CommonModal from '../../../@Shared/CommonModal/CommonModal';
import { GetAllFoldersRes } from '../../../../types/folderTypes';
import { DeleteFolderName, DeleteFolderTitle } from './DeleteFolderModalSyle';
import useDeleteFolder from '../../../../hooks/useDeleteFolder';

interface DeleteModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  folderName: string | undefined;
  folderId: number | undefined;
  setFolderList: Dispatch<SetStateAction<GetAllFoldersRes[] | undefined>>;
  setSelectedFolderInfo: Dispatch<SetStateAction<GetAllFoldersRes | undefined>>;
  setDeleteFolderState: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteFolderModal = ({
  isModalOpen,
  closeModal,
  folderName,
  folderId,
  setFolderList,
  setSelectedFolderInfo,
  setDeleteFolderState,
}: DeleteModalProps) => {
  const { isLoading, disabled, fetchData } = useDeleteFolder(folderId);

  const handleDeleteFolder = async () => {
    await fetchData();
    setFolderList(prevFolders => prevFolders?.filter(folder => folder.id !== folderId));
    setDeleteFolderState(prev => !prev);
    setSelectedFolderInfo(undefined);
    closeModal();
  };
  return (
    <CommonModal isModalOpen={isModalOpen} closeModal={closeModal}>
      <DeleteFolderTitle>폴더 삭제</DeleteFolderTitle>
      <DeleteFolderName>{folderName}</DeleteFolderName>
      <Button
        onClick={handleDeleteFolder}
        size={{ width: '100%' }}
        $disabled={disabled}
        isLoading={isLoading}
        $backgroundColor="var(--red)"
        $hoverBackgroundColor="var(--red-hover)">
        삭제하기
      </Button>
    </CommonModal>
  );
};

export default DeleteFolderModal;
