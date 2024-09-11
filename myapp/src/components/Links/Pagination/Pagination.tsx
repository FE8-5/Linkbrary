import { useEffect, useState } from 'react';
import { PaginationArrowButton, PaginationButton, PaginationButtonBox, PaginationContainer } from './PaginationStyle';
import PaginationArrowRightImg from '../../../assets/Icons/pagination-arrow-right.png';

interface PropsType {
  totalItems: number;
  pageSize: number;
  pageCount: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

function Pagination({ totalItems, pageSize, pageCount, currentPage, setCurrentPage }: PropsType) {
  const [start, setStart] = useState(1);
  const totalPages = Math.ceil(totalItems / pageSize);
  const noPrev = currentPage === 1;
  const noNext = currentPage === totalPages;

  useEffect(() => {
    if (currentPage >= start + pageCount) setStart(prev => prev + pageCount);
    if (currentPage < start) setStart(prev => Math.max(prev - pageCount, 1));
  }, [currentPage, pageCount, start]);

  const onClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const onLeftArrowClick = (currentPage: number) => {
    setCurrentPage(currentPage - 1);
  };
  const onRightArrowClick = (currentPage: number) => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <PaginationContainer>
      <li>
        <PaginationArrowButton onClick={() => onLeftArrowClick(currentPage)} disabled={noPrev}>
          <img
            src={PaginationArrowRightImg}
            alt="페이지 네이션 왼쪽 화살표 버튼"
            style={{
              transform: 'scale(-1, 1)',
              width: '20px',
              height: '20px',
            }}
          />
        </PaginationArrowButton>
      </li>
      <PaginationButtonBox>
        {Array.from(
          { length: pageCount },
          (_, i) =>
            start + i <= totalPages && (
              <li key={start + i} onClick={() => onClick(start + i)}>
                <PaginationButton $currentPage={start + i === currentPage}>{start + i}</PaginationButton>
              </li>
            )
        )}
        <PaginationButton>...</PaginationButton>
        <PaginationButton onClick={() => onClick(totalPages)}>{totalPages}</PaginationButton>
      </PaginationButtonBox>
      <PaginationArrowButton onClick={() => onRightArrowClick(currentPage)} disabled={noNext}>
        <img src={PaginationArrowRightImg} width="20px" height="20px" alt="페이지 네이션 오른쪽 화살표 버튼" />
      </PaginationArrowButton>
    </PaginationContainer>
  );
}

export default Pagination;
