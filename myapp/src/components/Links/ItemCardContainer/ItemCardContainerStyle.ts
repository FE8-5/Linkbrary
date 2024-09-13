import styled from 'styled-components';
import { BREAKPOINTS } from '../../../constatnts/Breakpoint';

export const ItemCardGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (max-width: ${BREAKPOINTS.largeDesktop}) and (min-width: ${BREAKPOINTS.tablet}) {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    height: 100%;
  }
  @media screen and (min-width: ${BREAKPOINTS.largeDesktop}) {
    max-width: 1060px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    height: 100%;
  }
`;

export const NoLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10rem;
  font-size: 1.4rem;
  font-weight: 400;
  color: #000;
  margin-bottom: 100px;
  @media screen and (max-width: ${BREAKPOINTS.largeDesktop}) and (min-width: ${BREAKPOINTS.tablet}) {
    font-size: 1.6rem;
  }
  @media screen and (min-width: ${BREAKPOINTS.largeDesktop}) {
    font-size: 1.6rem;
  }
`;
