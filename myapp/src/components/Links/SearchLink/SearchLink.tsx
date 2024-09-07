import { SearchIcon, SearchInput, SearchLinkContainer } from './SearchLinkStyle';
import searchIcon from '../../../assets/Icons/search.png';
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { SetURLSearchParams } from 'react-router-dom';

interface SearchLinkProps {
  initSearch: string | null;
  setSearchParams: SetURLSearchParams;
}

const SearchLink = ({ initSearch, setSearchParams }: SearchLinkProps) => {
  const [search, setSearch] = useState<string>(initSearch || '');
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchParams(search ? { search } : {});
    }
  };

  return (
    <SearchLinkContainer>
      <SearchIcon src={searchIcon} alt="searchIcon" />
      <SearchInput
        name="search"
        type="text"
        placeholder="링크를 검색해 보세요."
        value={search}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
      />
    </SearchLinkContainer>
  );
};

export default SearchLink;
