import { useState } from 'react';
import dayjs from 'dayjs';
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

interface ItemCardProps {
  item: LinkRes;
}

function ItemCard({ item }: ItemCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteClick = () => {
    setIsFavorite(!isFavorite);
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
          <DropDownKebabIcon item={item} />
        </TimeMenuBar>
        <InfoDescription>{item.description}</InfoDescription>
        <InfoCreatedAt>{formattedDate}</InfoCreatedAt>
      </InfoContainer>
    </CardContainer>
  );
}

export default ItemCard;
