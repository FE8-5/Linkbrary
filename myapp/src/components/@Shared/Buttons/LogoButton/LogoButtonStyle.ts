import styled from 'styled-components';
import { StyledLogoButtonProps } from '../../../../types/buttonTypes';

// 로고 버튼 스타일 정의
export const StyledLogoButton = styled.button<StyledLogoButtonProps>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  img {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
  }
`;
