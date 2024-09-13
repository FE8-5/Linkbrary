import ItemCard from '../ItemCard/ItemCard';
import { ItemCardGrid } from './ItemCardContainerStyle';
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
              <SkeletonCardContainer>
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
