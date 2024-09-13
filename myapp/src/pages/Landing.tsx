import styles from '../styles/Landing/Landing.module.css';
import Footer from '../components/@Shared/Footer/Footer';
import Header from '../components/@Shared/Header/Header';
import { useNavigate } from 'react-router-dom';
import homeHeroImg from '../assets/images/home-hero-img.png';
import saveLinkImg from '../assets/images/save-link-img.png';
import manageLinkImg from '../assets/images/manage-link-img.png';
import shareLinkImg from '../assets/images/share-link-img.png';
import searchLinkImg from '../assets/images/search-link-img.png';

const Page: React.FC = () => {
  const navigate = useNavigate();

  const handleLinkClick = () => {
    navigate('/links');
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <div>
            <h1 className={styles.title}>
              <span className={styles['title-gradient']}>세상의 모든 정보</span>를
              <br />
              쉽게 저장하고<span> </span>
              <br className={styles['hidden-br-pc']} />
              관리해보세요
            </h1>
            <button className={styles['add-link']} onClick={handleLinkClick}>
              링크 추가하기
            </button>
          </div>
          <img className={styles['home-hero-img']} alt="home-hero-img" src={homeHeroImg} />
        </main>

        <section className={styles.section}>
          <article className={`${styles.article} ${styles.mobile}`}>
            <h2 className={`${styles['article-heading']} ${styles.left} ${styles.mobile}`}>
              <span className={styles['save-link-gradient']}>원하는 링크</span>를<span> </span>
              <br className={styles['hidden-br-mobile']} />
              저장하세요
            </h2>
            <p className={`${styles.left} ${styles.mobile}`}>
              나중에 읽고 싶은 글, 다시 보고 싶은 영상,
              <br className={styles['hidden-br-mobile']} />
              사고 싶은 옷, 기억하고 싶은 모든 것을
              <br className={styles['hidden-br-mobile']} />한 공간에 저장하세요.
            </p>
            <img
              alt="save-link-img"
              src={saveLinkImg}
              className={`${styles['content-imgs']} ${styles.right} ${styles.mobile}`}
            />
          </article>
          <article className={`${styles.article} ${styles.mobile}`}>
            <img
              alt="manage-link-img"
              src={manageLinkImg}
              className={`${styles['content-imgs']} ${styles.left} ${styles.mobile}`}
            />

            <h2 className={`${styles['article-heading']} ${styles.right} ${styles.mobile}`}>
              링크를 폴더로 <br className={styles['hidden-br-mobile']} />
              <span className={styles['manage-link-gradient']}>관리</span>하세요
            </h2>
            <p className={`${styles.right} ${styles.mobile}`}>
              나만의 폴더를 무제한으로 만들고
              <br className={styles['hidden-br-mobile']} />
              다양하게 활용할 수 있습니다.
            </p>
          </article>
          <article className={`${styles.article} ${styles.mobile}`}>
            <h2 className={`${styles['article-heading']} ${styles.left} ${styles.mobile}`}>
              저장한 링크를 <br className={styles['hidden-br-mobile']} />
              <span className={styles['share-link-gradient']}>공유</span>해보세요
            </h2>
            <p className={`${styles.left} ${styles.mobile}`}>
              여러 링크를 폴더에 담고 공유할 수 있습니다.
              <br className={styles['hidden-br-mobile']} />
              가족, 친구, 동료들에게 쉽고 빠르게 링크를
              <br className={styles['hidden-br-mobile']} />
              공유해 보세요.
            </p>

            <img
              alt="share-link-img"
              src={shareLinkImg}
              className={`${styles['content-imgs']} ${styles.right} ${styles.mobile}`}
            />
          </article>
          <article className={`${styles.article} ${styles.mobile}`}>
            <img
              alt="search-link-img"
              src={searchLinkImg}
              className={`${styles['content-imgs']} ${styles.left} ${styles.mobile}`}
            />

            <h2 className={`${styles['article-heading']} ${styles.right} ${styles.mobile}`}>
              저장한 링크를 <br className={styles['hidden-br-mobile']} />
              <span className={styles['search-link-gradient']}>검색</span>해보세요
            </h2>
            <p className={`${styles.right} ${styles.mobile}`}>중요한 정보들을 검색으로 쉽게 찾아보세요.</p>
          </article>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Page;
