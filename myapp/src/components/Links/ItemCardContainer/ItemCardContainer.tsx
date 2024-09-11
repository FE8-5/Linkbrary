import ItemCard from '../ItemCard/ItemCard';
import { ItemCardGrid, NoLink } from './ItemCardContainerStyle';
import { ItemLinks } from '../../../types/linkTypes';
import Pagination from '../Pagination/Pagination';
import LoadingSpinner from '../../@Shared/LoadingSpinner/LoadingSpinner';
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
    return <LoadingSpinner width="7rem" />;
  }
  if (linkListInfo.list.length <= 0) {
    return <NoLink>저장된 링크가 없습니다</NoLink>;
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
