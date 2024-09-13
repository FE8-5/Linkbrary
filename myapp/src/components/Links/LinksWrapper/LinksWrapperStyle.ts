import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: calc(100vh - 16rem);
  max-width: 106rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto;
  gap: 5rem;
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
