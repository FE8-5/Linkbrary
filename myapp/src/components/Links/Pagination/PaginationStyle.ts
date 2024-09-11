import styled from 'styled-components';
import { BREAKPOINTS } from '../../../constatnts/Breakpoint';

export const PaginationContainer = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 6rem;
  @media screen and (max-width: ${BREAKPOINTS.largeDesktop}) and (min-width: ${BREAKPOINTS.tablet}) {
    margin-bottom: 11.3rem;
  }
  @media screen and (min-width: ${BREAKPOINTS.largeDesktop}) {
    margin-bottom: 9.7rem;
  }
`;
export const PaginationButtonBox = styled.div`
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 600;
  color: #1f1f1f;
  background-color: #f7f7f7;
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;

  &:disabled {
    color: #c4c4c4;
    cursor: not-allowed;
    background-color: #f7f7f7;

    img {
      filter: grayscale(100%);
      opacity: 0.3;
    }
  }
`;
