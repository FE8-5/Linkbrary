import { GetAllFoldersRes } from '../../../types/folderTypes';
import { FolderButton, FolderListContainer } from './FolderListStyle';

interface FolderListProps {
  folderList: GetAllFoldersRes[] | undefined;
  onClick: (folderId: number) => void;
  selectedFolderId: number | null;
}

const FolderList = ({ folderList, onClick, selectedFolderId }: FolderListProps) => {
  const handleClick = (folderId: number) => {
    onClick(folderId);
  };
  return (
    <FolderListContainer>
      {folderList && folderList.length > 0 && (
        <>
          <FolderButton isSelected={selectedFolderId === 0} onClick={() => handleClick(0)}>
            전체
          </FolderButton>
          {folderList.map(folder => {
            return (
              <FolderButton isSelected={selectedFolderId === folder.id} onClick={() => handleClick(folder.id)}>
                {folder.name}
              </FolderButton>
            );
          })}
        </>
      )}
    </FolderListContainer>
  );
};

export default FolderList;
