import { useSearchParams } from 'react-router-dom';
import FolderListWithAdd from '../FolderListWithAdd/FolderListWithAdd';
import ItemCardContainer from '../ItemCardContainer/ItemCardContainer';
import SearchLink from '../SearchLink/SearchLink';
import { Keyword, SearchResultsContent, Wrapper } from './LinksWrapperStyle';
import { useCallback, useEffect, useState } from 'react';
import { getAllFolders } from '../../../apis/LinksPageApi/forderApi';
import { GetAllFoldersRes } from '../../../types/folderTypes';
import { getAllLinks, getLinksByFolder } from '../../../apis/LinksPageApi/linkApi';
import { ItemLinks } from '../../../types/linkTypes';
import { BREAKPOINTS_NUMERIC } from '../../../constatnts/Breakpoint';
import { useResizeDebounceEffect } from '../../../hooks/useResizeDebounceEffect ';
import SelectedFolderControls from '../SelectedFolderControls/SelectedFolderControls';

const LinksWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [folderList, setFolderList] = useState<GetAllFoldersRes[]>();
  const [selectedFolderInfo, setSelectedFolderInfo] = useState<GetAllFoldersRes | undefined>();
  const [linkListInfo, setLinkListInfo] = useState<ItemLinks>({ totalCount: 0, list: [] });
  const [isLoading, setIsLoading] = useState(true); // 카드 컨테이너 로딩 상태관리
  const [isNewItem, setIsNewItem] = useState(false);
  const [pageSize, setPageSize] = useState(9);
  const [pageCount, setPageCount] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  let initSearch = searchParams.get('search');

  // 데이터를 받아오는 함수
  async function fetchAllLinks(page: number, pagesize: number, search: string | null) {
    try {
      const links: ItemLinks = await getAllLinks(page, pagesize, search);
      setLinkListInfo(links);
      setIsLoading(false);
    } catch (error) {
      console.error('데이터 받아오기 실패:', error);
    }
  }

  // 페이지의 width에 맞게 fetchLinks 함수에 인자(Argument)를 넘김
  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    if (selectedFolderInfo?.id) {
      setSelectedFolderInfo(selectedFolderInfo);
      fetchLinksByFolder(selectedFolderInfo.id, currentPage, pageSize);
    } else if (width > BREAKPOINTS_NUMERIC.largeDesktop) {
      fetchAllLinks(currentPage, 9, initSearch);
      setPageSize(9);
      setPageCount(5);
    } else if (width >= BREAKPOINTS_NUMERIC.tablet) {
      fetchAllLinks(currentPage, 6, initSearch);
      setPageSize(6);
      setPageCount(3);
    } else {
      fetchAllLinks(currentPage, 9, initSearch);
      setPageSize(9);
      setPageCount(3);
    }
  }, [initSearch, currentPage, pageSize, selectedFolderInfo]);

  // 첫 렌더링, 검색, 링크 수정 시 새 데이터 요청
  useEffect(() => {
    setSelectedFolderInfo(undefined);
    handleResize();
  }, [handleResize, isNewItem]);

  useEffect(() => {
    initSearch && setSelectedFolderInfo(undefined);
  }, [initSearch]);

  // 리사이징 동작 시 useDebounce 커스텀훅의 디바운싱 이용하여 화면 크기에 맞는 데이터 요청
  useResizeDebounceEffect(handleResize);

  // 아래로는 폴더 관련 함수
  const fetchFolderList = async () => {
    try {
      const response = await getAllFolders();
      setFolderList(response);
    } catch (error) {
      console.error('폴더를 가져오지 못했습니다.', error);
    }
  };

  const fetchLinksByFolder = async (folderId: number, page: number, pageSize: number) => {
    try {
      const response = await getLinksByFolder(folderId, page, pageSize);
      setLinkListInfo(response);
    } catch (error) {
      console.error('링크를 가져오지 못했습니다.', error);
    }
  };
  const handleFolderClick = (folderId: number) => {
    setSearchParams({});
    const folderInfo = folderList?.find(folder => folder.id === folderId);
    setSelectedFolderInfo(folderInfo);
    setCurrentPage(1);
    if (folderId === 0) {
      handleResize();
      setSelectedFolderInfo(undefined);
    } else {
      fetchLinksByFolder(folderId, 1, pageSize);
    }
  };

  //첫 랜더링시 폴더리스트
  useEffect(() => {
    fetchFolderList();
  }, []);

  return (
    <Wrapper>
      <SearchLink initSearch={initSearch} setSearchParams={setSearchParams} />
      {initSearch && (
        <SearchResultsContent>
          <Keyword>{initSearch}</Keyword>로 검색한 결과입니다.
        </SearchResultsContent>
      )}
      <FolderListWithAdd
        folderList={folderList}
        setFolderList={setFolderList}
        onClick={handleFolderClick}
        selectedFolderId={selectedFolderInfo?.id}
      />
      <SelectedFolderControls
        selectedFolderInfo={selectedFolderInfo}
        setFolderList={setFolderList}
        linkListInfo={linkListInfo}
      />
      <ItemCardContainer
        linkListInfo={linkListInfo}
        isLoading={isLoading}
        setIsNewItem={setIsNewItem}
        pageSize={pageSize}
        pageCount={pageCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Wrapper>
  );
};

export default LinksWrapper;
