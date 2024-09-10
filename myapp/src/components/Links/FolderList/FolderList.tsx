import { GetAllFoldersRes } from '../../../types/folderTypes';
import { FolderButton, FolderListContainer } from './FolderListStyle';

interface FolderListProps {
  folderList: GetAllFoldersRes[] | undefined;
  onClick: (folderId: number) => void;
  selectedFolderId: number | undefined;
}

const FolderList = ({ folderList, onClick, selectedFolderId }: FolderListProps) => {
  const handleClick = (folderId: number) => {
    onClick(folderId);
  };
  return (
    <FolderListContainer>
      {folderList && folderList.length > 0 && (
        <>
          <FolderButton isSelected={selectedFolderId === undefined} onClick={() => handleClick(0)}>
            전체
          </FolderButton>
          {folderList.map(folder => {
            return (
              <FolderButton
                key={folder.id}
                isSelected={selectedFolderId === folder.id}
                onClick={() => handleClick(folder.id)}>
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
