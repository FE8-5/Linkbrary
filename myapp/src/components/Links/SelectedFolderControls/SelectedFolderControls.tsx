import { Dispatch, SetStateAction } from 'react';
import { GetAllFoldersRes } from '../../../types/folderTypes';
import FolderControls from '../FolderControls/FolderControls';
import { SelectedFolderControlsContainer, SelectedFolderTitle } from './SelectedFolderControlsStyle';
import { ItemLinks } from '../../../types/linkTypes';

interface SelectedFolderControlsProps {
  selectedFolderInfo: GetAllFoldersRes | undefined;
  setFolderList: Dispatch<SetStateAction<GetAllFoldersRes[] | undefined>>;
  linkListInfo: ItemLinks;
}

const SelectedFolderControls = ({ selectedFolderInfo, setFolderList, linkListInfo }: SelectedFolderControlsProps) => {
  const selectedFolderName = selectedFolderInfo?.name;

  return (
    <SelectedFolderControlsContainer>
      <SelectedFolderTitle>{selectedFolderName ? selectedFolderName : '전체'}</SelectedFolderTitle>
      {selectedFolderInfo && (
        <FolderControls
          selectedFolderInfo={selectedFolderInfo}
          setFolderList={setFolderList}
          linkListInfo={linkListInfo}
        />
      )}
    </SelectedFolderControlsContainer>
  );
};

export default SelectedFolderControls;
