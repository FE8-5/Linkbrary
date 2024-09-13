import styled from 'styled-components';
import { BREAKPOINTS } from '../../../constatnts/Breakpoint';

export const AddFolderButton = styled.button`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.9rem;
  color: var(--primary);
  background-color: var(--white);
  border: 1px solid var(--primary);
  padding: 1rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  width: 11rem;
  transform: 'translate(-50%, -50%)';
  position: fixed;
  bottom: 5rem;
  left: 35%;
  @media screen and (min-width: ${BREAKPOINTS.tablet}) {
    position: inherit;
    border: none;
    padding: 0 1rem;
    transform: none;
  }
`;

export const PlusIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;
