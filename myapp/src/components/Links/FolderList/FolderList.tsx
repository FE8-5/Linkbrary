import { useState } from 'react';
import { GetAllFoldersRes } from '../../../types/folderTypes';
import { EmptyFolderMessage, FolderButton, FolderListContainer } from './FolderListStyle';

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
      {folderList && folderList.length > 0 ? (
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
      ) : (
        <EmptyFolderMessage>폴더를 추가해주세요!!</EmptyFolderMessage>
      )}
    </FolderListContainer>
  );
};

export default FolderList;
