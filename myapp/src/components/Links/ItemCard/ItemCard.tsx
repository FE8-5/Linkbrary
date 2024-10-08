import { useState } from 'react';
import dayjs from 'dayjs';
import { deleteLink, setFavoriteLink } from '../../../apis/LinksPageApi/linkApi';
import PlaceholderImg from '../../../assets/Images/placeholder-image.png';
import DropDownKebabIcon from '../DropDown/DropDown';
import { LinkRes } from '../../../types/linkTypes';
import { getTimeDiff } from '../getTimeDiff';
import {
  CardContainer,
  CardFavoriteStarBtn,
  CardFavoriteStarSvg,
  CardImage,
  CardImageWrapper,
  InfoContainer,
  InfoCreatedAt,
  InfoDescription,
  TimeAgo,
  TimeMenuBar,
} from './ItemCardStyle';
import DeleteModal from '../DeleteModal/DeleteModal';
import EditModal from '../EditModal/EditModal';

interface ItemCardProps {
  item: LinkRes;
  setIsNewItem: React.Dispatch<React.SetStateAction<boolean>>;
}

function ItemCard({ item, setIsNewItem }: ItemCardProps) {
  const [isLoadingFavorite, setIsLoadingFavorite] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const closeModal = () => {
    setIsDeleteModalOpen(false);
    setIsEditModalOpen(false);
  };

  const favoriteClick = () => {
    if (isLoadingFavorite) return;
    setIsLoadingFavorite(true);
    setFavoriteLink(item.id, !item.favorite)
      .then(() => {
        if (setIsNewItem) {
          setIsNewItem(prev => !prev);
        }
      })
      .catch(e => {
        console.error('Favorite 상태 변경 실패', e);
      })
      .finally(() => {
        setIsLoadingFavorite(false);
      });
  };

  const handleDelete = () => {
    if (isLoadingDelete) return;
    setIsLoadingDelete(true);
    setDisabled(true);
    deleteLink(item.id)
      .then(() => {
        if (setIsNewItem) {
          setIsNewItem(prev => !prev);
        }
      })
      .catch(e => {
        console.error('링크 삭제 실패', e);
      })
      .finally(() => {
        setIsDeleteModalOpen(false);
        setIsLoadingDelete(false);
        setDisabled(false);
      });
  };

  //dayjs 라이브러리를 사용하여 받아온 createdAt을 YYYY.MM.DD 양식에 맞게 변환
  const dateString = item.createdAt;
  const formattedDate = dayjs(dateString).format('YYYY.MM.DD');

  return (
    <CardContainer>
      <CardImageWrapper>
        {item.imageSource ? (
          <CardImage alt="링크 카드 이미지" src={item.imageSource} />
        ) : (
          <CardImage alt="링크카드 대체 이미지" src={PlaceholderImg} />
        )}
        <CardFavoriteStarBtn onClick={favoriteClick}>
          {item.favorite ? <CardFavoriteStarSvg $favorite={true} /> : <CardFavoriteStarSvg $favorite={false} />}
        </CardFavoriteStarBtn>
      </CardImageWrapper>
      <InfoContainer>
        <TimeMenuBar>
          {dateString ? <TimeAgo>{getTimeDiff(dateString)}</TimeAgo> : <></>}
          <DropDownKebabIcon setIsDeleteModalOpen={setIsDeleteModalOpen} setIsEditModalOpen={setIsEditModalOpen} />
        </TimeMenuBar>
        <InfoDescription>{item.description}</InfoDescription>
        <InfoCreatedAt>{formattedDate}</InfoCreatedAt>
      </InfoContainer>
      <DeleteModal
        item={item}
        onDelete={handleDelete}
        isModalOpen={isDeleteModalOpen}
        closeModal={closeModal}
        isLoadingDelete={isLoadingDelete}
        disabled={disabled}
      />
      <EditModal
        item={item}
        setIsNewItem={setIsNewItem}
        setIsEditModalOpen={setIsEditModalOpen}
        isModalOpen={isEditModalOpen}
        closeModal={closeModal}
      />
    </CardContainer>
  );
}

export default ItemCard;
