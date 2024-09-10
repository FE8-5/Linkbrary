import styled from 'styled-components';

export const PaginationContainer = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const PaginationButtonBox = styled.li`
  display: flex;
  gap: 0.4rem;
  margin: 0 0.8rem;
`;
export const PaginationButton = styled.button<{ $currentPage?: boolean }>`
  font-size: 1.6rem;
  font-weight: 600;
  color: #c4c4c4;
  background-color: #f7f7f7;
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 6px;
  &:disabled {
    color: #c4c4c4;
  }
  ${({ $currentPage }) =>
    $currentPage &&
    `
      color: #1f1f1f;
  `}
`;
export const PaginationArrowButton = styled.button`
  font-size: 1.6rem;
  font-weight: 600;
  color: #1f1f1f;
  background-color: #f7f7f7;
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 6px;
  &:disabled {
    color: #c4c4c4;
  }
`;
