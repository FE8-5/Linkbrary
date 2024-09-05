import styled from 'styled-components';

export const DropDownContainer = styled.div`
  position: relative;
`;

export const DropDownBar = styled.ul`
  position: absolute;
  right: 0;
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid var(--gray20);
`;

export const DropDownSelect = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 3.1rem;
  padding: 0.7rem 1.2rem;
  background-color: var(--white);
  color: #333236;
  font-size: 1.4rem;
  font-weight: 400;
  pointer-events: auto;
  border: 1px solid var(--gray20);
  border-width: 1px 1px 0 1px;
  &:hover {
    background-color: var(--gray20);
    color: var(--primary);
  }
`;
