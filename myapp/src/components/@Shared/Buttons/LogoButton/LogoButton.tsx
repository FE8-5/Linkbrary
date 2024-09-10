import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledLogoButton } from './LogoButtonStyle';
import { LogoButtonProps } from '../../../../types/buttonTypes';
import logoImg from '../../../../assets/Images/logo.png';

// 로고 버튼 컴포넌트 (너피, 높이 값이 없으면 기본값으로 적용)
const LogoButton: React.FC<LogoButtonProps> = ({ width = '21rem', height = 'auto' }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <StyledLogoButton onClick={handleClick} width={width} height={height}>
      <img src={logoImg} alt="Linkbrary 로고" />
    </StyledLogoButton>
  );
};

export default LogoButton;
