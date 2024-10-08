import Button from '../../@Shared/Buttons/Button/Button';
import linkIcon from '../../../assets/Icons/link.png';
import { AddLinkContainer, AddLinkInput, AddLinkInputContainer, LinkIcon } from './AddLinkStyle';
import { ChangeEvent, useState } from 'react';
import AddLinkModal from './AddLinkModal/AddLinkModal';
import useGetFolderList from '../../../hooks/useGetFolderList';

interface AddLinkProps {
  setIsNewItem: React.Dispatch<React.SetStateAction<boolean>>;
  updateLinks: boolean;
  setUpdateLinks: React.Dispatch<React.SetStateAction<boolean>>;
  updateFolders: boolean;
  deleteFolderState: boolean;
}

const AddLink = ({ setIsNewItem, setUpdateLinks, updateLinks, updateFolders, deleteFolderState }: AddLinkProps) => {
  const [value, setValue] = useState<string>('');
  const { data: folderList } = useGetFolderList(updateLinks, updateFolders, deleteFolderState);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // 모달을 닫는 함수
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleClick = async () => {
    if (!value) {
      alert('링크를 입력주세요!!');
      return;
    }
    if (folderList && folderList.length > 0) {
      setIsModalOpen(true);
    } else {
      alert('폴더를 추가해주세요');
    }
  };

  return (
    <AddLinkContainer>
      <AddLinkInputContainer>
        <LinkIcon src={linkIcon} alt="linkIcon" />
        <AddLinkInput type="text" placeholder="링크를 추가해 보세요" value={value} onChange={handleChange} />
        <Button onClick={handleClick}>추가하기</Button>
        <AddLinkModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          folderList={folderList}
          linkUrl={value}
          setIsNewItem={setIsNewItem}
          setUpdateLinks={setUpdateLinks}
        />
      </AddLinkInputContainer>
    </AddLinkContainer>
  );
};

export default AddLink;
