import { FolderListWithAddContainer } from './FolderListWithAddStyle';
import AddFolderBtn from '../AddFolderBtn/AddFolderBtn';
import FolderList from '../FolderList/FolderList';
import { GetAllFoldersRes } from '../../../types/folderTypes';
import { Dispatch, SetStateAction } from 'react';

interface FolderListWithAddProps {
  folderList: GetAllFoldersRes[] | undefined;
  setFolderList: Dispatch<SetStateAction<GetAllFoldersRes[] | undefined>>;
  onClick: (folderId: number) => void;
  selectedFolderId: number | undefined;
  folderListIsLoading: boolean;
  setUpdateLinks: React.Dispatch<React.SetStateAction<boolean>>;
}

const FolderListWithAdd = ({
  folderList,
  setFolderList,
  onClick,
  selectedFolderId,
  folderListIsLoading,
  setUpdateLinks,
}: FolderListWithAddProps) => {
  return (
    <FolderListWithAddContainer>
      <FolderList
        folderList={folderList}
        onClick={onClick}
        selectedFolderId={selectedFolderId}
        folderListIsLoading={folderListIsLoading}
      />
      <AddFolderBtn setFolderList={setFolderList} setUpdateLinks={setUpdateLinks} />
    </FolderListWithAddContainer>
  );
};

export default FolderListWithAdd;
