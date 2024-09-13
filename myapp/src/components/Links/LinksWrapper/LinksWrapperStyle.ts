import styled from 'styled-components';
import { BREAKPOINTS } from '../../../constatnts/Breakpoint';

export const Wrapper = styled.div`
  max-width: 106rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem 1.5rem;
  gap: 5rem;

  @media screen and (min-width: ${BREAKPOINTS.largeDesktop}) {
    margin: 5rem auto;
  }
`;

export const SearchResultsContent = styled.p`
  align-self: flex-start;
  font-size: 3.2rem;
  font-weight: 600;
  line-height: 3.8rem;
  color: var(--gray40);
`;

export const Keyword = styled.span`
  color: var(--black);
`;
