import { useState } from 'react';
import Header from '../components/@Shared/Header/Header';
import AddLink from '../components/Links/AddLink/AddLink';
import LinksWrapper from '../components/Links/LinksWrapper/LinksWrapper';

function Links() {
  const [isNewItem, setIsNewItem] = useState(false);
  const [updateLinks, setUpdateLinks] = useState<boolean>(false);

  return (
    <>
      <Header />
      <AddLink setIsNewItem={setIsNewItem} updateLinks={updateLinks} setUpdateLinks={setUpdateLinks} />
      <LinksWrapper
        isNewItem={isNewItem}
        setIsNewItem={setIsNewItem}
        updateLinks={updateLinks}
        setUpdateLinks={setUpdateLinks}
      />
    </>
  );
}

export default Links;
