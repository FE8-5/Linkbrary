import { useSearchParams } from 'react-router-dom';
import FolderListWithAdd from '../FolderListWithAdd /FolderListWithAdd';
import ItemCardContainer from '../ItemCardContainer/ItemCardContainer';
import SearchLink from '../SearchLink/SearchLink';
import { Keyword, SearchResultsContent, Wrapper } from './LinksWrapperStyle';
import { useEffect, useState } from 'react';
import { getAllFolders } from '../../../apis/LinksPageApi/forderApi';
import { GetAllFoldersRes } from '../../../types/folderTypes';
import { getAllLinks, getLinksByFolder } from '../../../apis/LinksPageApi/linkApi';
import { ItemLinks } from '../../../types/linkTypes';

const LinksWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [folderList, setFolderList] = useState<GetAllFoldersRes[]>();
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const [linkListInfo, setLinkListInfo] = useState<ItemLinks>({ totalCount: 0, list: [] });
  const initSearch = searchParams.get('search');

  const fetchFolderList = async () => {
    const response = await getAllFolders();
    console.log(response);

    setFolderList(response);
  };

  const fetchAllLinks = async (page: number, pagesize: number, search: string | null) => {
    const response = await getAllLinks(page, pagesize, search);
    setLinkListInfo(response);
  };

  const fetchLinksByFolder = async (folderId: number, page: number, pageSize: number) => {
    const response = await getLinksByFolder(folderId, page, pageSize);

    setLinkListInfo(response);
  };
  const handleFolderClick = (folderId: number) => {
    setSelectedFolderId(folderId);
    if (folderId === 0) {
      fetchAllLinks(1, 10, '');
    } else {
      fetchLinksByFolder(folderId, 1, 10);
    }
  };

  //첫 랜더링시 폴더리스트
  useEffect(() => {
    fetchFolderList();
  }, []);

  //검색하면 링크 새로호출
  useEffect(() => {
    fetchAllLinks(1, 10, initSearch);
    setSelectedFolderId(null);
  }, [initSearch]);

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
        selectedFolderId={selectedFolderId}
      />
      <ItemCardContainer linkListInfo={linkListInfo} />
    </Wrapper>
  );
};

export default LinksWrapper;
