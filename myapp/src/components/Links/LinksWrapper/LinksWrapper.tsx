import FolderListWithAdd from '../FolderListWithAdd /FolderListWithAdd';
import ItemCardContainer from '../ItemCardContainer/ItemCardContainer';
import SearchLink from '../SearchLink/SearchLink';
import { Wrapper } from './LinksWrapperStyle';

const LinksWrapper = () => {
  return (
    <Wrapper>
      <SearchLink />
      <FolderListWithAdd />
      <ItemCardContainer />
    </Wrapper>
  );
};

export default LinksWrapper;
