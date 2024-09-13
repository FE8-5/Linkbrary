import { Dispatch, SetStateAction } from 'react';
import { GetAllFoldersRes } from '../../../types/folderTypes';
import FolderControls from '../FolderControls/FolderControls';
import { SelectedFolderControlsContainer, SelectedFolderTitle } from './SelectedFolderControlsStyle';
import { ItemLinks } from '../../../types/linkTypes';

interface SelectedFolderControlsProps {
  selectedFolderInfo: GetAllFoldersRes | undefined;
  setFolderList: Dispatch<SetStateAction<GetAllFoldersRes[] | undefined>>;
  setSelectedFolderInfo: Dispatch<SetStateAction<GetAllFoldersRes | undefined>>;
  setUpdateFolders: React.Dispatch<React.SetStateAction<boolean>>;
  setDeleteFolderState: React.Dispatch<React.SetStateAction<boolean>>;
  linkListInfo: ItemLinks;
}

const SelectedFolderControls = ({
  selectedFolderInfo,
  setFolderList,
  linkListInfo,
  setSelectedFolderInfo,
  setUpdateFolders,
  setDeleteFolderState,
}: SelectedFolderControlsProps) => {
  const selectedFolderName = selectedFolderInfo?.name;

  return (
    <SelectedFolderControlsContainer>
      <SelectedFolderTitle>{selectedFolderName ? selectedFolderName : '전체'}</SelectedFolderTitle>
      {selectedFolderInfo && (
        <FolderControls
          selectedFolderInfo={selectedFolderInfo}
          setSelectedFolderInfo={setSelectedFolderInfo}
          setFolderList={setFolderList}
          linkListInfo={linkListInfo}
          setUpdateFolders={setUpdateFolders}
          setDeleteFolderState={setDeleteFolderState}
        />
      )}
    </SelectedFolderControlsContainer>
  );
};

export default SelectedFolderControls;
