import styled from 'styled-components';
import { BREAKPOINTS } from '../../../constatnts/Breakpoint';

export const FooterContainer = styled.div`
  max-width: 100%;
  max-height: 16rem;
  height: 16rem;
  background-color: #111322;
  position: relative;
  transform: translateY(0%);
  @media screen and (max-width: ${BREAKPOINTS.largeDesktop}) and (min-width: ${BREAKPOINTS.tablet}) {
  }
  @media screen and (min-width: ${BREAKPOINTS.largeDesktop}) {
  }
`;

export const FooterBox = styled.div`
  padding: 3.2rem;
  @media screen and (max-width: ${BREAKPOINTS.largeDesktop}) and (min-width: ${BREAKPOINTS.tablet}) {
    padding: 3.2rem 10.4rem 0.8rem;
  }

  @media screen and (min-width: ${BREAKPOINTS.largeDesktop}) {
    padding: 3.2rem 10.4rem 0.8rem;
  }
`;

export const FooterLinkBar = styled.div`
  color: #cfcfcf;
  font-size: 1.6rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6rem;
`;

export const SinceText = styled.p`
  position: absolute;
  top: 11rem;
  color: #676767;
  font-size: 1.6rem;
  font-weight: 400;
  @media screen and (max-width: ${BREAKPOINTS.largeDesktop}) and (min-width: ${BREAKPOINTS.tablet}) {
    position: static;
  }
  @media screen and (min-width: ${BREAKPOINTS.largeDesktop}) {
    position: static;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: left;
  font-size: 1.6rem;
  font-weight: 400;
  a {
    text-decoration: none;
    color: #cfcfcf;
  }
`;

export const MiniLogoBox = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;
