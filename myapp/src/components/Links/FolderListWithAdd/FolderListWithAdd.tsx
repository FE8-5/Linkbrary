import { FolderListWithAddContainer } from './FolderListWithAddStyle';
import AddFolderBtn from '../AddFolderBtn/AddFolderBtn';
import FolderList from '../FolderList/FolderList';
import { GetAllFoldersRes } from '../../../types/folderTypes';
import { Dispatch, SetStateAction } from 'react';

interface FolderListWithAddProps {
  folderList: GetAllFoldersRes[] | undefined;
  setFolderList: Dispatch<SetStateAction<GetAllFoldersRes[] | undefined>>;
  onClick: (folderId: number) => void;
  selectedFolderId: number | null;
}

const FolderListWithAdd = ({ folderList, setFolderList, onClick, selectedFolderId }: FolderListWithAddProps) => {
  return (
    <FolderListWithAddContainer>
      <FolderList folderList={folderList} onClick={onClick} selectedFolderId={selectedFolderId} />
      <AddFolderBtn setFolderList={setFolderList} />
    </FolderListWithAddContainer>
  );
};

export default FolderListWithAdd;
