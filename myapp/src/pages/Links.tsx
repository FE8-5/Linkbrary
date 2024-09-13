import { useState } from 'react';
import Header from '../components/@Shared/Header/Header';
import AddLink from '../components/Links/AddLink/AddLink';
import LinksWrapper from '../components/Links/LinksWrapper/LinksWrapper';
import Footer from '../components/@Shared/Footer/Footer';

function Links() {
  const [isNewItem, setIsNewItem] = useState(false);
  const [updateLinks, setUpdateLinks] = useState<boolean>(false);
  const [updateFolderName, setUpdateFolderName] = useState<boolean>(false);
  const [deleteFolderState, setDeleteFolderState] = useState<boolean>(false);
  // console.log(deleteFolderState);

  return (
    <>
      <Header />
      <AddLink
        setIsNewItem={setIsNewItem}
        updateLinks={updateLinks}
        setUpdateLinks={setUpdateLinks}
        updateFolders={updateFolderName}
        deleteFolderState={deleteFolderState}
      />
      <LinksWrapper
        isNewItem={isNewItem}
        setIsNewItem={setIsNewItem}
        updateLinks={updateLinks}
        setUpdateLinks={setUpdateLinks}
        setUpdateFolders={setUpdateFolderName}
        setDeleteFolderState={setDeleteFolderState}
      />
      <Footer />
    </>
  );
}

export default Links;
