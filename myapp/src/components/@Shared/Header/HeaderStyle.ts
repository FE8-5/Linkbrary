import styled from 'styled-components';
import { BREAKPOINTS } from '../../../constatnts/Breakpoint';
import { Link } from 'react-router-dom';

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

export const ProFileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  position: relative;
`;
export const FavoriteBtn = styled(Link)`
  width: 9.3rem;
  padding: 1rem 1.2rem;
  gap: 0.6rem;
  border-radius: 0.4rem;
  border: 1px solid var(--primary);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.6rem;
  color: var(--black);
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
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.6rem;
`;

export const LogoutBtn = styled.button<{ $show: Boolean }>`
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
