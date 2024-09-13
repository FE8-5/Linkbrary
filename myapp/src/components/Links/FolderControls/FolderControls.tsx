import { GetAllFoldersRes } from '../../../types/folderTypes';
import { EditFolder, FolderControlsContainer, FolderControlsImg } from '../FolderControls/FolderControlsStyle';
import penIcon from '../../../assets/Icons/pen.png';
import deleteIcon from '../../../assets/Icons/delete.png';
import DeleteFolderModal from './DeleteFolderModal/DeleteFolderModal';
import { Dispatch, SetStateAction, useState } from 'react';
import EditFolderModal from './EditFolderModal/EditFolderModal';
import { ItemLinks } from '../../../types/linkTypes';

interface FolderControlsProps {
  selectedFolderInfo: GetAllFoldersRes | undefined;
  setFolderList: Dispatch<SetStateAction<GetAllFoldersRes[] | undefined>>;
  setSelectedFolderInfo: Dispatch<SetStateAction<GetAllFoldersRes | undefined>>;
  setUpdateFolders: React.Dispatch<React.SetStateAction<boolean>>;
  setDeleteFolderState: React.Dispatch<React.SetStateAction<boolean>>;

  linkListInfo: ItemLinks;
}

const FolderControls = ({
  selectedFolderInfo,
  setFolderList,
  linkListInfo,
  setSelectedFolderInfo,
  setUpdateFolders,
  setDeleteFolderState,
}: FolderControlsProps) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };
  const openDeleteModal = () => {
    if (linkListInfo.totalCount === 0) {
      setIsDeleteModalOpen(true);
    } else {
      alert('폴더가 비어있어야 삭제가 가능합니다.');
    }
  };
  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };
  const openEditModal = () => {
    setIsEditModalOpen(true);
  };
  return (
    <FolderControlsContainer>
      <EditFolder onClick={openEditModal}>
        <FolderControlsImg src={penIcon} alt="penIcon" />
        <p>이름 변경</p>
      </EditFolder>
      <EditFolderModal
        isModalOpen={isEditModalOpen}
        setSelectedFolderInfo={setSelectedFolderInfo}
        closeModal={closeEditModal}
        folderId={selectedFolderInfo?.id}
        setFolderList={setFolderList}
        setUpdateFolders={setUpdateFolders}
      />

      <EditFolder onClick={openDeleteModal}>
        <FolderControlsImg src={deleteIcon} alt="deleteIcon" />
        <p>삭제</p>
      </EditFolder>
      <DeleteFolderModal
        isModalOpen={isDeleteModalOpen}
        closeModal={closeDeleteModal}
        folderName={selectedFolderInfo?.name}
        folderId={selectedFolderInfo?.id}
        setFolderList={setFolderList}
        setSelectedFolderInfo={setSelectedFolderInfo}
        setDeleteFolderState={setDeleteFolderState}
      />
    </FolderControlsContainer>
  );
};

export default FolderControls;
