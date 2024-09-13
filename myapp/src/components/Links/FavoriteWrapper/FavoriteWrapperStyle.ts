import styled from 'styled-components';
import { BREAKPOINTS } from '../../../constatnts/Breakpoint';
export const FavoriteContainer = styled.div`
  height: 100%;
  min-height: calc(100vh - 16rem);
`;
export const FavoriteLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--gray10);
  padding: 2.4rem 3.2rem 4rem 3.2rem;
  font-size: 4rem;
  font-weight: 600;
  @media screen and (max-width: ${BREAKPOINTS.largeDesktop}) and (min-width: ${BREAKPOINTS.tablet}) {
    padding: 6rem 3.25rem 9rem 3.25rem;
  }
  @media screen and (min-width: ${BREAKPOINTS.largeDesktop}) {
    padding: 6rem 0 9rem 0;
  }
`;
export const FavoriteItemContainer = styled.div`
  max-width: 106rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto;
  gap: 5rem;
`;
