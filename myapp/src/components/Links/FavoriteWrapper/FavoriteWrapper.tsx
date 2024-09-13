import { useCallback, useEffect, useState } from 'react';
import ItemCardContainer from '../ItemCardContainer/ItemCardContainer';
import { ItemLinks } from '../../../types/linkTypes';
import { BREAKPOINTS_NUMERIC } from '../../../constatnts/Breakpoint';
import { getFavorites } from '../../../apis/LinksPageApi/linkApi';
import { useResizeDebounceEffect } from '../../../hooks/useResizeDebounceEffect ';
import { FavoriteContainer, FavoriteItemContainer, FavoriteLinkContainer } from './FavoriteWrapperStyle';

function FavoriteWrapper() {
  const [linkListInfo, setLinkListInfo] = useState<ItemLinks>({ totalCount: 0, list: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [pageSize, setPageSize] = useState(9);
  const [pageCount, setPageCount] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [isNewItem, setIsNewItem] = useState(false);

  async function fetchFavoriteLinks(page: number, pagesize: number) {
    try {
      const links: ItemLinks = await getFavorites(page, pagesize);
      setLinkListInfo(links);
      setIsLoading(false);
    } catch (error) {
      console.error('데이터 받아오기 실패:', error);
    }
  }

  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    if (width > BREAKPOINTS_NUMERIC.largeDesktop) {
      fetchFavoriteLinks(currentPage, 9);
      setPageSize(9);
      setPageCount(5);
    } else if (width >= BREAKPOINTS_NUMERIC.tablet) {
      fetchFavoriteLinks(currentPage, 6);
      setPageSize(6);
      setPageCount(3);
    } else {
      fetchFavoriteLinks(currentPage, 9);
      setPageSize(9);
      setPageCount(3);
    }
  }, [currentPage]);

  useEffect(() => {
    handleResize();
  }, [handleResize, isNewItem]);

  // 리사이징 동작 시 useDebounce 커스텀훅의 디바운싱 이용하여 화면 크기에 맞는 데이터 요청
  useResizeDebounceEffect(handleResize);

  return (
    <FavoriteContainer>
      <FavoriteLinkContainer>⭐️ 즐겨찾기</FavoriteLinkContainer>
      <FavoriteItemContainer>
        <ItemCardContainer
          linkListInfo={linkListInfo}
          isLoading={isLoading}
          setIsNewItem={setIsNewItem}
          pageSize={pageSize}
          pageCount={pageCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </FavoriteItemContainer>
    </FavoriteContainer>
  );
}

export default FavoriteWrapper;
