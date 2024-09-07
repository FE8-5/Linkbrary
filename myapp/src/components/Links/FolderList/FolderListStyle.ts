import styled from 'styled-components';

export const FolderListContainer = styled.div`
  display: flex;
  gap: 1rem;
  white-space: nowrap;
  overflow-x: auto;
  padding: 1rem 1rem;
`;

export const FolderButton = styled.button<{ isSelected: boolean }>`
  background-color: transparent;
  border: 1px solid var(--primary);
  padding: 0.8rem 1.2rem;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.9rem;
  background-color: ${({ isSelected }) => (isSelected ? 'var(--primary)' : 'transparent')};
  color: ${({ isSelected }) => (isSelected ? 'var(--white)' : 'var(--black)')};
`;

export const EmptyFolderMessage = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--gray50);
`;
