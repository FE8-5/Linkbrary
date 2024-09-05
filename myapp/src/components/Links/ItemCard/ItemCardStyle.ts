import styled from 'styled-components';
import { BREAKPOINTS } from '../../../constatnts/Breakpoint';

export const CardContainer = styled.div`
  border-radius: 15px;
  width: 32.5rem;
  height: 32.7rem;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  @media screen and (max-width: ${BREAKPOINTS.largeDesktop}) and (min-width: ${BREAKPOINTS.tablet}) {
    width: 34rem;
    height: 33.4rem;
  }
  @media screen and (min-width: ${BREAKPOINTS.largeDesktop}) {
    width: 34rem;
    height: 33.4rem;
  }
`;

export const CardImageWrapper = styled.div`
  position: relative;
`;

export const CardImage = styled.img`
  background-color: var(--primary);
  width: 100%;
  height: 19.2rem;
  border-radius: 1.5rem 1.5rem 0 0;
`;

export const CardFavoriteStarBtn = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 28rem;
  @media screen and (max-width: ${BREAKPOINTS.largeDesktop}) and (min-width: ${BREAKPOINTS.tablet}) {
    top: 1.6rem;
    left: 29.2rem;
  }
  @media screen and (min-width: ${BREAKPOINTS.largeDesktop}) {
    top: 1.6rem;
    left: 29.2rem;
  }
`;
export const CardFavoriteStarSvg = styled.svg<{ $favorite: boolean }>`
  width: 3rem;
  height: 3rem;
  path {
    fill: ${props => (props.$favorite ? 'var(--primary)' : 'black')};
    fill-opacity: ${props => (props.$favorite ? 0.8 : 0.2)};
    stroke: white;
  }
  ${CardFavoriteStarBtn}:hover & path {
    fill: var(--primary);
    fill-opacity: 0.5;
  }
`;

export const InfoContainer = styled.div`
  padding: 1.5rem 2rem;
`;

export const TimeMenuBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const TimeAgo = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  color: #666;
`;

export const InfoDescription = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: #000;
  margin-bottom: 1rem;
  line-height: 2.4rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const InfoCreatedAt = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: #333;
`;
