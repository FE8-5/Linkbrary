import { useState } from 'react';
import Header from '../components/@Shared/Header/Header';
import AddLink from '../components/Links/AddLink/AddLink';
import LinksWrapper from '../components/Links/LinksWrapper/LinksWrapper';
import Footer from '../components/@Shared/Footer/Footer';

function Links() {
  const [isNewItem, setIsNewItem] = useState(false);

  return (
    <>
      <Header />
      <AddLink setIsNewItem={setIsNewItem} />
      <LinksWrapper isNewItem={isNewItem} setIsNewItem={setIsNewItem} />
      <Footer />
    </>
  );
}

export default Links;
