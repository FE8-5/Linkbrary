import { GetAllFoldersRes } from '../../../types/folderTypes';
import LoadingSpinner from '../../@Shared/LoadingSpinner/LoadingSpinner';
import { FolderButton, FolderListContainer } from './FolderListStyle';

interface FolderListProps {
  folderList: GetAllFoldersRes[] | undefined;
  onClick: (folderId: number) => void;
  selectedFolderId: number | undefined;
  folderListIsLoading: boolean;
}

const FolderList = ({ folderList, onClick, selectedFolderId, folderListIsLoading }: FolderListProps) => {
  const handleClick = (folderId: number) => {
    onClick(folderId);
  };
  return (
    <FolderListContainer>
      {folderListIsLoading ? (
        <LoadingSpinner width="2rem" /> // 로딩 중일 때 표시될 컴포넌트
      ) : (
        folderList &&
        folderList.length > 0 && (
          <>
            <FolderButton $isSelected={selectedFolderId === undefined} onClick={() => handleClick(0)}>
              전체
            </FolderButton>
            {folderList.map(folder => (
              <FolderButton
                key={folder.id}
                $isSelected={selectedFolderId === folder.id}
                onClick={() => handleClick(folder.id)}>
                {folder.name}
              </FolderButton>
            ))}
          </>
        )
      )}
    </FolderListContainer>
  );
};

export default FolderList;
