import { useCallback, useEffect, useState } from 'react';
import { getAllLinks } from '../../../apis/LinksPageApi/linkApi';
import ItemCard from '../ItemCard/ItemCard';
import { ItemCardGrid, NoLink } from './ItemCardContainerStyle';
import { LinkRes } from '../../../types/linkTypes';
import { BREAKPOINTS_NUMERIC } from '../../../constatnts/Breakpoint';
export interface ItemLinks {
  list: LinkRes[];
}

function ItemCardContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<ItemLinks>({ list: [] });
  // TODO: 추후 pageSize 이용하여 페이지네이션 구현 필요
  const [pageSize, setPageSize] = useState(9);

  // 데이터를 받아오는 함수
  async function fetchLinks(pageItemSize: number) {
    try {
      const page = 1;
      const pageSize = pageItemSize;
      const search = '';

      const links = await getAllLinks(page, pageSize, search);
      if (Array.isArray(links)) {
        setItems({ list: links });
        setIsLoading(false);
      } else {
        console.error('response가 배열이 아님');
      }
    } catch (error) {
      console.error('데이터 받아오기 실패:', error);
    }
  }

  // 페이지의 width에 맞게 fetchLinks 함수에 인자(Argument)를 넘김
  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    if (width > BREAKPOINTS_NUMERIC.largeDesktop) {
      fetchLinks(9);
      setPageSize(9);
    } else if (width >= BREAKPOINTS_NUMERIC.tablet) {
      fetchLinks(6);
      setPageSize(6);
    } else {
      fetchLinks(9);
      setPageSize(9);
    }
  }, []);

  // 첫 렌더링시 데이터 요청
  useEffect(() => {
    handleResize();
  }, [handleResize]);

  // 리사이징 동작 시 디바운싱 이용하여 화면 크기에 맞는 데이터 요청
  useEffect(() => {
    let timer: number | undefined = undefined;
    const getResize = () => {
      const delay = 300;
      clearTimeout(timer);
      timer = window.setTimeout(() => {
        handleResize();
      }, delay);
    };
    window.addEventListener('resize', getResize);
    return () => {
      window.removeEventListener('resize', getResize);
    };
  }, [handleResize]);

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (items.list.length <= 0) {
    return <NoLink>저장된 링크가 없습니다</NoLink>;
  }
  return (
    <ItemCardGrid>
      {items ? items.list.map(item => <ItemCard key={item.id} item={item} />) : <div>아이템이 없습니다.</div>}
    </ItemCardGrid>
  );
}
export default ItemCardContainer;
