import styled from 'styled-components';
import { BREAKPOINTS } from '../../../constatnts/Breakpoint';

export const FolderControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  gap: 1rem;
  top: 3.6rem;
  @media screen and (max-width: ${BREAKPOINTS.largeDesktop}) and (min-width: ${BREAKPOINTS.tablet}) {
    position: relative;
  }
  @media screen and (min-width: ${BREAKPOINTS.largeDesktop}) {
    position: relative;
  }
`;

export const EditFolder = styled.button`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.6rem;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--gray40);
`;

export const FolderControlsImg = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;
