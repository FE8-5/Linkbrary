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
  linkListInfo: ItemLinks;
}

const FolderControls = ({ selectedFolderInfo, setFolderList, linkListInfo }: FolderControlsProps) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };
  const openDeleteModal = () => {
    if (!linkListInfo) {
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
      {linkListInfo.totalCount ? (
        <EditFolder onClick={openEditModal}>
          <FolderControlsImg src={penIcon} alt="penIcon" />
          <p>이름 변경</p>
          <EditFolderModal
            isModalOpen={isEditModalOpen}
            closeModal={closeEditModal}
            folderId={selectedFolderInfo?.id}
            setFolderList={setFolderList}
          />
        </EditFolder>
      ) : (
        ''
      )}

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
      />
    </FolderControlsContainer>
  );
};

export default FolderControls;
