import { useEffect, useState } from 'react';
import { PaginationArrowButton, PaginationButton, PaginationButtonBox, PaginationContainer } from './PaginationStyle';

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
        <PaginationArrowButton
          onClick={() => onLeftArrowClick(currentPage)}
          disabled={noPrev}>{`<`}</PaginationArrowButton>
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
      <PaginationArrowButton
        onClick={() => onRightArrowClick(currentPage)}
        disabled={noNext}>{`>`}</PaginationArrowButton>
    </PaginationContainer>
  );
}

export default Pagination;
