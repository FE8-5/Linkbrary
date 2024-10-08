import ItemCard from '../ItemCard/ItemCard';
import { ItemCardGrid, NoLink } from './ItemCardContainerStyle';
import { ItemLinks } from '../../../types/linkTypes';
import Pagination from '../Pagination/Pagination';
import {
  SkeletonCardContainer,
  SkeletonCardCreatedAt,
  SkeletonCardDescription,
  SkeletonCardInfoBox,
  SkeletonCardTimeDiff,
} from './SkeletonCardStyle';

interface PropsType {
  linkListInfo: ItemLinks;
  isLoading: boolean;
  setIsNewItem: React.Dispatch<React.SetStateAction<boolean>>;
  pageSize: number;
  pageCount: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

function ItemCardContainer({
  linkListInfo,
  isLoading,
  setIsNewItem,
  pageSize,
  pageCount,
  currentPage,
  setCurrentPage,
}: PropsType) {
  if (isLoading) {
    return (
      <ItemCardGrid>
        {Array.from(
          { length: pageSize },
          (_, i) =>
            i <= pageSize && (
              <SkeletonCardContainer key={pageSize + currentPage + i}>
                <SkeletonCardInfoBox>
                  <SkeletonCardTimeDiff />
                  <SkeletonCardDescription />
                  <SkeletonCardCreatedAt />
                </SkeletonCardInfoBox>
              </SkeletonCardContainer>
            )
        )}
      </ItemCardGrid>
    );
  }

  return (
    <>
      {!isLoading && linkListInfo.list.length <= 0 && <NoLink>저장된 링크가 없습니다</NoLink>}
      <ItemCardGrid>
        {linkListInfo.list.map(item => (
          <ItemCard key={item.id} item={item} setIsNewItem={setIsNewItem} />
        ))}
      </ItemCardGrid>
      <Pagination
        totalItems={linkListInfo.totalCount}
        pageSize={pageSize}
        pageCount={pageCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
export default ItemCardContainer;
