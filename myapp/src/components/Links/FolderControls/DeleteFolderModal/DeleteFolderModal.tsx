import { Dispatch, SetStateAction, useState } from 'react';
import Button from '../../../@Shared/Buttons/Button/Button';
import CommonModal from '../../../@Shared/CommonModal/CommonModal';
import { deleteFolder } from '../../../../apis/LinksPageApi/forderApi';
import { GetAllFoldersRes } from '../../../../types/folderTypes';
import { DeleteFolderName, DeleteFolderTitle } from './DeleteFolderModalSyle';

interface DeleteModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  folderName: string | undefined;
  folderId: number | undefined;
  setFolderList: Dispatch<SetStateAction<GetAllFoldersRes[] | undefined>>;
}

const DeleteFolderModal = ({ isModalOpen, closeModal, folderName, folderId, setFolderList }: DeleteModalProps) => {
  const handleDeleteFolder = async () => {
    try {
      if (folderId) {
        await deleteFolder(folderId);
        setFolderList(prevFolders => prevFolders?.filter(folder => folder.id !== folderId));
        closeModal();
      }
    } catch (error) {
      console.error('error가 발생하였습니다.');
    }
  };
  return (
    <CommonModal isModalOpen={isModalOpen} closeModal={closeModal}>
      <DeleteFolderTitle>폴더 삭제</DeleteFolderTitle>
      <DeleteFolderName>{folderName}</DeleteFolderName>
      <Button onClick={handleDeleteFolder} size={{ width: '100%' }}>
        삭제하기
      </Button>
    </CommonModal>
  );
};

export default DeleteFolderModal;
