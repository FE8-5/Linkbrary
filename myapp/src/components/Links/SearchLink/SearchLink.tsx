import { SearchIcon, SearchInput, SearchLinkContainer } from './SearchLinkStyle';
import searchIcon from '../../../assets/Icons/search.png';

const SearchLink = () => {
  return (
    <SearchLinkContainer>
      <SearchIcon src={searchIcon} alt="searchIcon" />
      <SearchInput type="text" placeholder="링크를 검색해 보세요." />
    </SearchLinkContainer>
  );
};

export default SearchLink;
