import { useState } from 'react';
import { GetAllFoldersRes } from '../../../../types/folderTypes';
import Button from '../../../@Shared/Buttons/Button/Button';
import CommonModal from '../../../@Shared/CommonModal/CommonModal';
import { AxiosError } from 'axios';
import {
  AddLinkModalSubtitle,
  AddLinkModalTitle,
  CheckIcon,
  Folder,
  FolderInfo,
  FolderList,
  FolderTitle,
  LinkNum,
} from './AddLinkModalStyle';
import checkIcon from '../../../../assets/Icons/check.png';
import { addLink } from '../../../../apis/LinksPageApi/linkApi';

interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  folderList: GetAllFoldersRes[] | undefined;
  linkUrl: string;
  setIsNewItem: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdateLinks: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddLinkModal = ({ isModalOpen, closeModal, folderList, linkUrl, setIsNewItem, setUpdateLinks }: ModalProps) => {
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const handleFolderClick = (folderId: number) => {
    setSelectedFolderId(folderId);
  };
  const handleCloseModal = () => {
    setSelectedFolderId(null);
    closeModal();
  };
  const handleAddLinkClick = async () => {
    setIsLoading(true);
    setDisabled(true);
    if (selectedFolderId !== null && linkUrl !== null) {
      try {
        await addLink(linkUrl, selectedFolderId).then(() => {
          setIsNewItem(prev => !prev);
          setUpdateLinks(prev => !prev);
        }); // 선택된 폴더 id로 API 호출
        closeModal();
      } catch (err) {
        if (err instanceof AxiosError) {
          // AxiosError의 response 객체를 통해 에러 메시지 추출
          const errorMessage =
            err.response?.data?.message || err.message || '링크 추가에 실패했습니다. 다시 시도해 주세요.';
          alert(errorMessage);
          setSelectedFolderId(null);
          closeModal();
        } else {
          // AxiosError가 아닌 경우 일반적인 에러 처리
          alert('링크 추가에 실패했습니다. 다시 시도해 주세요.');
          setSelectedFolderId(null);
          closeModal();
        }
      } finally {
        setIsLoading(false);
        setDisabled(false);
      }
    }
  };

  return (
    <>
      <CommonModal isModalOpen={isModalOpen} closeModal={handleCloseModal}>
        <AddLinkModalTitle>폴더에 추가</AddLinkModalTitle>
        <AddLinkModalSubtitle>링크주소</AddLinkModalSubtitle>
        <FolderList>
          {folderList?.map(folder => {
            return (
              <Folder
                key={folder.id}
                onClick={() => handleFolderClick(folder.id)}
                $isSelected={selectedFolderId === folder.id}>
                <FolderInfo>
                  <FolderTitle>{folder.name}</FolderTitle>
                  <LinkNum>{folder.linkCount}개 링크</LinkNum>
                </FolderInfo>
                {selectedFolderId === folder.id && <CheckIcon src={checkIcon} alt="checkIcon" />}
              </Folder>
            );
          })}
        </FolderList>
        <Button
          type="button"
          isLoading={isLoading}
          onClick={handleAddLinkClick}
          size={{ width: '100%', height: '3rem' }}
          $disabled={disabled}
          $padding={{ vertical: '2.6rem' }}>
          추가하기
        </Button>
      </CommonModal>
    </>
  );
};

export default AddLinkModal;
