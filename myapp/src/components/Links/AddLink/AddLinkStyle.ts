import styled from 'styled-components';
import { BREAKPOINTS } from '../../../constatnts/Breakpoint';

export const AddLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--gray10);
  padding: 2.4rem 3.2rem 4rem 3.2rem;
  @media screen and (max-width: ${BREAKPOINTS.largeDesktop}) and (min-width: ${BREAKPOINTS.tablet}) {
    padding: 6rem 3.25rem 9rem 3.25rem;
  }
  @media screen and (min-width: ${BREAKPOINTS.largeDesktop}) {
    padding: 6rem 0 9rem 0;
  }
`;

export const AddLinkInputContainer = styled.div`
  max-width: 80rem;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid var(--primary);
  border-radius: 1.5rem;
  padding: 0.8rem 1rem 0.8rem 1rem;
  gap: 0.5rem;

  @media screen and (max-width: ${BREAKPOINTS.largeDesktop}) and (min-width: ${BREAKPOINTS.tablet}) {
    padding: 1.6rem;
  }
  @media screen and (min-width: ${BREAKPOINTS.largeDesktop}) {
    padding: 1.6rem;
  }
`;

export const LinkIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const AddLinkInput = styled.input`
  flex: 1;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  width: 1rem;
`;
