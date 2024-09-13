import styled from 'styled-components';
import { BREAKPOINTS } from '../../../constatnts/Breakpoint';

export const AddFolderButton = styled.button`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.9rem;
  color: #fff;
  background-color: var(--primary);
  border: 1px solid var(--primary);
  padding: 1rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  width: 11rem;
  position: fixed;
  bottom: 5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  padding: 0.8rem 2.4rem;
  white-space: nowrap;
  @media screen and (min-width: ${BREAKPOINTS.tablet}) {
    background-color: var(--white);
    color: var(--primary);
    position: inherit;
    border: none;
    padding: 0 1rem;
    transform: none;
  }
`;

export const PlusIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  filter: invert(100%) sepia(17%) saturate(7469%) hue-rotate(180deg) brightness(124%) contrast(100%);
  @media screen and (min-width: ${BREAKPOINTS.tablet}) {
    color: var(--primary);
    filter: none;
  }
`;
