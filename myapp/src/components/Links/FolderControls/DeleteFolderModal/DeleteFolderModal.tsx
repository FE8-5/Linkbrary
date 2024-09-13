import { Dispatch, SetStateAction, useState } from 'react';
import Button from '../../../@Shared/Buttons/Button/Button';
import CommonModal from '../../../@Shared/CommonModal/CommonModal';
import { deleteFolder } from '../../../../apis/LinksPageApi/forderApi';
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
}

const DeleteFolderModal = ({
  isModalOpen,
  closeModal,
  folderName,
  folderId,
  setFolderList,
  setSelectedFolderInfo,
}: DeleteModalProps) => {
  const { isLoading, disabled, fetchData } = useDeleteFolder(folderId);

  const handleDeleteFolder = async () => {
    fetchData();
    setFolderList(prevFolders => prevFolders?.filter(folder => folder.id !== folderId));
    setSelectedFolderInfo(undefined);
    closeModal();
  };
  return (
    <CommonModal isModalOpen={isModalOpen} closeModal={closeModal}>
      <DeleteFolderTitle>폴더 삭제</DeleteFolderTitle>
      <DeleteFolderName>{folderName}</DeleteFolderName>
      <Button onClick={handleDeleteFolder} size={{ width: '100%' }} disabled={disabled} isLoading={isLoading}>
        삭제하기
      </Button>
    </CommonModal>
  );
};

export default DeleteFolderModal;
