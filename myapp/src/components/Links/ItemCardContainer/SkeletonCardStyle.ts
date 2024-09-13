import styled, { keyframes } from 'styled-components';
import { BREAKPOINTS } from '../../../constatnts/Breakpoint';

const loadingAnimation = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

export const SkeletonCardContainer = styled.div`
  width: 32.5rem;
  height: 32.7rem;
  background-color: var(--gray30);
  border-radius: 15px;
  position: relative;
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.08);
  @media screen and (max-width: ${BREAKPOINTS.largeDesktop}) and (min-width: ${BREAKPOINTS.tablet}) {
    width: 34rem;
    height: 33.4rem;
  }
  @media screen and (min-width: ${BREAKPOINTS.largeDesktop}) {
    width: 34rem;
    height: 33.4rem;
  }
`;

export const SkeletonCardInfoBox = styled.div`
  background-color: var(--gray10);
  border-radius: 0 0 15px 15px;
  width: 32.5rem;
  height: 13.5rem;
  position: absolute;
  bottom: 0;
  @media screen and (max-width: ${BREAKPOINTS.largeDesktop}) and (min-width: ${BREAKPOINTS.tablet}) {
    width: 34rem;
  }
  @media screen and (min-width: ${BREAKPOINTS.largeDesktop}) {
    width: 34rem;
  }
`;
export const SkeletonCardTimeDiff = styled.div`
  width: 8.8rem;
  height: 1.6rem;
  position: absolute;
  bottom: 10.3rem;
  left: 2rem;
  border-radius: 5px;
  background: linear-gradient(90deg, var(--gray30) 0%, var(--gray40) 10%, var(--gray30) 60%);
  background-size: 200% 100%;
  animation: ${loadingAnimation} 2s infinite;
`;
export const SkeletonCardDescription = styled.div`
  width: 28.5rem;
  height: 4rem;
  background-color: var(--gray30);
  position: absolute;
  bottom: 4.4rem;
  left: 2rem;
  border-radius: 5px;
  background: linear-gradient(90deg, var(--gray30) 0%, var(--gray40) 10%, var(--gray30) 60%);
  background-size: 200% 100%;
  animation: ${loadingAnimation} 2s infinite;
  @media screen and (max-width: ${BREAKPOINTS.largeDesktop}) and (min-width: ${BREAKPOINTS.tablet}) {
    width: 30rem;
    height: 4.9rem;
  }
  @media screen and (min-width: ${BREAKPOINTS.largeDesktop}) {
    width: 30rem;
    height: 4.9rem;
  }
`;
export const SkeletonCardCreatedAt = styled.div`
  width: 7rem;
  height: 1.6rem;
  background-color: var(--gray30);
  position: absolute;
  bottom: 1.5rem;
  left: 2rem;
  border-radius: 5px;
  background: linear-gradient(90deg, var(--gray30) 0%, var(--gray40) 10%, var(--gray30) 60%);
  background-size: 200% 100%;
  animation: ${loadingAnimation} 2s infinite;
`;
