import styled from 'styled-components';

export const AddLinkModalTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.4rem;
  margin-bottom: 1rem;
`;

export const AddLinkModalSubtitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.2rem;
  color: var(--gray40);
  margin-bottom: 2rem;
`;

export const FolderList = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: scroll;
  margin-bottom: 2rem;
`;

export const Folder = styled.div<{ $isSelected: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  padding: 0.5rem;
  border-radius: 0.8rem;
  background-color: ${({ $isSelected }) => ($isSelected ? 'var(--gray20)' : 'transparent')};
  &:hover {
    background-color: var(--gray20);
  }
`;

export const FolderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const FolderTitle = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

export const LinkNum = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.6rem;
  color: var(--gray40);
`;

export const CheckIcon = styled.img`
  width: 1.4rem;
  height: 1.4rem;
`;
