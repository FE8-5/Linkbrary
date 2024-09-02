import styled from 'styled-components';
import { BREAKPOINTS } from '../../../constatnts/Breakpoint';

export const HeaderContainer = styled.header`
  background-color: #f0f6ff;
  padding: 1.3rem 3.2rem;
  @media screen and (max-width: ${BREAKPOINTS.largeDesktop}) and (min-width: ${BREAKPOINTS.tablet}) {
    padding: 2rem 20rem;
  }
  @media screen and (min-width: ${BREAKPOINTS.largeDesktop}) {
    padding: 2rem 20rem;
  }
`;

export const HeaderList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
