import React from 'react';
import NavigationButtons from '../NavigationButtons/NavigationButtons';
import LoginForm from '../LoginForm/LoginForm';
import SocialLogin from '../SocialLogin/SocialLogin';
import { StyledLoginContainer } from './LoginContainerStyle';

// 로그인 페이지 전체 컨테이너 컴포넌트
const LoginContainer: React.FC = () => {
  return (
    <StyledLoginContainer>
      <NavigationButtons />
      <LoginForm />
      <SocialLogin />
    </StyledLoginContainer>
  );
};

export default LoginContainer;
