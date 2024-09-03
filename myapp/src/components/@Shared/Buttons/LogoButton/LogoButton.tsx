import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledLogoButton } from './LogoButtonStyle';
import logoImg from '../../../../assets/Images/logo.png';

// 로고 버튼 컴포넌트
const LogoButton: React.FC = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 네비게이션 처리

  // 버튼 클릭 시 호출되는 함수
  const handleClick = () => {
    navigate('/'); // 랜딩 페이지로 이동
  };

  return (
    <StyledLogoButton onClick={handleClick}>
      <img src={logoImg} alt="Linkbrary 로고" />
    </StyledLogoButton>
  );
};

export default LogoButton;
