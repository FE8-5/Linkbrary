import styled from 'styled-components';
import { BREAKPOINTS } from '../../../constatnts/Breakpoint';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  background-color: #f0f6ff;
  padding: 1.3rem 3rem;
  @media screen and (max-width: ${BREAKPOINTS.largeDesktop}) and (min-width: ${BREAKPOINTS.tablet}) {
    padding: 2rem 13rem;
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

export const ProFileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  position: relative;
`;
export const FavoriteBtn = styled(Link)`
  width: 100%;
  padding: 0.8rem 0.6rem;
  border-radius: 0.4rem;
  border: 1px solid var(--primary);
  color: var(--black);
  margin-left: 2rem;
  gap: 0.4rem;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.4rem;

  @media screen and (min-width: ${BREAKPOINTS.tablet}) {
    padding: 1rem 1.2rem;
    gap: 0.6rem;
    font-size: 1.4rem;
    line-height: 1.6rem;
  }
`;

export const ProfileBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: transparent;
`;

export const ProfileImg = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
`;

export const ProfileNickName = styled.span`
  display: none;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.6rem;
  @media screen and (min-width: ${BREAKPOINTS.tablet}) {
    display: block;
  }
`;

export const LogoutBtn = styled.div<{ $show: Boolean }>`
  display: ${({ $show }) => ($show ? 'block' : 'none')};
  position: absolute;
  right: 0;
  bottom: -5rem;
  font-size: 1.6rem;
  background-color: var(--gray10);
  padding: 0.8rem 1.2rem;
  border-radius: 0.5rem;
  border: 1px solid var(--primary);
`;
