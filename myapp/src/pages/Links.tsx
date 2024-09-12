import { useState } from 'react';
import Header from '../components/@Shared/Header/Header';
import AddLink from '../components/Links/AddLink/AddLink';
import LinksWrapper from '../components/Links/LinksWrapper/LinksWrapper';

function Links() {
  const [isNewItem, setIsNewItem] = useState(false);

  return (
    <>
      <Header />
      <AddLink setIsNewItem={setIsNewItem} />
      <LinksWrapper isNewItem={isNewItem} setIsNewItem={setIsNewItem} />
    </>
  );
}

export default Links;
