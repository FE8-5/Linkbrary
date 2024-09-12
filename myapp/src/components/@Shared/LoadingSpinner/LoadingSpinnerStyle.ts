import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

export const Loader = styled.div<{ $width: string }>`
  width: ${({ $width }) => $width};
  aspect-ratio: 1;
  display: grid;
  border-radius: 50%;
  background:
    linear-gradient(0deg, rgba(0, 0, 100, 0.5) 30%, transparent 0 70%, rgba(0, 0, 100, 1) 0) 50% / 8% 100%,
    linear-gradient(90deg, rgba(0, 0, 100, 0.25) 30%, transparent 0 70%, rgba(0, 0, 100, 0.75) 0) 50% / 100% 8%;
  background-repeat: no-repeat;
  animation: ${rotateAnimation} 1s infinite steps(12);

  &::before,
  &::after {
    content: '';
    grid-area: 1/1;
    border-radius: 50%;
    background: inherit;
    opacity: 0.915;
    transform: rotate(30deg);
  }

  &::after {
    opacity: 0.83;
    transform: rotate(60deg);
  }
`;
